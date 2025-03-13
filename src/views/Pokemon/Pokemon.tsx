import { Footer } from '@/components/Footer'
import { HeroHeader } from '@/components/Hero/HeroHeader/HeroHeader'
import { PokemonSection } from '@/components/Pokemon/PokemonSection'
import { Variants } from 'motion/react'
import { FC } from 'react'

const headerVariants: Variants = {
  hidden: () => ({
    opacity: 0,
    y: -100,
    transition: {
      ease: 'easeOut',
      duration: 0.5,
      damping: 0,
    },
  }),
  visible: (scrolled: boolean) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeInOut',
      damping: 0,
    },
    backgroundColor: scrolled ? 'rgba(255, 255, 255, 1)' : 'transparent',
    position: scrolled ? 'fixed' : 'absolute',
  }),
}

export const Pokemon: FC = () => {
  return (
    <>
      <HeroHeader variants={headerVariants} isScroll={true} isSearch={true} initial={false} />
      <PokemonSection />
      <Footer />
    </>
  )
}
