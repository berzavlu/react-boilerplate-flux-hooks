import React, { useContext } from 'react'
import { Counter } from 'flux/store'
import * as counterAction from 'actions/counter'

const Home = () => {
  const counterDispatch = useContext(Counter.Dispatch)

  const addValue = (value) => {
    counterDispatch(counterAction.incrementCounter(value))
  }

  const substractValue = (value) => {
    counterDispatch(counterAction.decrementCounter(value))
  }

  const resetValue = () => {
    counterDispatch(counterAction.resetCounter())
  }

  return (
    <div>
      <button onClick={() => addValue(1)}>Increment</button>
      <button onClick={() => substractValue(1)}>Decrement</button>
      <button onClick={() => resetValue()}>Decrement</button>
    </div>
  )
}

export default Home
