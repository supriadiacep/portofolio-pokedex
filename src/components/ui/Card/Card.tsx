import { FC, ReactNode } from 'react'
import { motion as m, Variants } from 'framer-motion'
import { cn, isFirefox } from '@/utils'
import { useInView } from 'react-intersection-observer'

const CardVariants: Variants = {
  inView: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
  outOfView: {
    opacity: 0,
    y: 20,
  },
}

export type CardProps = {
  children?: ReactNode
  image?: string
  imageAlt?: string
  onClick?: () => void
  className?: string
  roundedImage?: boolean
  imageClassName?: string
  contentClassName?: string
  variants?: Variants
  widthImage?: string
}

export const Card: FC<CardProps> = ({
  children,
  image,
  imageAlt = 'Card image',
  onClick,
  className = '',
  roundedImage = true,
  imageClassName = '',
  contentClassName = '',
  variants = CardVariants,
  widthImage = '199px',
}) => {
  const { ref } = useInView({
    threshold: 0.1,
  })
  // the motion whileInView prop seem doesn't work correctly without the useInView hook from react-intersection-observer
  // this bug happend on firefox based browsers, but it's works on chrome based browsers

  return (
    <m.div
      ref={isFirefox ? ref : null}
      className={cn(
        `flex flex-[0_0_361px] flex-col rounded-3xl border border-neutral-300 bg-[#FDFDFD] p-3 md:gap-6 md:p-6`,
        className
      )}
      variants={variants}
      initial='outOfView'
      whileInView='inView'
      role={onClick ? 'button' : undefined}
      onClick={onClick}
    >
      {image && (
        <div
          className={cn(
            `relative flex flex-[0_0_${widthImage}] items-center justify-center`,
            imageClassName
          )}
        >
          {roundedImage && (
            <div
              className={cn(
                `absolute top-1/2 right-1/2 size-[${widthImage}] translate-x-1/2 -translate-y-1/2 rounded-full bg-neutral-100`,
                imageClassName
              )}
            />
          )}
          <img
            src={image}
            alt={imageAlt}
            className={cn(`-z-[0] size-[${widthImage}]`, imageClassName)}
          />
        </div>
      )}
      <div className={cn('flex flex-col gap-4', contentClassName)}>{children}</div>
    </m.div>
  )
}
