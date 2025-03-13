import { FC, useEffect, useState } from 'react'
import { List } from './List'
import { PokemonsResponseResult, useGetPokemons } from '@/hooks/pokemon/useGetPokemons'
import { useGetPokemon } from '@/hooks/pokemon/useGetPokemon'
import { PokemonResponse } from '@/api/pokemon/getPokemon'
import Pokemon from '@/assets/logoNotFound46.svg'
import { useLocationSearch } from '@/hooks/useLocationSearch'
import { formatNumber3Digits } from '@/utils'

type ListData = PokemonResponse | PokemonsResponseResult

export const ListSection: FC = () => {
  const [data, setData] = useState<ListData | undefined>()
  const { search } = useLocationSearch()

  const limit = search ? undefined : 24

  const {
    data: pokemons,
    fetchNextPage,
    hasNextPage,
    isFetching,
  } = useGetPokemons({
    limit,
  })

  const { data: pokemon } = useGetPokemon({
    id: search,
  })

  useEffect(() => {
    if (pokemons && !search) {
      setData(pokemons as PokemonsResponseResult)
    } else if (search) {
      setData(pokemon)
    }
  }, [pokemons, pokemon, search])

  const isPokemonResponse = (data: ListData | undefined): data is PokemonResponse => {
    return data !== undefined && 'species' in data
  }

  return (
    <div className='-z-50 flex flex-col gap-4 bg-white md:flex-wrap'>
      <List
        title='List Pokemon'
        fetchNextPage={fetchNextPage}
        hasNextPage={hasNextPage}
        isFetching={isFetching}
      >
        {search && data && (
          <h3 className='md:text-base-xl text-base-lg mt-4 font-semibold text-neutral-900 md:mt-[60px]'>
            Search Results for "{search}"
          </h3>
        )}
        {search && !data && (
          <>
            <h3 className='md:text-base-xl text-base-lg mt-4 font-semibold text-neutral-900 md:mt-[60px]'>
              No Results Found for "{search}"
            </h3>
            <div className='fixed inset-0 flex h-full flex-col items-center justify-center gap-4'>
              <Pokemon className='size-[92px] md:size-auto' />
              <div className='flex flex-col items-center gap-1'>
                <p className='text-base-md font-bold text-neutral-900'>Pokémon Not Found</p>
                <p className='text-base-md font-normal text-neutral-900'>Change Your Keywords</p>
              </div>
            </div>
          </>
        )}
        <List.Group>
          {!isPokemonResponse(data) &&
            data?.pages.map((page) =>
              page.results.map((pokemon) => (
                <List.Item
                  key={pokemon.id}
                  name={pokemon.name}
                  image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber3Digits(pokemon.id)}.png`}
                  id={pokemon.id}
                />
              ))
            )}

          {isPokemonResponse(data) && data && (
            <List.Item
              key={data.id}
              name={data.name}
              image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber3Digits(data.id)}.png`}
              id={data.id}
            />
          )}
        </List.Group>
      </List>
    </div>
  )
}
