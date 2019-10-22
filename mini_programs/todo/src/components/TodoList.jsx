import React from 'react'
import { Button } from 'reactstrap'

export default ({ todos, deleteHandler, checkboxToggler }) => (
  todos && todos.map(todo => (
    <div key={todo.id} id={todo.id} className="todo-item">
      <span>{todo.id}</span>
      <input type="checkbox" checked={todo.isChecked} onChange={checkboxToggler} />
      <div>{todo.title}</div>
      <div>{todo.input}</div>
      <Button onClick={deleteHandler}>Delete Me</Button>
    </div>))
)
