import * as ACTIONS_TYPE from 'types/counter'

export const incrementCounter = (value) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS_TYPE.INCREMENT_COUNTER,
      payload: value,
    })
  }
}

export const decrementCounter = (value) => {
  return (dispatch) => {
    dispatch({
      type: ACTIONS_TYPE.DECREMENT_COUNTER,
      payload: value,
    })
  }
}

export const resetCounter = () => {
  return (dispatch) => {
    dispatch({ type: ACTIONS_TYPE.RESET_COUNTER })
  }
}
