import clsx from 'clsx'
import { FC, ReactNode } from 'react'
import styles from './Hero.module.scss'
import Pikachu from '@/assets/pikacu.png'
import Dragon from '@/assets/dragon.png'
import { HeroHeader } from './HeroHeader/HeroHeader'

type HeroProps = {
  children: ReactNode
}

type SubComponent = {
  Header: typeof HeroHeader
}

export const Hero: FC<HeroProps> & SubComponent = ({ children }) => {
  return (
    <div
      className={clsx(styles.hero, 'z-[2] flex h-fit w-full flex-col items-center justify-center')}
    >
      <div className={styles.wave}>
        <img
          className='absolute -right-4 bottom-0 -z-[1] size-[147px] object-contain lg:bottom-[11px] lg:left-[calc(50%+361px)] lg:size-[278px]'
          src={Pikachu}
        />
        <img
          className='absolute bottom-0 left-2 -z-[1] size-[147px] object-contain lg:right-[calc(50%+323px)] lg:bottom-[-23px] lg:left-auto lg:size-[328px]'
          src={Dragon}
        />
      </div>
      {children}
    </div>
  )
}

Hero.Header = HeroHeader
