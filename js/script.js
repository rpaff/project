const number0ffilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
const personalmovieDb = {
    count: number0ffilms,
    movies: {},
    actors: {},
    genres: []
    privat: false
}

const a = prompt('Один из последних просмотренных фильмов?', ''),
      b = prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просмотренных фильмов?', ''),
      d = prompt('На сколько оцените его?', '');