import { formatNumber3Digits } from '@/utils'
import { FC } from 'react'
import Pokemon from '@/assets/logoNotFound46.svg'
import { AnimatePresence, motion as m, Variants } from 'framer-motion'

const ImageVariants: Variants = {
  hidden: () => ({
    opacity: 0,
  }),
  visible: () => ({
    opacity: 1,
  }),
}

type HeaderProps = {
  name?: string
  id?: number
  description?: string
  image?: string
}

export const Header: FC<HeaderProps> = ({ name, id, description, image }) => {
  return (
    <>
      <div className='flex flex-col items-center md:flex-row'>
        <AnimatePresence mode='wait'>
          <m.img
            key={id}
            src={image}
            className='-z-[0] size-[318px]'
            variants={ImageVariants}
            transition={{
              ease: 'easeOut',
              duration: 0.1,
            }}
            initial='hidden'
            animate='visible'
            exit='hidden'
          />
        </AnimatePresence>
        <div className='flex flex-col gap-4 self-start'>
          <Pokemon className='size-8' />
          <div className='flex flex-col items-start text-neutral-900'>
            <p className='text-base-sm md:text-base-md font-medium text-neutral-500'>
              {formatNumber3Digits(id || 0)}
            </p>
            <h1 className='text-display-xs font-bold capitalize'>{name}</h1>
            <p className='text-base-sm font-normal text-neutral-700'>{description}</p>
          </div>
        </div>
      </div>
      <div className='border-b border-neutral-200' />
    </>
  )
}
