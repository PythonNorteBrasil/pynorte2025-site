import { useEffect, useState } from 'react'

export function useScrollPosition() {
  const [scrollPosition, setScrollPosition] = useState(0)

  function onChangeScrollPosition() {
    setScrollPosition(window.pageYOffset)
  }

  useEffect(() => {
    window.addEventListener('scroll', onChangeScrollPosition)

    return () => window.removeEventListener('scroll', onChangeScrollPosition)
  }, [])

  return scrollPosition
}
