import { plain, detailed, suits } from './constants'

const values: string[] = plain.concat(detailed)
export const imgAlts: string[] = suits.reduce<string[]>((array, suit) => {
  values.forEach(value => {
    array.push(`${value.charAt(0).toUpperCase()}${value.substring(1)} of ${suit.charAt(0).toUpperCase()}${suit.substring(1)}`)
  })
  return array
}, [])
