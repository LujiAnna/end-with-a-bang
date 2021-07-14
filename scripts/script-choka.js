// const apiKey = "2fc09aa4868aaf55aacca5023aea7172"
//
//
// const getAllMovieInfo = (movieId) => {
//   axios
//   .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
//   .then((res) => getMovie(res.data))
//   .catch((err) => console.log(err))
//
// }
//
// const getMovieTrailer = (movieId) => {
//   axios
//   .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
//   .then((res) => getTrailer(res.data))
//   .catch((err) => console.log(err))
// }
//
// const  getTrailer = (data) => {
//     document.getElementById("movie-trailer").src = `https://www.youtube.com/embed/${data.results[0].key}`
// }
//
// const getMovie = (data) => {
//     console.log(data)
//     document.getElementById("movie-title").innerHTML = data.original_title + "  "
//     document.getElementById("movie-year").innerHTML = `Date: ${data.release_date}`
//     document.getElementById("movie-runtime").innerHTML = `Runtime: ${data.runtime} min.`
//     document.getElementById("movie-language").innerHTML = `Lang.: ${data.spoken_languages[0].name}`
//     document.getElementById("movie-genre").innerHTML = `Genre: ${data.genres[0].name}`
//     document.getElementById("movie-img").src = `https://image.tmdb.org/t/p/w500${data.poster_path}`
//     document.getElementById("movie-text").innerHTML = `${data.overview}`
//     document.getElementById("imdb-button").innerText = `IMDB`
//     document.getElementById("imdb-button").href = `https://www.imdb.com/title/${data.imdb_id}/?ref_=nm_knf_i2`
//
//
// // When the user clicks the button, open the modal
// let modal = document.getElementById("myModal");
// modal.style.display = "block";
//
// // Get the button that opens the modal
// let btn = document.getElementById("myBtn");
//
// // Get the <span> element that closes the modal
// let span = document.getElementsByClassName("close")[0];
//
// // When the user clicks on <span> (data), close the modal
// span.onclick = function() {
//   modal.style.display = "none";
// }
// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//   if (event.target == modal) {
//     modal.style.display = "none";
//   }
// }}



















// let makeSliderRow = (containerToClone)=>{
//     let temp = document.querySelector(".temlate-for-rows");
//     let clon = temp.content.cloneNode(true);
//     containerToClone.appendChild(clon);
// }
// let sectionAllMovies = document.querySelector('.section-All-movies');
// makeSliderRow(sectionAllMovies);
// makeSliderRow(sectionAllMovies);
// makeSliderRow(sectionAllMovies);

// let cards = document.querySelectorAll(".gui-card");
// const rows = document.querySelectorAll('.scroller');
// let handlePrev = document.querySelectorAll(".handlePrev");
// let handleNext = document.querySelectorAll(".handleNext");

// handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
//     rows[i].scrollLeft -= 150;
//
// } ));
//
// handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
//     rows[i].scrollLeft += 150;
// } ));

// handlePrev.forEach((e,i)=>e.addEventListener('mousedown',function toLeftScroll  (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft -= 1 }  , 10);
//
// } ));
//
// handleNext.forEach((e,i)=>e.addEventListener('mousedown',function toRightScroll (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft += 1 }  , 10);
// } ));
// handlePrev.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }));
// handleNext.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }))



// API key
//2fc09aa4868aaf55aacca5023aea7172
//img url
//https://image.tmdb.org/t/p/w500
// const imgUrl = 'https://image.tmdb.org/t/p/w500';
// fetch("https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
//     .then(response => {
//         return response.json();
//     })
//     .then(data => {
//         setImagesForPopular(data.results)
//     })
//     .catch(err => {
//         console.error(err);
//     });

// let images = document.querySelectorAll(".gui-card__img");
// let title = document.querySelectorAll(".gui-card__title");
// let movieId = document.querySelectorAll(".movie-id");
// console.log(movieId);


// const setImagesForPopular = (res)=>{
//     for(let i = 0 ; i < 20; i++){
//         if(res[i].backdrop_path === null){
//             images[i].src = `${imgUrl}${res[i].poster_path}`;
//         } else{
//             images[i].src = `${imgUrl}${res[i].backdrop_path}`;
//         }
//         title[i].innerHTML = res[i].title;
//         movieId[i].innerHTML = res[i].id;
//
//     }
// }

// const titleRow = document.querySelectorAll(".title-title-row");
//     titleRow[0].innerHTML = "Popular";
//     titleRow[1].innerHTML = "Upcoming";
//     titleRow[2].innerHTML= "Oldies but Goldies";


// cards.forEach(e=>{
//     e.addEventListener("click", function(){
//        localStorage.setItem('id', e.children[1].children[1].innerHTML)
//         // console.log(localStorage)
//         // console.log(localStorage.getItem("id"))
//         getAllMovieInfo(localStorage.getItem("id"));
//         getMovieTrailer(localStorage.getItem("id"))
//     })
// })












// CARROUSEL BOOTSTRAP TEMPLATE ROWS

// let intervalo;
// const rows = document.querySelectorAll('.scroller');
//
// let handlePrev = document.querySelectorAll(".handlePrev");
// let handleNext = document.querySelectorAll(".handleNext");
//
// handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft -= 1 }  , 2);
//
// } ));
//
// handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft += 1 }  , 2);
// } ));
//
//
// handlePrev.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }));
// handleNext.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }));
