'use strict';
const filmoteka = [
  {
    id: 1,
    title: 'Duna',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 10,
    actors: ['Amelia Gibson', 'Cameron Clayton', 'Viola Vasquez', 'Lula Collins', 'Victor Nichols'],
    adult: false,
  },
  {
    id: 2,
    title: 'Venom',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 8,
    actors: ['Inez Greer', 'Barry Curtis', 'Blanche Rios', 'Glen Perry', 'Logan Powers'],
    adult: true,
  },
  {
    id: 3,
    title: 'Luca',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 9,
    actors: ['Marguerite Gibbs', 'Lora Alvarez', 'Jorge Simpson', 'Thomas Hall', 'Darrell Hunter'],
    adult: false,
  },
  {
    id: 4,
    title: 'Free Guy',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 6,
    actors: ['Calvin Andrews', 'Mamie Myers', 'Madge Townsend', 'Ralph Kim', 'Jorge Reese'],
    adult: true,
  },
  {
    id: 6,
    title: 'Saw',
    description: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    rating: 7,
    actors: ['Adele Marsh', 'Melvin Burgess', 'Jesus Reese', 'Harriet Moreno', 'Curtis Cox'],
    adult: true,
  },
];

//? Напишіть функцію getAllTitlesOfFilms(films), яка повертає масив із усіма назвами фільмів.

// function getAllTitlesOfFilms(films) {
//  const allTitles = [];
//
//  for (let film of films) {
//    allTitles.push(film.title);
//  }
//
//  return allTitles;
// }
//
// console.log(getAllTitlesOfFilms(filmoteka));

//? Напишіть функцію findFilmByName(films, filmTitle), яка шукає фільм за назвою.

// const findFilmByName = function(films, filmTitle) {
//   for (let film of films) {
//     if (film.title === filmTitle) {
//       return {
//         result: film,
//         isSuccess: false
//       };
//     }
//   }
//
//   return {
//     result: {},
//     isSuccess: false
//   };
// }
//
// const resultFilm = findFilmByName(filmoteka, 'Luca');

//
// if (resultFilm.title) {
//   console.log('Success');
// }
//
// if (resultFilm.hasOwnProperty('title')) {
//   console.log('Success');
// }
//
// console.log(findFilmByName(filmoteka, 'Luca1'));

//? Напишіть функцію getAdultFilms(films), яка повертає масив усіх дорослих фільмів.

// function getAdultFilms(films) {
//   const allAdultFilms = [];
//
//   for (let film of films) {
//     if (film.adult) {
//       allAdultFilms.push(film);
//     }
//   }
//
//   return allAdultFilms;
// }
//
// console.log(getAdultFilms(filmoteka));

//? Напишіть функцію getNotAdultFilms(films), яка повертає масив усіх фільмів без обмеження.

// function getNotAdultFilms(films) {
//   const allAdultFilms = [];
//
//   for (let film of films) {
//     if (!film.adult) {
//       allAdultFilms.push(film);
//     }
//   }
//
//   return allAdultFilms;
// }
//
//
// console.log(getNotAdultFilms(filmoteka));
