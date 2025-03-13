export type NamedAPIResource = {
  name: string
  url: string
}

export type VersionGameIndex = {
  game_index: number
  version: NamedAPIResource
}

export type APIResource = {
  url: string
}
