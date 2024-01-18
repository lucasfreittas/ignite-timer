import { Play, HandPalm } from "@phosphor-icons/react";
import { 
        Button, 
        Container, 
        InputContainer, 
        TimerContainer 
} from './styles';
import { useState } from "react";


export function Home() {

  const [statusButton, setStatusButton] = useState('');

  function handleStopAndPlayButton(){
     event.preventDefault();
     setStatusButton(statusButton === '' ? 'stopButton' : '');
  };

  return (
    <Container>
      <InputContainer 
        id="taskForm"
        onSubmit={handleStopAndPlayButton}
      >
        <p>Você trabalha em</p>

        <input
          type="text"
          placeholder='Dê um nome para o seu projeto'
          form="taskForm"
          list="taskSuggestions"
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
      >
        {statusButton === '' ? <Play size={20} /> : <HandPalm size={20} />}
        {statusButton === '' ? 'Começar' : 'Interromper'}
      </Button>
    </Container >
  )
};
