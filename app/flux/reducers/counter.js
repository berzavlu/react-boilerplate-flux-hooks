import produce from 'immer'
import * as ACTIONS_TYPE from 'types/counter'

const initialState = {
  number: 0,
  persona: {
    nombre: 'Raul',
    familia: {
      padre: 'Juan',
      abuelo: { nombre: 'Mateo' },
    },
  },
}

const reducer = (state = initialState, action) => {
  return produce(state, (draft) => {
    const newState = draft
    switch (action.type) {
      case ACTIONS_TYPE.INCREMENT_COUNTER:
        newState.number += action.payload
        newState.persona.familia.abuelo.nombre = 'luis'
        break
      case ACTIONS_TYPE.DECREMENT_COUNTER:
        newState.number -= action.payload
        break
      case ACTIONS_TYPE.RESET_COUNTER:
        newState.number = initialState.number
        break
      default:
        break
    }
  })
}

export { reducer, initialState }
