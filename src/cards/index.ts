export * from './filenames'
export * from './img-alts'
export { keys } from './constants'
export * from './shuffle'

import { keys } from './constants'
export type CardKey = (typeof keys)[number]
export type Deck = CardKey[]
