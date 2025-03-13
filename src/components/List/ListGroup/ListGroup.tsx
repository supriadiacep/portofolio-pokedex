import { FC, ReactNode } from 'react'
import { motion as m, Variants } from 'framer-motion'
import { PokemonCard } from '@/components/ui/Card/PokemonCard'

type ListGroupProps = {
  children: ReactNode
}

const ListGroupVariants: Variants = {
  inView: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      ease: 'easeIn',
    },
  },
}

type SubComponent = {
  Item: typeof PokemonCard
}

export const ListGroup: FC<ListGroupProps> & SubComponent = ({ children }) => {
  return (
    <m.div
      className='grid max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'
      variants={ListGroupVariants}
      initial='outOfView'
      whileInView='inView'
      viewport={{ once: true, amount: 0.1 }}
    >
      {children}
    </m.div>
  )
}

ListGroup.Item = PokemonCard
