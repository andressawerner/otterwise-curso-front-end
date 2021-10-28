import React, { useState } from 'react'

function Clock() {
  const [state, setState] = useState(new Date())

  setInterval(() => {
    setState(new Date())
  }, 1000)

  return (
    <div className="Clock">
      <header className="App-header">
        <h1>Relógio Local</h1>
      </header>
      <body>{`${(state.getHours() > 9 ? '' : '0') + state.getHours()}:${
        (state.getMinutes() > 9 ? '' : '0') + state.getMinutes()
      }:${(state.getSeconds() > 9 ? '' : '0') + state.getSeconds()}`}</body>
    </div>
  )
}

export default Clock
