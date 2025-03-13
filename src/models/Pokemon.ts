import { NamedAPIResource, VersionGameIndex } from './Utility'

type PokemonAbility = {
  is_hidden: boolean
  slot: number
  ability: NamedAPIResource
}

type PokemonType = {
  slot: number
  type: NamedAPIResource
}

type PokemonFormType = {
  slot: number
  type: NamedAPIResource
}

type PokemonTypePast = {
  generation: NamedAPIResource
  types: PokemonType[]
}

type PokemonHeldItem = {
  item: NamedAPIResource
  version_details: PokemonHeldItemVersion
}

type PokemonHeldItemVersion = {
  version: NamedAPIResource
  rarity: number
}

type PokemonMove = {
  move: NamedAPIResource
  version_group_details: PokemonMoveVersion[]
}

type PokemonMoveVersion = {
  move_learn_method: NamedAPIResource
  version_group: NamedAPIResource
  level_learned_at: number
}

type PokemonStat = {
  stat: NamedAPIResource
  effort: number
  base_stat: number
}

type PokemonSprites = {
  front_default: string | null
  front_shiny: string | null
  front_female: string | null
  front_shiny_female: string | null
  back_default: string | null
  back_shiny: string | null
  back_female: string | null
  back_shiny_female: string | null
}

type PokemonCries = {
  latest: string
  legacy: string
}

type Pokemon = {
  id: number
  name: string
  base_experience: number
  height: number
  is_default: boolean
  order: number
  weight: number
  abilities: PokemonAbility[]
  forms: NamedAPIResource[]
  game_indices: VersionGameIndex[]
  held_items: PokemonHeldItem[]
  location_area_encounters: string
  moves: PokemonMove[]
  past_types: PokemonTypePast[]
  sprites: PokemonSprites
  cries: PokemonCries
  species: NamedAPIResource
  stats: PokemonStat[]
  types: PokemonType[]
}

export type {
  Pokemon,
  PokemonAbility,
  PokemonType,
  PokemonFormType,
  PokemonTypePast,
  PokemonHeldItem,
  PokemonHeldItemVersion,
  PokemonMove,
  PokemonMoveVersion,
  PokemonStat,
  PokemonSprites,
  PokemonCries,
}
