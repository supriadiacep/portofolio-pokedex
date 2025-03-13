import { QueryFunction } from '@tanstack/react-query'
import { instance } from '../index'
import { PokemonSpecies } from '@/models/PokemonSpecies'

export type PokemonSpeciesKey = ['pokemon-species', number]

export type PokemonSpeciesResponse = PokemonSpecies

export const getPokemonSpecies: QueryFunction<PokemonSpeciesResponse, PokemonSpeciesKey> = async ({
  queryKey,
}) => {
  const [, id] = queryKey

  const response = await instance.get<PokemonSpeciesResponse>(`/pokemon-species/${id}`)

  return response.data
}
