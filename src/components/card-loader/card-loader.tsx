import { JSX, h } from 'preact'
import { useRef } from 'preact/hooks'
import { keys, filenames, imgAlts } from '../../cards'
import { Card } from '../card'
import './styles.css'

export interface CardLoaderProps {
  onComplete?: () => void
  onError?: () => void
}

export function CardLoader ({
  onComplete,
  onError
}: CardLoaderProps): JSX.Element {
  const complete = useRef(0)

  const handleComplete = (): void => {
    if (++complete.current === 52) {
      onComplete?.()
    }
  }

  const handleError = (): void => {
    onError?.()
    handleComplete()
  }

  const rows = [
    [0, 13],
    [13, 26],
    [26, 39],
    [39]
  ]

  return (
    <div class="poker-card-loader">
      {rows.map((row) => (
        <div class="poker-card-loader__suit">
          {keys.slice(...row).map((key) => (
            <Card
              key={key}
              id={key}
              onError={handleError}
              onLoad={handleComplete}
              size="sm"
            />
          ))}
        </div>
      ))}
    </div>
  )
}
