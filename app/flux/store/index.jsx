import React, { cloneElement } from 'react'
import Counter from './counter'

const providers = [<Counter.Provider />]

const Store = ({ children: initial }) =>
  providers.reduce(
    (children, parent) => cloneElement(parent, { children }),
    initial,
  )

export { Store, Counter }
