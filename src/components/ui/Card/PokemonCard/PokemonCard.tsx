import { FC } from 'react'
import { formatNumber3Digits } from '@/utils'
import { Label } from '@/components/ui/Label'
import { useGetPokemon } from '@/hooks/pokemon/useGetPokemon'
import { useNavigate } from 'react-router'
import { Card, CardProps } from '../Card'
import { Variants } from 'motion/react'

type PokemonCardProps = {
  name: string
  image: string
  id: number
  variants?: Variants
  isLabel?: boolean
} & CardProps

export const PokemonCard: FC<PokemonCardProps> = ({
  name,
  image,
  id,
  variants,
  isLabel = true,
  ...props
}) => {
  const { data } = useGetPokemon({ id })
  const navigate = useNavigate()

  return (
    <Card
      image={image}
      imageAlt={name}
      onClick={() => navigate(`/pokemon/${id}`)}
      variants={variants}
      {...props}
    >
      <div className='flex flex-col'>
        <p className='text-base-sm md:text-base-md font-medium text-neutral-500'>
          {formatNumber3Digits(id)}
        </p>
        <h3 className='text-base-md md:text-base-xl font-semibold text-neutral-900 capitalize'>
          {name}
        </h3>
      </div>
      {isLabel && (
        <div className='flex flex-wrap gap-2'>
          {data?.abilities?.map((item, index) => (
            <Label key={index} item={item.ability.name.split('-').join(' ')} />
          ))}
        </div>
      )}
    </Card>
  )
}
