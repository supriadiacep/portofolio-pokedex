import { Pokemon } from '@/models/Pokemon'
import { instance } from '../index'
import { NamedAPIResource } from '@/models/Utility'
import { QueryFunction } from '@tanstack/react-query'
import { AxiosRequestConfig } from 'axios'

export type PokemonsQueryKey = [
  string,
  {
    limit?: number
  },
]

export type PokemonsResponse = {
  count: number
  next: string | null
  previous: string | null
  results: NamedAPIResource[]
}

export type PokemonResponse = Pokemon

export const getPokemons: QueryFunction<PokemonsResponse, PokemonsQueryKey, string> = async ({
  queryKey,
  pageParam,
}) => {
  const [, { limit }] = queryKey

  const offset = pageParam.split('offset=')[1].split('&')[0]

  const params: AxiosRequestConfig = {
    params: {
      limit,
      offset,
    },
  }

  const response = await instance.get<PokemonsResponse>(`/pokemon`, params)
  return response.data
}
