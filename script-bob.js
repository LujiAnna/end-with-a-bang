// NEW DROPDOWN MENU FUNCTION
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
//Code for Modal
const apiKey = "2fc09aa4868aaf55aacca5023aea7172"


const getAllMovieInfo = (movieId) => {
    axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${apiKey}&language=en-US`)
        .then((res) => getMovie(res.data))
        .catch((err) => console.log(err))

}

const getMovieTrailer = (movieId) => {
    axios
        .get(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${apiKey}&language=en-US`)
        .then((res) => getTrailer(res.data))
        .catch((err) => console.log(err))
}

const  getTrailer = (data) => {
    document.getElementById("movie-trailer").src = `https://www.youtube.com/embed/${data.results[0].key}`
}

const getMovie = (data) => {
    // console.log(data)
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
    }}
//Code for modal ends here

// <<<<<Here generates rows with movies
let makeSliderRow = (containerToClone)=>{
    let temp = document.querySelector(".temlate-for-rows");
    let clon = temp.content.cloneNode(true);
    containerToClone.appendChild(clon);
}
let sectionAllMovies = document.querySelector('.section-All-movies');
makeSliderRow(sectionAllMovies);
makeSliderRow(sectionAllMovies);
makeSliderRow(sectionAllMovies);
//generating rows ends here>>>>>>

//getting DOM elements
const cards = document.querySelectorAll(".gui-card");
const rows = document.querySelectorAll('.scroller');
const handlePrev = document.querySelectorAll(".handlePrev");
const handleNext = document.querySelectorAll(".handleNext");
const movieId = document.querySelectorAll(".movie-id");
const movieTitle = document.querySelectorAll(".gui-card__title");
const movieImage = document.querySelectorAll(".gui-card__img");


// <<<<<code for row with movies
handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
    rows[i].scrollLeft -= 150;

} ));

handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
    rows[i].scrollLeft += 150;
} ));
//here it ends>>>>>


//<<<<<<<setting titles for rows
const titleRow = document.querySelectorAll(".title-title-row");
titleRow[0].innerHTML = "Popular";
titleRow[1].innerHTML = "Upcoming";
titleRow[2].innerHTML= "Oldies but Goldies";
//---------->>>>>>>>


//Fetch for first row
const imgUrl = 'https://image.tmdb.org/t/p/w500';
fetch("https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        setPopular(data.results)
    })
    .catch(err => {
        console.error(err);
    });
const setPopular = (res)=>{
    for(let i = 0 ; i < 20; i++){
        if(res[i].backdrop_path === null){
            movieImage[i].src = `${imgUrl}${res[i].poster_path}`;
        } else{
            movieImage[i].src = `${imgUrl}${res[i].backdrop_path}`;
        }
        movieTitle[i].innerHTML = res[i].title;
        movieId[i].innerHTML = res[i].id;

    }
}

/* Upcomming Fetch row 2 */

const imageUrl = 'https://image.tmdb.org/t/p/w500';

fetch("\n" +
    "https://api.themoviedb.org/3/movie/upcoming?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US&page=1")
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data.results)
        setImagesToUpcomming(data.results)
    })

    .catch(err => {
        console.error(err);
    });



const setImagesToUpcomming = (res) => {
    let count = -1;
    for(let i = 20 ; i < 40; i++){
        count = count + 1;
        movieImage[i].src = `${imageUrl}${res[count].backdrop_path}`;
        movieTitle[i].innerHTML = res[count].title;
        movieId[i].innerHTML = res[count].id;
    }
};

/* Top Rated Fetch row 3 */

fetch ("https://api.themoviedb.org/3/movie/top_rated?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US&page=1")
.then (response => {
   return response.json();
})
.then(data =>{
    console.log(data.results)
getTopRatedMovies(data.results)
})

.catch(err => {
    console.log(err);
});

const getTopRatedMovies = (res) => {
    let count = -1;
    for (let i=40; i<60;i++){
        count = count +1;
        movieTitle[i].innerHTML = res[count].title;
        movieImage[i].src = `${imageUrl}${res[count].backdrop_path}`;
        movieId[i].innerHTML = res[count].id;
    }
}

//On click setting movie id to local storage
cards.forEach(e=>{
    e.addEventListener("click", function(){
        localStorage.setItem('id', e.children[1].children[1].innerHTML)
        // console.log(localStorage)
        // console.log(localStorage.getItem("id"))
        getAllMovieInfo(localStorage.getItem("id"));
        getMovieTrailer(localStorage.getItem("id"))
    })
})
//------->>>>>>>>>

/*
const inputSearch = document.getElementsByTagName('input');
const inputSearch2 = inputSearch.value;
localStorage.setItem( 'id', inputSearch2);
console.log(localStorage.setItem( 'id', inputSearch2 ));

 */