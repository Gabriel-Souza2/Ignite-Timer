import { produce } from 'immer'
import { ActionTypes } from './actions'

export interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CycleStateReducer {
  cycles: Cycle[]
  activeCycleId: string | null
}

export function cyclesReducer(state: CycleStateReducer, action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_CICLE:
      return produce(state, (draft) => {
        draft.cycles.push(action.payload.newCycle)
        draft.activeCycleId = action.payload.newCycle.id
      })

    case ActionTypes.MARKED_CURRENT_CYCLE_AS_FINISHED: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        state.activeCycleId = null
        state.cycles[currentCycleIndex].finishedDate = new Date()
      })
    }

    case ActionTypes.INTERRUPTED_ACTIVE_CYCLE: {
      const currentCycleIndex = state.cycles.findIndex((cycle) => {
        return cycle.id === state.activeCycleId
      })

      if (currentCycleIndex < 0) {
        return state
      }
      return produce(state, (draft) => {
        state.activeCycleId = null
        state.cycles[currentCycleIndex].interruptedDate = new Date()
      })
    }

    default:
      return state
  }
}
