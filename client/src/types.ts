
export interface iSearchOptions {
  key: string
  text: string
  value: string
}

export interface iTrack {
  artist: string
  title: string
  id: number
}

export interface ProcessEnv {
  REACT_APP_API_BASE_URL: string
}