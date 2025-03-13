import { getPokemons, PokemonsQueryKey, PokemonsResponse } from '@/api/pokemon/getPokemons'
import { InfiniteData, useInfiniteQuery } from '@tanstack/react-query'
import { useLocationSearch } from '../useLocationSearch'

type UseGetPokemonsParams = PokemonsQueryKey[1]

export type PokemonsResult = PokemonsResponse['results'][number] & { id: number }

type DataPokemonsResponse = Omit<PokemonsResponse, 'results'> & {
  results: PokemonsResult[]
}

export type PokemonsResponseResult = InfiniteData<DataPokemonsResponse>

type UseGetPokemonsResult = {
  data: PokemonsResponseResult | undefined
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  error: Error | null
  fetchNextPage: () => void
  hasNextPage: boolean
  refetch: () => void
}

export const useGetPokemons = ({ limit }: UseGetPokemonsParams): UseGetPokemonsResult => {
  const { search } = useLocationSearch()

  const queryKey: PokemonsQueryKey = ['pokemons', { limit }]
  const enabled = typeof search === 'string' ? false : true
  const { data, isFetching, isError, error, isSuccess, fetchNextPage, hasNextPage, refetch } =
    useInfiniteQuery<PokemonsResponse, Error, PokemonsResponseResult, PokemonsQueryKey, string>({
      queryKey,
      queryFn: getPokemons,
      select: (response) => ({
        ...response,
        pages: response.pages.map((page) => ({
          ...page,
          results: page.results.map((item) => {
            const urlSegments = item.url.split('/').filter(Boolean)
            const idString = urlSegments.pop() || ''
            return {
              ...item,
              id: parseInt(idString, 10),
            }
          }),
        })),
      }),
      enabled,
      getNextPageParam: (lastPage) => lastPage.next,
      initialPageParam: `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=0`,
    })

  return {
    data,
    isFetching,
    isError,
    error,
    isSuccess,
    fetchNextPage,
    hasNextPage,
    refetch,
  }
}
