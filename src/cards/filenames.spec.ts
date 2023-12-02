import { expect } from 'chai'
import { filenames } from './filenames'

describe('cards filenames', () => {
  it('has an array of filenames for a full deck of cards', () => {
    expect(Object.keys(filenames).length === 52)
  })
})
