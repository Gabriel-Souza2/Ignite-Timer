import { HistoryContainer, HistoryList, Status } from './styles'

export function History() {
  return (
    <HistoryContainer>
      <h1>Meu Historico</h1>
      <HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefas</th>
              <th>Duração</th>
              <th>Inicio</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="red">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="green">Concluido</Status>
              </td>
            </tr>
            <tr>
              <td>Tarefas</td>
              <td>28 minutos</td>
              <td>Há dois meses</td>
              <td>
                <Status statusColor="yellow">Concluido</Status>
              </td>
            </tr>
          </tbody>
        </table>
      </HistoryList>
    </HistoryContainer>
  )
}
