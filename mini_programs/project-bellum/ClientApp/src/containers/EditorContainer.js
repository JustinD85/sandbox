import React from 'react'
import { connect } from 'react-redux'
import actions from '../store/actions'
import { Editor } from '../components/Editor'

const EditorContainer = ({ addCard, cards }) => (
  <Editor addCard={addCard} cards={cards} />
)

const mapStateToProps = (state) => ({
  cards: state.cards
})

const mapDispatchToProps = dispatch => ({
  addCard: card => dispatch(actions.addCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(EditorContainer)