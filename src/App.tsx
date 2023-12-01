import { JSX, h } from 'preact'
import { useState, useEffect } from 'preact/hooks'
import './App.css'

function App (): JSX.Element {
  return (
    <div className='app'>
      <header className='app-header'>
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          <a
            href='https://preactjs.com'
            target='_blank'
            rel='noopener noreferrer'
          >
            Learn Preact OK Dawg!
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
