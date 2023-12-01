import { plain, detailed, suits, template } from './constants'
const path = '/cards/png/'
const extension = 'png'

export const filenames: string[] = suits.reduce((array, suit) => {
  plain.forEach(value => {
    array.push(`${path}${value}${template}${suit}.${extension}`)
  })
  detailed.forEach(value => {
    array.push(`${path}${value}${template}${suit}2.${extension}`)
  })
  return array
}, new Array<string>())
