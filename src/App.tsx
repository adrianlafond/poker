import { JSX, h } from 'preact'
import './App.css'
import { CardLoader } from './components/card-loader'

function App (): JSX.Element {
  return (
    <div className='app'>
      <section className='app__content'>
        <h1>poker</h1>
        <CardLoader />
      </section>
    </div>
  )
}

export default App
