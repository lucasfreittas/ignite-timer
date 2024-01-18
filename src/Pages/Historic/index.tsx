import { Container, Status } from './styles';

export function Historic() {

  return (
    <Container>
      <h1>Meu Histórico</h1>

      <table>

        <thead>
          <tr>
            <td>Tarefa</td>
            <td>Duração</td>
            <td>Início</td>
            <td>Status</td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='yellow'>Em andamento</Status></td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='green'>Concluído</Status></td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='red'>Interrompido</Status></td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='yellow'>Em andamento</Status></td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='green'>Concluído</Status></td>
          </tr>
          <tr>
            <td>Conserto de débitos técnicos</td>
            <td>25 minutos</td>
            <td>Há cerca de 2 meses</td>
            <td><Status statusColor='red'>Interrompido</Status></td>
          </tr>
 
        </tbody>
      </table>
    
    </Container >
  )
};
