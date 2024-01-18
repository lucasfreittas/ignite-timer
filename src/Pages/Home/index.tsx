import { Play, HandPalm } from "@phosphor-icons/react";
import { 
        Button, 
        Container, 
        InputContainer, 
        TimerContainer 
} from './styles';
import { useState } from "react";
import { useForm } from "react-hook-form"; //useForm para configurações do formulário, react-hook-form a bilbioteca 
import { zodResolver } from "@hookform/resolvers/zod"; // Biblioteca integrada com react-hook-form para validação do formulário
import * as zod from 'zod' // Importando todas as funções do zod como zod 

export function Home() {

  const [statusButton, setStatusButton] = useState('');

  const newTaskValidationSchema = zod.object({ // Esquema de validação do formulário
    task: zod.string().min(1, "Informe a tarefa"), // Input nomeado como task é uma string com no mínimo 1 letra e caso erro mensagem
    minutesAmount: zod.number() //Input nomeado como minutesAmount é do timpo número
                  .min(5, 'A tarefa precisa ser de no mínimo 5 minutos') // Com no mínimo valor 5
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
    console.log(data)
    reset()
  };

  const task = watch('task')
  const isInputEmpty = !task

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
          step={5}
          min={0}
          max={60}
          {...register('minutesAmount', {valueAsNumber: true})} // Criação de input integrado com biblioteca e setando pra devolver como número
        />
        <p>minutos.</p>
      </InputContainer>

      <TimerContainer>
        <p>0</p>
        <p>0</p>
        <span>:</span>
        <p>0</p>
        <p>0</p>
      </TimerContainer>

      <Button 
        className={statusButton}
        form="taskForm"
        type="submit"
        disabled={isInputEmpty}
      >
        {statusButton === '' ? <Play size={20} /> : <HandPalm size={20} />}
        {statusButton === '' ? 'Começar' : 'Interromper'}
      </Button>
    </Container >
  )
};
