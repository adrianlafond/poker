import { h } from 'preact'
import { render, waitFor } from '@testing-library/preact'
import { fake } from 'sinon'
import { expect } from 'chai'
import { Card } from './card'
import { keys } from '../../cards'

describe('Card', () => {
  keys.forEach(key => {
    it(`calls onLoad for key "${key}"`, async () => {
      const handleLoad = fake()
      render(<Card id={key} onLoad={handleLoad} />)
      await waitFor(() => expect(handleLoad.calledOnceWith(key)))
    })
    it(`calls onError for key "${key}"`, async () => {
      const handleError = fake()
      render(<Card id={key} onError={handleError} src="/404.png" />)
      await waitFor(() => expect(handleError.calledOnceWith(key)))
    })
  })
});
