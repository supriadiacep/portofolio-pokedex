import { FC } from 'react'
import Logo from '@/assets/logo.svg'
import { useSearchParams } from 'react-router'

export const Footer: FC = () => {
  const [searchParams] = useSearchParams()
  const search = searchParams.get('search')

  return (
    <footer
      className={`${search ? 'fixed bottom-0' : ''} mt-10 flex w-full border-t border-neutral-200 md:mt-20`}
    >
      <div
        className={`container flex flex-col gap-4 !px-4 !py-5 md:h-20 md:flex-row md:items-center md:ps-5 ${
          search ? 'justify-between' : 'justify-start'
        }`}
      >
        <div className='flex items-center gap-2 md:justify-center'>
          <Logo className='h-7 w-7 md:h-10 md:w-10' />
          <h1 className='text-[19px] leading-6 font-semibold md:text-2xl'>Pokedex</h1>
        </div>
        <div className='flex h-full items-center gap-2 md:justify-center'>
          <p className='text-base-xs md:text-base-md text-neutral-600'>
            Copyright &copy;2025 Pokedex
          </p>
        </div>
      </div>
    </footer>
  )
}
