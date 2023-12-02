import { suits, values, template } from './constants'
import { CardKey } from './'
const path = '/cards/png/'
const extension = 'png'

const spellingMap = {
  A: 'ace',
  J: 'jack',
  Q: 'queen',
  K: 'king'
} as const

export const filenames: Record<CardKey, string> = suits.reduce<Record<CardKey, string>>((paths, suit) => {
  const suitKey = suit.charAt(0).toUpperCase()
  values.forEach(value => {
    const isDetailed = ['J', 'Q', 'K'].includes(value)
    const spelledValue = value in spellingMap ? spellingMap[value as keyof typeof spellingMap] : value
    paths[`${value}${suitKey}` as CardKey] = `${path}${spelledValue}${template}${suit}${isDetailed ? '2' : ''}.${extension}`
  })
  return paths
}, {} as Record<CardKey, string>)
