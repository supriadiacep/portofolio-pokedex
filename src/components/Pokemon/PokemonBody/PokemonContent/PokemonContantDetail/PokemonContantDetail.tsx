import { formatNumber3Digits } from '@/utils'
import { FC } from 'react'
import Pokemon from '@/assets/logoNotFound46.svg'

type PokemonContantDetailProps = {
  id: number
  name: string
  description: string
}

export const PokemonContantDetail: FC<PokemonContantDetailProps> = ({ id, name, description }) => {
  return (
    <div className='flex flex-col gap-4 self-start'>
      <Pokemon className='size-8' />
      <div className='flex flex-col items-start text-neutral-900'>
        <p className='text-base-sm md:text-base-md font-medium text-neutral-500'>
          {formatNumber3Digits(id || 0)}
        </p>
        <h1 className='text-display-xs font-bold capitalize'>{name}</h1>
        <p className='text-base-sm font-normal text-neutral-700'>{description}</p>
      </div>
    </div>
  )
}
