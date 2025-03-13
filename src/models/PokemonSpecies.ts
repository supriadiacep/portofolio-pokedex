import { APIResource, NamedAPIResource } from './Utility'

export type Name = {
  name: string
  language: NamedAPIResource
}

export type FlavorText = {
  flavor_text: string
  language: NamedAPIResource
  version: NamedAPIResource
}

export type Description = {
  description: string
  language: NamedAPIResource
}

export type Genus = {
  genus: string
  language: NamedAPIResource
}

export type PokemonSpeciesDexEntry = {
  entry_number: number
  pokedex: NamedAPIResource
}

export type PalParkEncounterArea = {
  base_score: number
  rate: number
  area: NamedAPIResource
}

export type PokemonSpeciesVariety = {
  is_default: boolean
  pokemon: NamedAPIResource
}

// Tipe utama Pokemon Species
export type PokemonSpecies = {
  id: number
  name: string
  order: number
  gender_rate: number
  capture_rate: number
  base_happiness: number
  is_baby: boolean
  is_legendary: boolean
  is_mythical: boolean
  hatch_counter: number
  has_gender_differences: boolean
  forms_switchable: boolean
  growth_rate: NamedAPIResource
  pokedex_numbers: PokemonSpeciesDexEntry[]
  egg_groups: NamedAPIResource[]
  color: NamedAPIResource
  shape: NamedAPIResource
  evolves_from_species: NamedAPIResource | null
  evolution_chain: APIResource
  habitat: NamedAPIResource | null
  generation: NamedAPIResource
  names: Name[]
  pal_park_encounters: PalParkEncounterArea[]
  flavor_text_entries: FlavorText[]
  form_descriptions: Description[]
  genera: Genus[]
  varieties: PokemonSpeciesVariety[]
}
