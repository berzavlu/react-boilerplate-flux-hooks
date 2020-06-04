import React from 'react'
import { useThunkReducer } from 'react-hook-thunk-reducer'
import logger from 'use-reducer-logger'
import { reducer, initialState } from 'reducers/counter'
import { isProd } from 'utils/constants'

const State = React.createContext()
const Dispatch = React.createContext()

const Provider = ({ children }) => {
  const logReducer = isProd ? reducer : logger(reducer)
  const [state, dispatch] = useThunkReducer(logReducer, initialState)
  return (
    <State.Provider value={state}>
      <Dispatch.Provider value={dispatch}>{children}</Dispatch.Provider>
    </State.Provider>
  )
}

const Counter = {
  State,
  Dispatch,
  Provider,
}

export default Counter
