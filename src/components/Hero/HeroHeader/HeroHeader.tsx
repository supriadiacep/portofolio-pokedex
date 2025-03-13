import { FC, useRef } from 'react'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'
import Logo from '@/assets/logo.svg'
import { Search } from '@/components/ui/Search'
import { useMediaQuery } from 'react-responsive'

type HeroHeaderProps = {
  variants?: Variants
  isScroll?: boolean
  isSearch?: boolean
  initial?: boolean
}

export const HeroHeader: FC<HeroHeaderProps> = ({
  variants,
  isScroll,
  isSearch,
  initial = true,
}) => {
  const searchedHeaderRef = useRef<HTMLDivElement>(null)
  const isDesktop = useMediaQuery({ query: '(min-width: 768px)' })

  return (
    <AnimatePresence initial={initial}>
      {isScroll && (
        <m.div
          ref={searchedHeaderRef}
          className={`top-0 right-0 left-0 z-50 drop-shadow-[0_4px_24px_rgba(180,178,178,0.25)] ${
            isSearch ? '!relative' : 'absolute'
          }`}
          variants={variants}
          initial='hidden'
          animate='visible'
          exit='hidden'
          custom={isScroll}
        >
          <div
            className={`container flex h-20 items-center gap-1 ${
              isSearch ? 'justify-between' : 'justify-center'
            }`}
          >
            <div className='flex items-center gap-1'>
              <Logo className='h-7 w-7 md:h-10 md:w-10' />
              {(isDesktop && isScroll) || (isSearch && isDesktop) ? (
                <h1 className='text-[19px] leading-6 font-semibold md:text-2xl'>Pokedex</h1>
              ) : null}
            </div>
            {isSearch && <Search />}
          </div>
        </m.div>
      )}
      {!isScroll && !isSearch && (
        <div className='absolute top-0 right-0 left-0 z-50'>
          <div className='container flex h-20 items-center justify-center gap-1'>
            <div className='flex items-center gap-1'>
              <Logo className='h-7 w-7 md:h-10 md:w-10' />
              <h1 className='text-[19px] leading-6 font-semibold md:text-2xl'>Pokedex</h1>
            </div>
          </div>
        </div>
      )}
    </AnimatePresence>
  )
}
