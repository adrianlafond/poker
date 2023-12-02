import { suits, values } from './constants'
import { CardKey } from './'
const spellingMap = {
  A: 'Ace',
  J: 'Jack',
  Q: 'Queen',
  K: 'King'
} as const

export const imgAlts: Record<CardKey, string> = suits.reduce<Record<CardKey, string>>((alts, suit) => {
  const suitKey = suit.charAt(0).toUpperCase()
  values.forEach(key => {
    const value = key in spellingMap ? spellingMap[key as keyof typeof spellingMap] : key
    alts[`${key}${suitKey}` as CardKey] = `${value} of ${suit.charAt(0).toUpperCase()}${suit.substring(1)}`
  })
  return alts
}, {} as Record<CardKey, string>)
