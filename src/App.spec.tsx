import { h } from 'preact'
import { render } from '@testing-library/preact'
import { expect } from 'chai'
import App from './App'

describe('<App>', () => {
  it('does something simple', () => {
    expect(2 + 2 === 4)
  })
  it('renders learn react link', () => {
    const { getByText } = render(<App />)
    const linkElement = getByText(/learn preact/i)
    expect(document.body.contains(linkElement))
  })
})
