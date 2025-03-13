import { AnimatePresence, motion as m, Variants } from 'motion/react'
import { FC } from 'react'

const ImageVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
}

type PokemonContentImageProps = {
  image: string
  id: number
  variants?: Variants
}

export const PokemonContentImage: FC<PokemonContentImageProps> = ({
  image,
  id,
  variants = ImageVariants,
}) => {
  return (
    <AnimatePresence mode='wait'>
      <m.img
        key={id}
        src={image}
        className='-z-[0] size-[318px] md:size-[477px]'
        variants={variants}
        transition={{
          ease: 'easeOut',
          duration: 0.1,
        }}
        initial='hidden'
        animate='visible'
        exit='hidden'
      />
    </AnimatePresence>
  )
}
