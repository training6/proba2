const getLongestEnglishComedy = (movies) => {
  let maxLength="";

  movies.map(movie => {
    if (movie.genre === "comedy" && movie.originalLanguage === "english") {
      if (movie.length > maxLength.length) {
        maxLength = movie;
      }
    }
  })

  return maxLength ? maxLength.title : null

}

    /*let result = null
  for (let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    if (movie.genre === "comedy" && movie.originalLanguage === "english") {
      if (!result || result.length < movie.length) {
        result = movie
      }
    }
  }
  if (!result) {
    return null
  }
  return result.title
}*/

module.exports = getLongestEnglishComedy

