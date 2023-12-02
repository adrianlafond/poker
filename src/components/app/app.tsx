import { JSX, h } from 'preact'
import Router from 'preact-router'

import './styles.css'
import { useAppLoaded } from '../../hooks/useAppLoaded'
import { CardLoader } from '../card-loader'
import { Game } from '../game'

export function App (): JSX.Element {
  const [loaded, confirmLoaded] = useAppLoaded()

  const handleLoadingComplete = () => {
    setTimeout(confirmLoaded, 500)
  }

  return (
    <div className="app">
      <section className="app__content">
        <h1>poker</h1>
        {loaded ? (
          <Router>
            <Game path="/" />
          </Router>
        ) : (
          <CardLoader onComplete={handleLoadingComplete} />
        )}
      </section>
    </div>
  )
}
