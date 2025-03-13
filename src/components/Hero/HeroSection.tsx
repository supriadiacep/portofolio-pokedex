import { FC } from 'react'
import PokemonLogo from '@/assets/pokemon.svg'
import { Search } from '@/components/ui/Search'
import { Hero } from './Hero'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import { useLocationSearch } from '@/hooks/useLocationSearch'
import { useInView } from 'react-intersection-observer'

const sectionVariants: Variants = {
  hidden: {
    opacity: 0,
    y: -100,
    transition: {
      ease: 'easeOut',
    },
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
}

const heroVariants: Variants = {
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

export const HeroSection: FC = () => {
  const { ref, inView } = useInView({
    threshold: 0,
  })
  const { search } = useLocationSearch()

  return (
    <>
      <Hero.Header variants={heroVariants} isScroll={!inView} isSearch={!!search} />
      <AnimatePresence initial={false}>
        {!search && (
          <m.section
            ref={ref}
            className='relative flex w-full overflow-hidden bg-[#ffcb05]'
            variants={sectionVariants}
            initial='hidden'
            animate='visible'
            exit='hidden'
          >
            <Hero>
              <main>
                <div className='mx-4 mb-[210px] flex flex-col items-center justify-center gap-[30px] pt-20'>
                  <div className='m-4 mt-16 flex flex-col items-center gap-2 text-center'>
                    <PokemonLogo className='h-fit w-20 bg-cover md:h-16 md:w-[175px]' />
                    <h2 className='text-display-sm md:text-display-2xl font-bold'>
                      Discover the Most <br className='inline md:hidden' />
                      Powerful <br className='hidden md:inline' />
                      Pokémon
                      <br className='inline md:hidden' />
                      in the Wild!
                    </h2>
                    <p className='text-base leading-7 font-medium'>
                      Train, Battle, and Collect Your Favorites!
                    </p>
                  </div>
                  <Search placeholder='Search Pokemon' />
                </div>
              </main>
            </Hero>
          </m.section>
        )}
      </AnimatePresence>
    </>
  )
}
