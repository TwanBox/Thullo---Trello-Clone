import React, { useState, useEffect } from 'react'
import './App.css'

const App = () => {
  const [apiResponse, setApiResponse] = useState('')

  const callAPI = () => {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => setApiResponse(res))
  }

  useEffect(() => {
    callAPI()
  })

  return (
    <div className="App">
      <header className="App-header">
        <p>{apiResponse}</p>
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
      </header>
    </div>
  )
}

export default App;
