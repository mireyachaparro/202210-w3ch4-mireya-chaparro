export interface ISeries {
  id: number;
  name: string;
  creator: string;
  year: number;
  poster: string;
  watched: boolean;
  score: number;
  emmies: number;
}

export const SERIES = [
  {
    id: 1,
    name: 'The Sopranos',
    creator: 'David Chase',
    year: 1999,
    poster:
      'https://m.media-amazon.com/images/M/MV5BZGJjYzhjYTYtMDBjYy00OWU1LTg5OTYtNmYwOTZmZjE3ZDdhXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_.jpg',
    watched: true,
    score: 5,
    emmies: 21,
  },
  {
    id: 2,
    name: 'Game of Thrones',
    creator: 'David Benioff D. B. Weiss',
    year: 2011,
    poster:
      'https://t1.pixers.pics/img-1fb6f67c/posters-game-of-thrones.jpg?H4sIAAAAAAAAA3VOW27EIAy8DpGS2BAIkBvs394gIjy2afNAQNtVT1_Sqp-VZXs80ngG3o9sggfrj-IT7Ktzm4ewbvXKU_J5_fJkUGOLzVTZjSBWdH74ZNMZSUcH1VLRCsbaUYpm-jRVuJv0Rl5KiXkCyEMf12f9VpfNYPcMDKkEVCC00lpYzh1aN8cuF3M4k1zH8TliH49Hi1c1f0EkYiuvACWtO6mJzupVyGt8NPCP3y-GqoL7DSgCsp-JwNnFzvcbRWS1kbNZuEELHox0izdBeoUYLBVej9qZEMIsFmmWRY7Kec_n_hu83S9APwEAAA==',
    watched: false,
    score: 0,
    emmies: 164,
  },
  {
    id: 3,
    name: 'Mad Men',
    creator: 'Matthew Weiner',
    year: 2007,
    poster:
      'https://pics.filmaffinity.com/Mad_Men_Serie_de_TV-351490728-large.jpg',
    watched: true,
    score: 5,
    emmies: 116,
  },
  {
    id: 4,
    name: '6 feet under',
    creator: 'Alan Ball',
    year: 2001,
    poster:
      'https://papermint.es/wp-content/uploads/2018/09/six-feet-under-poster-papermint.jpg',
    watched: true,
    score: 5,
    emmies: 53,
  },
  {
    id: 5,
    name: 'Atypical',
    creator: 'Robia Rashid',
    year: 2017,
    poster:
      'https://pics.filmaffinity.com/At_pico_Serie_de_TV-405052091-large.jpg',
    watched: false,
    score: 0,
    emmies: 0,
  },
];