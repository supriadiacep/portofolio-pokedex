import { FC, ReactNode } from 'react'
import { PokemonCard } from '@/components/ui/Card/PokemonCard'

type PokemonContentEvolutionGroupProps = {
  children: ReactNode
}

type SubComponent = {
  Card: typeof PokemonCard
}

export const PokemonContentEvolutionGroup: FC<PokemonContentEvolutionGroupProps> & SubComponent = ({
  children,
}) => {
  return <div className='flex flex-col gap-4 md:flex-row'>{children}</div>
}

PokemonContentEvolutionGroup.Card = PokemonCard
