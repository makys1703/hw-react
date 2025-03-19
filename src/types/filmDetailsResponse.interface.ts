export interface FilmDetailsResponse {
  short: Short
  top: Top
  imdbId: string
}

interface Short {
  '@type': string
  name: string
  image: string
  description: string
  aggregateRating: AggregateRating
  genre: string[]
  datePublished: string,
  review: Review
}

interface Review {
  name: string
  reviewBody: string
  dateCreated: string
}

interface AggregateRating {
  ratingValue: number
}

interface Top {
  runtime?: Runtime
}

interface Runtime {
  seconds?: number
}
