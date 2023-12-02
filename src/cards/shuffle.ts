import { Deck } from '.'
import { keys } from './constants'

export function shuffle(): Deck {
  const shuffled: Deck = []
  const copy = keys.slice()
  while (copy.length) {
    const index = Math.floor(Math.random() * copy.length)
    shuffled.push(copy[index])
    copy.splice(index, 1)
  }
  return shuffled
}
