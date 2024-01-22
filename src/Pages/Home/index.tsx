import { Play, HandPalm } from "@phosphor-icons/react";
import { 
        Button, 
        Container, 
        InputContainer, 
        TimerContainer 
} from './styles';
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"; //useForm para configurações do formulário, react-hook-form a bilbioteca 
import { zodResolver } from "@hookform/resolvers/zod"; // Biblioteca integrada com react-hook-form para validação do formulário
import * as zod from 'zod' // Importando todas as funções do zod como zod 
import { differenceInSeconds } from "date-fns";


export function Home() {

  interface Task{
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptDate ?: Date
    finishedDate ?: Date,
  };

  const [taskDataBase, setTaskDataBase] = useState<Task[]>([]);
  const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const newTaskValidationSchema = zod.object({ // Esquema de validação do formulário
    task: zod.string().min(1, "Informe a tarefa"), // Input nomeado como task é uma string com no mínimo 1 letra e caso erro mensagem
    minutesAmount: zod.number() //Input nomeado como minutesAmount é do timpo número
                  .min(1, 'A tarefa precisa ser de no mínimo 5 minutos') // Com no mínimo valor 5
                  .max(60, 'A tarefa precisa ser de no máximo 60 minutos'), // No máximo valor 60

  });

  type NewTaskData = zod.infer<typeof newTaskValidationSchema> // Integração do zod com typescript para puxar diretamente as tipagens dos inputs, caso não utilize zod criar uma interface

  const { register, handleSubmit, watch, reset } = useForm<NewTaskData>({ // Criação do formulário com a biblioteca + passando as tipagens validadas no zod
    resolver: zodResolver(newTaskValidationSchema), // Integrando o resolver no nosso formulário
    defaultValues: { // Definindo valores padrões para cada input
      task: '',
      minutesAmount: 0,
    }
  });  

  function handleCreateTask(data: NewTaskData){
    const id = String(new Date().getTime());

    const newTask = {
      id,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date()
    };

    setTaskDataBase(((state) => [...state, newTask]));
    setCurrentTaskId(id);
    setAmountSecondsPassed(0);

    reset();
  }; 

  function handleInterruptTask(){
    
    setTaskDataBase(
      taskDataBase.map((state) => {
        if(state.id === currentTaskId ){
          return {...state, interruptDate: new Date()}
        } else {
          return state
        }
      })
    )

    setCurrentTaskId(null)
  };

    const currentTask = taskDataBase.find((task) => task.id === currentTaskId );
    
    const totalSeconds = currentTask ? currentTask.minutesAmount * 60 : 0;
    const currentSeconds = currentTask ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');


  const task = watch('task')
  const isInputEmpty = !task


  useEffect(() => {
    let interval: number;

    if(currentTask){
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          currentTask.startDate
        )

        if( secondsDifference >= totalSeconds){
          setTaskDataBase(state => state.map((task) => {
            if(task.id === currentTaskId){
              return {...task, finishedDate: new Date()}
            } else {
              return task
            }
          })
          )

          setAmountSecondsPassed(totalSeconds)
          clearInterval(interval)

        } else {
          setAmountSecondsPassed(secondsDifference)
        }

      }, 1000)
    }

    return() => {
      clearInterval(interval)
    };

  }, [currentTask, totalSeconds, currentTaskId])

  useEffect(() => {
    if(currentTask){
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, currentTask])


  return (
    <Container>
      <InputContainer 
        id="taskForm"
        onSubmit={handleSubmit(handleCreateTask)}
      >
        <p>Você trabalha em</p>

        <input
          type="text"
          placeholder='Dê um nome para o seu projeto'
          form="taskForm"
          list="taskSuggestions"
          disabled={!!currentTask}
          {...register('task')} // Criação de input integrado com biblioteca
          
        />

        <datalist id='taskSuggestions'>
          <option value="Opção 1" />
          <option value="Opção 2" />
          <option value="Opção 3" />
        </datalist>

        <p>durante</p>

        <input
          type="number" 
          placeholder='00'
          className="amountTimer"
          form="taskForm"
          step={1}
          min={0}
          max={60}
          disabled={!!currentTask}
          {...register('minutesAmount', {valueAsNumber: true})} // Criação de input integrado com biblioteca e setando pra devolver como número
        />
        <p>minutos.</p>
      </InputContainer>

      <TimerContainer>
        <p>{minutes[0]}</p>
        <p>{minutes[1]}</p>
        <span>:</span>
        <p>{seconds[0]}</p>
        <p>{seconds[1]}</p>
      </TimerContainer>

      {currentTask ? 
         <Button 
         form="taskForm"
         type="button"
         className="stopButton"
         onClick={handleInterruptTask}
         >
         <HandPalm size={20} />
         Interromper
       </Button>
      : 
        <Button 
        form="taskForm"
        type="submit"
        disabled={isInputEmpty}
        >
        <Play size={20} />
        Começar
        </Button>
      }
    </Container >
  )
};
