import c from '../constants'

export const cardsReducer = (state = [{ name: 'Justin' }], action) => {

  switch (action.type) {

  case c.actions.ADD_CARD:
    return [...state, { ...action.card }]

  default:
    return state
  }
}