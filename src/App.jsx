import { useState } from 'react'
import reactLogo from './assets/buzz.webp'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Boostratp Assignment</h1>
      <div className="card">
        <p>I'd sooner shave my legs with a potato peeler than do another serious React project.</p>
        <p><a href="https://technical-writing-portfolio-alxd11-13f0f31fb68355b6475e4bb0276e.gitlab.io/">Raw HTML and CSS FTW.</a></p>
      </div>
    </>
  )
}

export default App
