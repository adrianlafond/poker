import { ComponentProps, JSX, h } from 'preact'
import { useState } from 'preact/hooks'
import { clsx } from 'clsx'
import { Loading } from '../loading'
import { CardKey, filenames, imgAlts } from '../../cards'
import './styles.css'

export interface CardProps extends Omit<ComponentProps<'div'>, 'onError' | 'onLoad' | 'size'> {
  onError?: (id: string) => void
  onLoad?: (id: string) => void
  faceDown?: boolean
  id: CardKey
  size?: 'sm' | 'md' | 'lg'
  src?: string
}

export const Card = ({ className, faceDown, id, onError, onLoad, size = 'md', src, ...otherProps }: CardProps): JSX.Element => {
  const [loaded, setLoaded] = useState(false)
  const [error, setError] = useState(false)

  const handleError = () => {
    setLoaded(true)
    setError(true)
    onError?.(id)
  }

  const handleLoad = () => {
    setLoaded(true)
    onLoad?.(id)
  }

  return (
    <div class={clsx('poker-card', `poker-card--${size}`, className)} {...otherProps}>
      <img
        class="poker-card__mode"
        key={filenames[id]}
        onAbort={handleError}
        onError={handleError}
        onLoad={handleLoad}
        src={src ?? filenames[id]}
        alt={imgAlts[id]}
      />
      {error && (
        <div class="poker-card__mode poker-card__fallback">
          <span class={`poker-card__fallback-text--${size}`}>{id}</span>
        </div>
      )}
      {!loaded && (
        <div class="poker-card__mode poker-card__loading">
          <Loading />
        </div>
      )}
      {faceDown && <div class="poker-card__mode poker-card__back"></div>}
    </div>
  )
}
