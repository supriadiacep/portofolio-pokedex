import { useQuery } from '@tanstack/react-query'
import {
  EvolutionChainKey,
  EvolutionChainResponse,
  getEvolutionChain,
} from '@/api/evolution/getEvolutionChain'

type UseGetEvolutionChainProps = EvolutionChainKey[1]

type UseGetEvolutionChainResult = {
  data?: EvolutionChainResponse
}

export const useGetEvolutionChain = ({
  id,
}: UseGetEvolutionChainProps): UseGetEvolutionChainResult => {
  const queryKey: EvolutionChainKey = ['evolution-chain', { id }]

  const { data } = useQuery<
    EvolutionChainResponse,
    Error,
    EvolutionChainResponse,
    EvolutionChainKey
  >({
    queryKey,
    queryFn: getEvolutionChain,
    enabled: !!id,
  })

  return {
    data,
  }
}
