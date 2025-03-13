import { FC, ReactNode } from 'react'
import { Header } from './PokemonHeader'
import { PokemonContent } from './PokemonContent'

type PokemonBodyProps = {
  children: ReactNode
}

type SubComponents = {
  Header: typeof Header
  Content: typeof PokemonContent
}

export const PokemonBody: FC<PokemonBodyProps> & SubComponents = ({ children }) => {
  return <div className='flex flex-col gap-4 md:flex-row md:gap-12'>{children}</div>
}

PokemonBody.Header = Header
PokemonBody.Content = PokemonContent
