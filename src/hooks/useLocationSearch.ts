import { useLocation } from 'react-router'

type UseLocationSearchReturn = {
  search: string | undefined
}

export const useLocationSearch = (): UseLocationSearchReturn => {
  const location = useLocation()
  const searchParams = new URLSearchParams(location.search)
  const search = searchParams.get('search') || undefined

  return {
    search,
  }
}
