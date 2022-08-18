import { FormProvider, useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

import { HandPalm, Play } from 'phosphor-react'
import {
  HomeContainer,
  StartCountdownButton,
  StopCountdownButton,
} from './styles'
import { NewCicleForm } from '../../components/NewCicleForm'
import { Coutdown } from '../../components/Countdown'
import { useContext } from 'react'
import { CycleContext } from '../../context/CyclesContext'

const newCycleValidationSchema = yup.object({
  task: yup.string().required('Informe a tarefa'),
  minutesAmount: yup
    .number()
    .required()
    .min(1, 'O ciclo precisa ser de no minimo 5 min')
    .max(60, 'O ciclo precisa ser de no maximo 60 min'),
})

type NewCycleFormData = yup.InferType<typeof newCycleValidationSchema>

export function Home() {
  const formContext = useForm<NewCycleFormData>({
    resolver: yupResolver(newCycleValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })

  const { activeCycle, CreateNewCycle, InterruptedCycle } =
    useContext(CycleContext)
  const { handleSubmit, watch, reset } = formContext

  const task = watch('task')
  const isSubmitDisabled = !task

  function handleCreateNewCycle(data: NewCycleFormData) {
    CreateNewCycle(data)
    reset()
  }

  function handleInterruptedCycle() {
    InterruptedCycle()
  }

  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <FormProvider {...formContext}>
          <NewCicleForm />
        </FormProvider>

        <Coutdown />
        {activeCycle ? (
          <StopCountdownButton type="button" onClick={handleInterruptedCycle}>
            <HandPalm size={24} />
            Interromper
          </StopCountdownButton>
        ) : (
          <StartCountdownButton disabled={isSubmitDisabled} type="submit">
            <Play size={24} />
            Começar
          </StartCountdownButton>
        )}
      </form>
    </HomeContainer>
  )
}
