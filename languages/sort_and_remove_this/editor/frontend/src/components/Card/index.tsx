import React, { ReactElement } from 'react'

export interface cardProps {
  id: number
  name: string
}

export const Card = (card: cardProps) => (
  <section>
    <h2>Card {card.name}</h2>
  </section>
)