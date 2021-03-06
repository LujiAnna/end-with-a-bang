// TODO: Search for movies with params: names, titles etc
// import {api_key} from '../config.js';
// console.log(api_key);

const api_key = '9aab0ef387e49c85a53ec96e5eb47b94';

// API endpoints
const url = 'https://api.themoviedb.org/3/';
const search_type = 'search/multi';

// Select action element
const searchElement = document.getElementById('searchButton');
// console.log(searchElement);

// Select where input is
const inputSearch = document.getElementsByTagName('input');
// console.log(inputSearch); // node like with index 0

// Interaction for value of input box when search button is clicked
let getSearchText = () => {
    //console.log(inputSearch[0].value);
    let query = inputSearch[0].value;
    console.log(query);
    // console.log(typeof(query));
 if (query) {


     // TODO: save in local storage /session
     let storage = localStorage.setItem('id', query); // Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
     console.log(storage);

     let x = localStorage.getItem("id");
     console.log(x);

     // Obtain data from the api - console.log
     let endpoint = `${url}${search_type}?api_key=${api_key}&query=${query}`;

     //  console.log(endpoint);
// TODO: send search input
     fetch(endpoint)
         .then(response => response.json())
         .then(data => console.log(data))
     console.log("test")
     // data.forEach(function(movie, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
     // });

 }// close if- loop
} // close function

// ALT 3: a tag instead of a button tag

// user interaction
searchElement.addEventListener('click', getSearchText);


//New code

searchElement.addEventListener('click', getSearchText);

let searchItem=  () =>{
    let sItem = localStorage.getItem( 'searchInput');
    return sItem
}
searchItem();
console.log(searchItem())


fetch("https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        // console.log(data.results)
        findMovieInData(data.results, searchItem());

    })
    .catch(err => {
        console.error(err);
    });
let arrFind;
let findMovieInData = (movieDB, searchItem)=>{
    let regex = new RegExp(searchItem, 'g');
    // console.log(regex.test(searchItem))
    // console.log(searchItem)
    let m = movieDB.filter(e=>{
       if (e.title.match(regex) !== null){
           return e;
       }
    })
    arrFind = m;
    console.log(arrFind)
    setImageToFound(arrFind)
    return m ;
}
const imgUrl = 'https://image.tmdb.org/t/p/w500';
const movieTitle = document.querySelector(".gui-card__title");
const movieImage = document.querySelector(".gui-card__img");
const setImageToFound = (res) => {
    movieImage.src = `${imgUrl}${res[0].backdrop_path}`;
    movieTitle.innerHTML = res[0].title;
};
