import { FC, ReactNode } from 'react'
import { Link } from 'react-router'
import { ArrowLeftIcon } from '@heroicons/react/24/outline'
import { PokemonBody } from './PokemonBody'

type PokemonProps = {
  children: ReactNode
}

type SubComponents = {
  Body: typeof PokemonBody
}

export const Pokemon: FC<PokemonProps> & SubComponents = ({ children }) => {
  return (
    <div className='container flex flex-col !pt-6'>
      <Link to='/' className='flex items-center gap-2 md:h-[54px]'>
        <ArrowLeftIcon className='h-4 w-4' />
        Back
      </Link>
      {children}
    </div>
  )
}

Pokemon.Body = PokemonBody
