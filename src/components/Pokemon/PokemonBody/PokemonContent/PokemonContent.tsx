import { FC, ReactNode, RefObject } from 'react'
import { ClassNameValue } from 'tailwind-merge'
import { PokemonContentLabel } from './PokemonContentLabel'
import { PokemonContentSize } from './PokemonContentSize'
import { PokemonStats } from './PokemonStats/PokemonStats'
import { cn } from '@/utils'
import { PokemonContentEvolutionGroup } from './PokemonContentEvolutionGroup'
import { PokemonContantDetail } from './PokemonContantDetail'
import { PokemonContentImage } from './PokemonContentImage'

type PokemonContentProps = {
  children: ReactNode
  title?: string
  titleClassName?: ClassNameValue
  className?: ClassNameValue
  ref?: RefObject<HTMLDivElement | null>
}

type SubComponents = {
  Label: typeof PokemonContentLabel
  Size: typeof PokemonContentSize
  Stats: typeof PokemonStats
  EvolutionGroup: typeof PokemonContentEvolutionGroup
  Detail: typeof PokemonContantDetail
  Image: typeof PokemonContentImage
}

export const PokemonContent: FC<PokemonContentProps> & SubComponents = ({
  children,
  title,
  titleClassName,
  className,
  ref,
}) => {
  return (
    <div className={cn('flex flex-col gap-1', className)} ref={ref}>
      {title && (
        <h4 className={cn('text-base-lg font-semibold text-neutral-900', titleClassName)}>
          {title}
        </h4>
      )}
      {children}
    </div>
  )
}

PokemonContent.Label = PokemonContentLabel
PokemonContent.Size = PokemonContentSize
PokemonContent.Stats = PokemonStats
PokemonContent.EvolutionGroup = PokemonContentEvolutionGroup
PokemonContent.Detail = PokemonContantDetail
PokemonContent.Image = PokemonContentImage
