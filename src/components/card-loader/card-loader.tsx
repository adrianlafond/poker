import { JSX, h } from 'preact'
import { useRef } from 'preact/hooks'
import { filenames, imgAlts } from '../../cards'
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

  return (
    <div class='card-loader'>
      <div class='card-loader__suit'>
        {filenames.slice(0, 13).map((filename, index) => (
          <img
            class='card-loader__img'
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class='card-loader__suit'>
        {filenames.slice(13, 26).map((filename, index) => (
          <img
            class='card-loader__img'
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class='card-loader__suit'>
        {filenames.slice(26, 39).map((filename, index) => (
          <img
            class='card-loader__img'
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class='card-loader__suit'>
        {filenames.slice(39).map((filename, index) => (
          <img
            class='card-loader__img'
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
    </div>
  )
}
