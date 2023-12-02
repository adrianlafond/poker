import { StateUpdater, useState } from 'preact/hooks'

function getStoredLoaded() {
  return !!sessionStorage.getItem('poker-loaded') || false
}

function storeLoaded() {
  sessionStorage.setItem('poker-loaded', 'true')
}

export function useAppLoaded(): [boolean, () => void] {
  const [loaded, setLoaded] = useState(getStoredLoaded())

  const confirmLoaded = () => {
    storeLoaded()
    setLoaded(true)
  }

  return [loaded, confirmLoaded]
}
