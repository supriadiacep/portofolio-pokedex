import { FC } from 'react'
import { Label } from '@/components/ui/Label'
import { NamedAPIResource } from '@/models/Utility'

type PokemonContentLabelProps = {
  data?: NamedAPIResource[]
}

export const PokemonContentLabel: FC<PokemonContentLabelProps> = ({ data }) => {
  return (
    <div className='flex flex-row gap-3'>
      {data?.map((item, index) => <Label key={index} item={item.name.split('-').join(' ')} />)}
    </div>
  )
}
