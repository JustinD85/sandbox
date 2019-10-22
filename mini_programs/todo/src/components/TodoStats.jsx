import React from 'react'

export default ({ todos }) => (
  <section>
    <h3>Todos</h3>
    <h2>Stats</h2>
    <label>Todo Count:
                    {todos.length}
    </label>Todo Checked Count:
                <label>
      {todos.filter(e => e.isChecked).length}
    </label>
  </section>
)