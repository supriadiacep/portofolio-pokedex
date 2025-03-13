import { FC, useEffect } from 'react'
import { PokemonStat } from '@/models/Pokemon'
import { motion as m, Variants, useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

const PokemonStatsVariants: Variants = {
  hidden: {
    opacity: 0,
    width: 0,
  },
  visible: (width: number) => ({
    opacity: 1,
    width: `${width > 100 ? 100 : width}%`,
    transition: {
      duration: 0.5,
      ease: 'easeIn',
    },
  }),
}

const getStatColor = (value: number): string => {
  if (value < 40) return '#EF171C'
  if (value < 80) return '#FFCB05'
  return '#6ACA73'
}

const formatStatName = (name: string): string => {
  if (name.startsWith('special-')) {
    const baseName = name.replace('special-', '')
    return `sp. ${baseName}`
  }
  return name
}

type PokemonStatsProps = {
  stats: PokemonStat[]
}

export const PokemonStats: FC<PokemonStatsProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    trackVisibility: true,
    delay: 100,
    threshold: 0.3,
    triggerOnce: true,
  })

  const controls = useAnimation()

  useEffect(() => {
    if (inView) {
      controls.start('visible')
    }
  }, [controls, inView, stats])

  return (
    <div className='mt-2 flex flex-col gap-2'>
      {stats.map((stat) => (
        <div
          ref={ref}
          key={stat.stat.name}
          className='text-base-sm grid grid-cols-[minmax(0,100px)_minmax(0,19px)_minmax(0,1fr)] items-center gap-4'
        >
          <span className='font-normal text-nowrap text-neutral-900 capitalize'>
            {formatStatName(stat.stat.name)}
          </span>
          <span className='font-semibold text-neutral-900'>{stat.base_stat}</span>
          <div className='h-3 w-full rounded-full bg-neutral-200'>
            <m.div
              className='h-full rounded-full bg-neutral-900'
              style={{
                backgroundColor: getStatColor(stat.base_stat),
              }}
              animate={controls}
              variants={PokemonStatsVariants}
              initial='hidden'
              custom={stat.base_stat}
            />
          </div>
        </div>
      ))}
    </div>
  )
}
