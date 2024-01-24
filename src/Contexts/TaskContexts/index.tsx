import { createContext, useContext, ReactNode, useState } from "react";
import { useForm } from "react-hook-form";

interface NewTaskData {
    task: string
    minutesAmount: number
  };

interface TaskContextProviderProps{
    children: ReactNode;
};

interface Task{
    id: string,
    task: string,
    minutesAmount: number,
    startDate: Date,
    interruptDate ?: Date
    finishedDate ?: Date,
  };

interface TaskContextType{
    CreateTask: (data: NewTaskData) => void
};

export const TaskContext = createContext({} as TaskContextType ); // Typagem das coisas que vc vai exportar no provider

export function TaskContextProvider({children}:TaskContextProviderProps){

    const [taskDataBase, setTaskDataBase] = useState<Task[]>([]);
    const [currentTaskId, setCurrentTaskId] = useState<string | null>(null);
    const [amountSecondsPassed, setAmountSecondsPassed] = useState<number>(0)

    const { reset } = useForm<NewTaskData>();  

    function CreateTask(data: NewTaskData){
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
        
        console.log(taskDataBase)
        reset();
      }; 


    return(
        <TaskContext.Provider value={{
            CreateTask
        }}>
            {children}
        </TaskContext.Provider>
    )
};
