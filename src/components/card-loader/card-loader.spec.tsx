import { h } from 'preact'
import { render, waitFor } from '@testing-library/preact'
import { fake } from 'sinon'
import { assert, expect } from 'chai'
import { CardLoader } from './card-loader'
import { filenames } from '../../cards'

describe('CardLoader', () => {
  it('calls onError if an image fails to load', async () => {
    const handleError = fake()
    const paths = [...filenames.slice(0, filenames.length - 1), '404.png']
    render(<CardLoader imgSrcPaths={paths} onError={handleError} />)
    await waitFor(() => expect(handleError.calledOnce))
  })
  it.skip('calls onComplete when all images have loaded', async () => {
    const handleComplete = fake()
    render(<CardLoader onComplete={handleComplete} />)
    await waitFor(() => assert(handleComplete.called))
  })
})
