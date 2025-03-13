import { instance } from '../index'
import { QueryFunction } from '@tanstack/react-query'
import { Pokemon } from '@/models/Pokemon'

export type PokemonQueryKey = [
  string,
  {
    id?: number | string
  },
]

export type PokemonResponse = Pokemon

export const getPokemon: QueryFunction<PokemonResponse, PokemonQueryKey> = async ({ queryKey }) => {
  const [, { id }] = queryKey

  const response = await instance.get<PokemonResponse>(`/pokemon${id ? `/${id}` : ''}`)
  return response.data
}
