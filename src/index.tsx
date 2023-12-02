import { h, render } from 'preact'
import 'preact/devtools'
import { App } from './components/app'
import './index.css'

const root = document.getElementById('root')

if (root != null) {
  render(<App />, root)
}
