import { JSX, h } from 'preact'
import './styles.css'

export const Loading = (): JSX.Element => (
  <div class='poker-loading'>
    <span class='poker-loading__dot poker-loading__dot--a'>.</span>
    <span class='poker-loading__dot poker-loading__dot--b'>.</span>
    <span class='poker-loading__dot poker-loading__dot--c'>.</span>
  </div>
)
