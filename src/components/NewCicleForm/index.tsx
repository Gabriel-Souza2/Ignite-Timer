import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CycleContext } from '../../context/CyclesContext'
import { FormContainer, TaskInput, AmountInput } from './styles'

export function NewCicleForm() {
  const { activeCycle } = useContext(CycleContext)
  const { register } = useFormContext()
  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em </label>
      <TaskInput
        type="text"
        id="task"
        disabled={!!activeCycle}
        placeholder="De um nome para seu projeto"
        list="task-suggestion"
        {...register('task')}
      />

      <datalist id="task-suggestion">
        <option value="Projeto 1" />
        <option value="Projeto 2" />
        <option value="Projeto 3" />
        <option value="banana" />
      </datalist>

      <label htmlFor="minutesAmount">durante</label>
      <AmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        {...register('minutesAmount', { valueAsNumber: true })}
      />

      <span>minutos.</span>
    </FormContainer>
  )
}
