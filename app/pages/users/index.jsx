import React, { useContext } from 'react'
import { Counter } from 'flux/store'

const Users = () => {
  const counterState = useContext(Counter.State)
  return <div>Users {counterState.number}</div>
}

export default Users
