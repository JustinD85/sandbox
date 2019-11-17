import React from 'react'

export const Home = props => {

  const submitHandler = (e) => {
    e.preventDefault()
    props.history.push('/editor')
  }

  return (
    <main>
      <form onSubmit={submitHandler}>
        <h2>Who are you</h2>
        <input placeholder="username"></input>
        <input placeholder="password"></input>
        <input type="submit" />
      </form>
    </main>
  )
}

