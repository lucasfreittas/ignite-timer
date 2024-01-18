import { Play, HandPalm } from "@phosphor-icons/react";
import { 
        Button, 
        Container, 
        InputContainer, 
        TimerContainer 
} from './styles';


export function Home() {

  return (
    <Container>
      <InputContainer>
        <p>Você trabalha em</p>

        <input
          type="text"
          placeholder='Dê um nome para o seu projeto'
        />

        <p>durante</p>

        <input
          type="number" 
          placeholder='00'
          className="amountTimer"
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

      <Button>
        <Play size={20} />
        Começar
      </Button>
    </Container >
  )
};
