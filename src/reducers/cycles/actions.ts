import { Cycle } from './reducer'

export enum ActionTypes {
  ADD_NEW_CICLE = 'ADD_NEW_CICLE',
  MARKED_CURRENT_CYCLE_AS_FINISHED = 'MARKED_CURRENT_CYCLE_AS_FINISHED',
  INTERRUPTED_ACTIVE_CYCLE = 'INTERRUPTED_ACTIVE_CYCLE',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionTypes.ADD_NEW_CICLE,
    payload: {
      newCycle,
    },
  }
}

export function finishedCycleAction() {
  return {
    type: ActionTypes.MARKED_CURRENT_CYCLE_AS_FINISHED,
    payload: {},
  }
}

export function interruptedActiveCycleAction() {
  return {
    type: ActionTypes.INTERRUPTED_ACTIVE_CYCLE,
    payload: {},
  }
}
