import { FC, useMemo } from 'react'
import { Pokemon } from './Pokemon'
import { useParams } from 'react-router'
import { useGetPokemon } from '@/hooks/pokemon/useGetPokemon'
import { formatNumber3Digits } from '@/utils'
import { useGetPokemonSpecies } from '@/hooks/pokemon/useGetPokemonSpecies'
import { useGetEvolutionChain } from '@/hooks/evolution/useGetEvolutionChain'
import { ChainLink } from '@/models/Evolution'

const CardVariants = {
  hidden: {},
  visible: {},
}

export const PokemonSection: FC = () => {
  const { id } = useParams()
  const { data } = useGetPokemon({ id: Number(id) })
  const speciesId = useMemo(() => data?.species.url.split('/'), [data])
  const { data: species } = useGetPokemonSpecies({
    id: Number(speciesId?.[speciesId.length - 2] || 0),
  })

  const { data: evolutionChain } = useGetEvolutionChain({
    id: Number(
      species?.evolution_chain.url.split('/')?.[
        species?.evolution_chain.url.split('/').length - 2
      ] || 0
    ),
  })

  const processedEvolutions = useMemo(() => {
    const recursiveEvolution = (evolution: ChainLink): ChainLink[] => {
      const result: ChainLink[] = []
      for (const item of evolution.evolves_to) {
        if (item.is_baby) {
          result.push(item)
        } else {
          result.push(item, ...recursiveEvolution(item))
        }
      }
      return result
    }
    if (evolutionChain?.chain) {
      return [evolutionChain.chain, ...recursiveEvolution(evolutionChain.chain)]
    }
    return []
  }, [evolutionChain])

  return (
    <Pokemon>
      <Pokemon.Body>
        <div className='flex items-center justify-center md:items-start'>
          <Pokemon.Body.Content.Image
            id={data?.id || 0}
            image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber3Digits(data?.id || 0)}.png`}
          />
        </div>

        <Pokemon.Body.Content className='flex-1 gap-4'>
          <Pokemon.Body.Content.Detail
            id={data?.id || 0}
            name={data?.name || ''}
            description={species?.flavor_text_entries[0].flavor_text || ''}
          />
          <div className='my-3 border-b border-neutral-200' />
          <Pokemon.Body.Content title='Type'>
            <Pokemon.Body.Content.Label data={data?.types.map((item) => item.type)} />
          </Pokemon.Body.Content>
          <Pokemon.Body.Content title='Abilities'>
            <Pokemon.Body.Content.Label data={data?.abilities.map((item) => item.ability)} />
          </Pokemon.Body.Content>
          <Pokemon.Body.Content title='Size'>
            <Pokemon.Body.Content.Size height={data?.height} weight={data?.weight} />
          </Pokemon.Body.Content>
          <Pokemon.Body.Content title='Artwork' className='gap-[10px]'>
            <img
              className='size-20'
              src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data?.id}.png`}
            />
          </Pokemon.Body.Content>
          <div className='my-3 border-b border-neutral-200' />
          <Pokemon.Body.Content title='Stats'>
            <Pokemon.Body.Content.Stats stats={data?.stats || []} />
          </Pokemon.Body.Content>
        </Pokemon.Body.Content>
      </Pokemon.Body>
      <Pokemon.Body>
        <Pokemon.Body.Content
          titleClassName='text-display-xs font-bold gap-4'
          className='mt-4 gap-4'
          title='Evolution Chain'
        >
          <Pokemon.Body.Content.EvolutionGroup>
            {processedEvolutions.map((item) => (
              <Pokemon.Body.Content.EvolutionGroup.Card
                className='!flex-[0_0_268px] md:!h-[268px] md:!flex-[0_0_192px] md:gap-3'
                key={`${data?.id}-evolution-${item.species.name}`}
                variants={CardVariants}
                id={Number(item.species.url.split('/')?.[item.species.url.split('/').length - 2])}
                name={item.species.name}
                image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${formatNumber3Digits(Number(item.species.url.split('/')?.[item.species.url.split('/').length - 2]))}.png`}
                imageClassName='md:size-[150px] md:flex-[0_0_150px]'
                // widthImage='159px'
                isLabel={false}
              />
            ))}
          </Pokemon.Body.Content.EvolutionGroup>
        </Pokemon.Body.Content>
      </Pokemon.Body>
    </Pokemon>
  )
}
