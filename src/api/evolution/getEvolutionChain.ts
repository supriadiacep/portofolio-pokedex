import { EvolutionChain } from '@/models/Evolution'
import { instance } from '..'
import { QueryFunction } from '@tanstack/react-query'

export type EvolutionChainKey = [
  string,
  {
    id: number
  },
]

export type EvolutionChainResponse = EvolutionChain

export const getEvolutionChain: QueryFunction<EvolutionChainResponse, EvolutionChainKey> = async ({
  queryKey,
}) => {
  const [, { id }] = queryKey

  const response = await instance.get<EvolutionChainResponse>(`/evolution-chain/${id}`)
  return response.data
}
