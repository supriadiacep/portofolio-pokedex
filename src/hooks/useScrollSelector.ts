import { useEffect, useState, RefObject, Dispatch, SetStateAction } from 'react'

type UseScrollSelectorProps = {
  selector: RefObject<HTMLElement | null>
}

type UseScrollSelectorReturn = {
  isScroll: boolean
  setIsScroll: Dispatch<SetStateAction<boolean>>
}

export const useScrollSelector = ({
  selector,
}: UseScrollSelectorProps): UseScrollSelectorReturn => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = selector.current?.offsetHeight || 0
      setIsScroll(window.scrollY > heroHeight)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [selector])

  return { isScroll, setIsScroll }
}
