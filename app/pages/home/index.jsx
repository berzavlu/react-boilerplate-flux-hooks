import React, { useContext } from 'react'
import { Counter } from 'flux/store'
import * as counterAction from 'actions/counter'
import style from './style.module.scss'

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
    <div className='layout'>
      <button onClick={() => addValue(1)}>Increment</button>
      <button onClick={() => substractValue(1)}>Decrement</button>
      <button onClick={() => resetValue()}>Decrement</button>
      <div className={style.wrapper}>
        <div className={style.wrapper__text}>¿hola cómo estás?</div>
        <div className={style.wrapper__emoji}>
          <span role='img' aria-label='happy'>
            😊
          </span>
        </div>
      </div>
    </div>
  )
}

export default Home
