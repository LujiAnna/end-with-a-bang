const apiKey = "2fc09aa4868aaf55aacca5023aea7172"
let movieId = "536841"



export const getAllMovieInfo = (movieId) => {
  axios
  .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
  .then((res) => getMovie(res.data))
  .catch((err) => console.log(err))

}


export const getMovieTrailer = (movieId) => {
  axios
  .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
  .then((res) => getTrailer(res.data))
  .catch((err) => console.log(err))
}

  




/*   // GET MOVIE
document.getElementById("movies-img").addEventListener('click', () =>{
  axios
  .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
  .then((res) => getMovie(res.data))
  .catch((err) => console.log(err))
});


// GET TRAILER
document.getElementById("movies-img").addEventListener('click', () =>{
  axios
  .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
  .then((res) => getTrailer(res.data))
  .catch((err) => console.log(err))
}); */






const  getTrailer = (data) => {
    document.getElementById("movie-trailer").src = `https://www.youtube.com/embed/${data.results[0].key}`
}

const getMovie = (data) => {
    console.log(data)
    document.getElementById("movie-title").innerHTML = data.original_title + "  "
    document.getElementById("movie-year").innerHTML = `Date: ${data.release_date}`
    document.getElementById("movie-runtime").innerHTML = `Runtime: ${data.runtime} min.`
    document.getElementById("movie-language").innerHTML = `Lang.: ${data.spoken_languages[0].name}`
    document.getElementById("movie-genre").innerHTML = `Genre: ${data.genres[0].name}`
    document.getElementById("movie-img").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
    document.getElementById("movie-text").innerHTML = `${data.overview}`
    document.getElementById("imdb-button").innerText = `IMDB`
    document.getElementById("imdb-button").href = `https://www.imdb.com/title/${data.imdb_id}/?ref_=nm_knf_i2`


// When the user clicks the button, open the modal 

let modal = document.getElementById("myModal");
modal.style.display = "block";

// Get the button that opens the modal
let btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
let span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (data), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
}

