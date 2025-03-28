export interface FilmCardsResponse {
  description: FilmCardsResponseDescription[]
};

export interface FilmCardsResponseDescription {
  '#TITLE': string
  '#IMDB_ID': string
  '#RANK': number
  '#IMG_POSTER'?: string
};