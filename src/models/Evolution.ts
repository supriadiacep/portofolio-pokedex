import { NamedAPIResource } from './Utility'

// Definisi tipe EvolutionDetail
export interface EvolutionDetail {
  item: NamedAPIResource | null
  trigger: NamedAPIResource
  gender: number | null
  held_item: NamedAPIResource | null
  known_move: NamedAPIResource | null
  known_move_type: NamedAPIResource | null
  location: NamedAPIResource | null
  min_level: number | null
  min_happiness: number | null
  min_beauty: number | null
  min_affection: number | null
  needs_overworld_rain: boolean
  party_species: NamedAPIResource | null
  party_type: NamedAPIResource | null
  relative_physical_stats: number | null // 1, 0, or -1
  time_of_day: string // "day" or "night"
  trade_species: NamedAPIResource | null
  turn_upside_down: boolean
}

// ChainLink memiliki referensi rekursif ke dirinya sendiri
export interface ChainLink {
  is_baby: boolean
  species: NamedAPIResource
  evolution_details: EvolutionDetail[]
  evolves_to: ChainLink[]
}

// Tipe utama EvolutionChain
export interface EvolutionChain {
  id: number
  baby_trigger_item: NamedAPIResource | null
  chain: ChainLink
}
