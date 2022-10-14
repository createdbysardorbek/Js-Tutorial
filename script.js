let movieDb = () => {
    let numberOfFilms = +prompt("How many films have you seen?");
    let personalMovieDB = {
        count: numberOfFilms,
        movies: {},
        genres: {},
        actors: [],
        private: false,
    }

    if (personalMovieDB.count < 10) {
        console.log("You are not very fond of films!");
    } else if (personalMovieDB.count < 30) {
        console.log("You are classic spectator!");
    } else if (personalMovieDB.count > 30) {
        console.log("You are fan of films!");
    } else {
        console.log("Failed!");
    }

    let i = 0;

    while (i < 2) {
        let lastMovie = prompt("Last movie you watched?"),
            markForMovie = prompt("How do you rate it");
        if ((lastMovie == '' && markForMovie == '') || (lastMovie == null && markForMovie == null) || (lastMovie == false && markForMovie == false)) {

        } else {
            personalMovieDB.movies[lastMovie] = markForMovie;
            i++;
        }
    }
    document.write(personalMovieDB.movies);
}

movieDb();