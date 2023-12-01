import { h } from 'preact'
import { render, waitFor } from '@testing-library/preact'
import { fake, stub } from 'sinon'
import { assert } from 'chai'
import { CardLoader } from './card-loader'

describe('CardLoader', () => {
  it('calls onComplete when all images have loaded', async () => {
    const handleComplete = fake()
    render(<CardLoader onComplete={handleComplete} />)
    await waitFor(() => assert(handleComplete.called))
  })
})
