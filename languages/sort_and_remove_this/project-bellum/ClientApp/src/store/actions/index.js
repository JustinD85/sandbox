import constants from '../constants'

export default {
  addCard: card => ({
    type: constants.actions.ADD_CARD,
    card
  })
}