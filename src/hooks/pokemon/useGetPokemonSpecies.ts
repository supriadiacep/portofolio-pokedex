import { useQuery } from '@tanstack/react-query'
import {
  getPokemonSpecies,
  PokemonSpeciesKey,
  PokemonSpeciesResponse,
} from '@/api/pokemon/getPokemonSpecies'

type UseGetPokemonSpeciesProps = {
  id: number
}

type UseGetPokemonSpeciesResult = {
  data?: PokemonSpeciesResponse | undefined
}

export const useGetPokemonSpecies = ({
  id,
}: UseGetPokemonSpeciesProps): UseGetPokemonSpeciesResult => {
  const queryKey: PokemonSpeciesKey = ['pokemon-species', id]

  const { data } = useQuery<
    PokemonSpeciesResponse,
    Error,
    PokemonSpeciesResponse,
    PokemonSpeciesKey
  >({
    queryKey,
    queryFn: getPokemonSpecies,
  })

  return {
    data,
  }
}
