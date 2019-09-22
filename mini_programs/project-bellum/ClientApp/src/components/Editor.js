import React, { useState } from 'react'

export const Editor = ({ cards, addCard, name = 'justin' }) => {
  const [card, setCard] = useState({})
  return (
    <main>
      <section>
        <h2>Welcome, {name}</h2>
      </section>
      {cards.map(card => <div key={card.name}>{card.name}</div>)}
      <form onSubmit={e => {
        e.preventDefault()
        addCard(card)
        setCard({ name: '' })
      }}>
        <input value={card.name} onChange={e => setCard({ name: e.target.value })} />
        <input type="button"

          value="Add Card" />
      </form>
    </main>
  )
}