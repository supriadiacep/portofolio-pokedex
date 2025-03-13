import { getPokemon, PokemonQueryKey, PokemonResponse } from '@/api/pokemon/getPokemon'
import { useQuery, useQueryClient } from '@tanstack/react-query'
import { useLocationSearch } from '../useLocationSearch'

type UseGetPokemonParams = PokemonQueryKey[1]

type UseGetPokemonResult = {
  data: PokemonResponse | undefined
  isFetching: boolean
  isSuccess: boolean
  isError: boolean
  error: Error | null
}

export const useGetPokemon = ({ id }: UseGetPokemonParams): UseGetPokemonResult => {
  const queryKey: PokemonQueryKey = ['pokemon', { id }]
  const { search } = useLocationSearch()

  const queryClient = useQueryClient()
  const cachedData = queryClient.getQueryData<PokemonResponse>(['pokemon', { id }])

  const enabled =
    (typeof search === 'string' && cachedData?.id === id) ||
    (typeof search === 'string' && cachedData?.name === search)
      ? false
      : true

  const { data, isFetching, isError, error, isSuccess } = useQuery<
    PokemonResponse,
    Error,
    PokemonResponse,
    PokemonQueryKey
  >({
    queryKey,
    queryFn: getPokemon,
    staleTime: Infinity,
    enabled,
    retry: 2,
  })

  return {
    data,
    isFetching,
    isError,
    error,
    isSuccess,
  }
}
