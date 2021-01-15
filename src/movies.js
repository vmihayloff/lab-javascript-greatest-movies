// Iteration 1: All directors? - Get the array of all directors.
function getAllDirectors(moviesArr) {
  let directorsArr = moviesArr.map((movie) => {
    return movie.director;
  });
  return directorsArr;
}
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors. How could you "clean" a bit this array and make it unified (without duplicates)?

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(arr) {
  let filteredArr = arr.filter(function (movie) {
    console.log(movie);
    if (
      movie.director === "Steven Spielberg" &&
      movie.genre.includes("Drama")
    ) {
      console.log("match");
      return true;
    }
  });
  return filteredArr.length;
}
// Iteration 3: All rates average - Get the average of all rates with 2 decimals
function ratesAverage(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let total = arr.reduce(function (acc, elem) {
    if (elem.rate) {
      return acc + elem.rate;
    } else {
      return acc;
    }
  }, 0);
  let average = total / arr.length;
  console.log(Number(average.toFixed(2)));
  return Number(average.toFixed(2));
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesRate(arr) {
  let filteredArr = arr.filter(function (movie) {
    if (movie.genre.includes("Drama")) {
      return true;
    }
  });

  let rateDrama = filteredArr.reduce(function (acc, elem) {
    if (elem.rate) {
      return acc + elem.rate;
    } else {
      return acc;
    }
  }, 0);
  let average = rateDrama / filteredArr.length;
  return parseFloat(average.toFixed(2));
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes

// BONUS - Iteration 8: Best yearly rate average - Best yearly rate average
