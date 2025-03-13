import { FC } from 'react'
import Ruler from '@/assets/ruler.svg'
import { formatDecimalPoint } from '@/utils'

type PokemonContentSizeProps = {
  height?: number
  weight?: number
}

export const PokemonContentSize: FC<PokemonContentSizeProps> = ({ height, weight }) => {
  return (
    <div className='flex flex-row gap-3'>
      <div className='flex gap-12'>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center'>
            <span className='material-symbols-outlined'>weight</span>
            <p className='text-base-sm font-normal text-neutral-700'>Weight</p>
          </div>
          <p className='text-display-xs font-bold text-neutral-900'>
            {formatDecimalPoint(weight ?? 0)} <span className='text-base-sm font-normal'>Kg</span>
          </p>
        </div>
        <div className='flex flex-col gap-1'>
          <div className='flex items-center'>
            <div className='size-4'>
              <Ruler />
            </div>
            <p className='text-base-sm font-normal text-neutral-700'>Height</p>
          </div>
          <p className='text-display-xs font-bold text-neutral-900'>
            {formatDecimalPoint(height ?? 0)} <span className='text-base-sm font-normal'>m</span>
          </p>
        </div>
      </div>
    </div>
  )
}
