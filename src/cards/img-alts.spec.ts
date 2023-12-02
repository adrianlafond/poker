import { imgAlts } from './img-alts'
import { expect } from 'chai'

describe('cards img alts', () => {
  it('delivers alts for each card in the deck', () => {
    expect(Object.keys(imgAlts).length === 52)
  })
})
