import { assert } from 'chai'
import { filenames } from './filenames'

const output = [
  '/cards/png/ace_of_clubs.png',
  '/cards/png/2_of_clubs.png',
  '/cards/png/3_of_clubs.png',
  '/cards/png/4_of_clubs.png',
  '/cards/png/5_of_clubs.png',
  '/cards/png/6_of_clubs.png',
  '/cards/png/7_of_clubs.png',
  '/cards/png/8_of_clubs.png',
  '/cards/png/9_of_clubs.png',
  '/cards/png/10_of_clubs.png',
  '/cards/png/jack_of_clubs2.png',
  '/cards/png/queen_of_clubs2.png',
  '/cards/png/king_of_clubs2.png',
  '/cards/png/ace_of_diamonds.png',
  '/cards/png/2_of_diamonds.png',
  '/cards/png/3_of_diamonds.png',
  '/cards/png/4_of_diamonds.png',
  '/cards/png/5_of_diamonds.png',
  '/cards/png/6_of_diamonds.png',
  '/cards/png/7_of_diamonds.png',
  '/cards/png/8_of_diamonds.png',
  '/cards/png/9_of_diamonds.png',
  '/cards/png/10_of_diamonds.png',
  '/cards/png/jack_of_diamonds2.png',
  '/cards/png/queen_of_diamonds2.png',
  '/cards/png/king_of_diamonds2.png',
  '/cards/png/ace_of_hearts.png',
  '/cards/png/2_of_hearts.png',
  '/cards/png/3_of_hearts.png',
  '/cards/png/4_of_hearts.png',
  '/cards/png/5_of_hearts.png',
  '/cards/png/6_of_hearts.png',
  '/cards/png/7_of_hearts.png',
  '/cards/png/8_of_hearts.png',
  '/cards/png/9_of_hearts.png',
  '/cards/png/10_of_hearts.png',
  '/cards/png/jack_of_hearts2.png',
  '/cards/png/queen_of_hearts2.png',
  '/cards/png/king_of_hearts2.png',
  '/cards/png/ace_of_spades.png',
  '/cards/png/2_of_spades.png',
  '/cards/png/3_of_spades.png',
  '/cards/png/4_of_spades.png',
  '/cards/png/5_of_spades.png',
  '/cards/png/6_of_spades.png',
  '/cards/png/7_of_spades.png',
  '/cards/png/8_of_spades.png',
  '/cards/png/9_of_spades.png',
  '/cards/png/10_of_spades.png',
  '/cards/png/jack_of_spades2.png',
  '/cards/png/queen_of_spades2.png',
  '/cards/png/king_of_spades2.png'
]

describe('cards filenames', () => {
  it('has an array of filenames for a full deck of cards', () => {
    assert.deepEqual(filenames, output)
  })
})
