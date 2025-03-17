export interface FilmResponse {
  description: FilmResponseDescription[]
};

export interface FilmResponseDescription {
  '#TITLE': string
  '#IMDB_ID': string
  '#RANK': number
  '#IMG_POSTER'?: string
};