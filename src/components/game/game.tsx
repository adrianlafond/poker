import { JSX, h } from 'preact'

export interface GameProps {
  path?: string;
}

export const Game = ({ path }: GameProps): JSX.Element => {
  return (
    <button>new game</button>
  )
}
