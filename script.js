let numberOfFilms = prompt("How many films have you seen?");
let lastFilm = prompt("The last film you have seen?");
let markForMovie = prompt("How would you marked it?(from 1 to 10)");
let personalMovieDB = {
    count: turnInto,
    movies: {
        [lastFilm]: markForMovie,
    },
    actors: {},
    genres: {},
    privat: false,
}

console.log(personalMovieDB.movies);