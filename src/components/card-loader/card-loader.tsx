import { JSX, h } from 'preact'
import { useRef } from 'preact/hooks'
import { filenames, imgAlts } from '../../cards'
import './styles.css'

export interface CardLoaderProps {
  imgSrcPaths?: string[],
  onComplete?: () => void
  onError?: () => void
}

export function CardLoader({
  imgSrcPaths,
  onComplete,
  onError,
}: CardLoaderProps): JSX.Element {
  const complete = useRef(0)

  const handleComplete = (): void => {
    if (++complete.current === 52) {
      onComplete?.()
    }
  }

  const paths = imgSrcPaths ?? filenames;

  return (
    <div class="card-loader">
      <div class="card-loader__suit">
        {paths.slice(0, 13).map((filename, index) => (
          <img
            class="card-loader__img"
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class="card-loader__suit">
        {paths.slice(13, 26).map((filename, index) => (
          <img
            class="card-loader__img"
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class="card-loader__suit">
        {paths.slice(26, 39).map((filename, index) => (
          <img
            class="card-loader__img"
            key={filename}
            onAbort={onError}
            onError={onError}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
      <div class="card-loader__suit">
        {paths.slice(39).map((filename, index) => (
          <img
            class="card-loader__img"
            key={filename}
            onAbort={onError}
            onError={console.log}
            onLoad={handleComplete}
            src={filename}
            alt={imgAlts[index]}
          />
        ))}
      </div>
    </div>
  )
}
