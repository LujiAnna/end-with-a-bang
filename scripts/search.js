
// TODO: Search for movies with params: names, titles etc
import {api_key} from '../config.js';
// console.log(api_key);

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
  // console.log(inputSearch[0].value);
  let query = inputSearch[0].value;
    // console.log(query);
    // console.log(typeof(query));

    // TODO: save in local storage /session
    let storage = localStorage.setItem('id', query); // Uncaught TypeError: Failed to execute 'setItem' on 'Storage': 2 arguments required, but only 1 present.
      console.log(storage);

    let x = localStorage.getItem("id")

    // TODO: open new page
// check whether there's any value
if (query) {
    // TODO: open a new html window - Localhost: http://127.0.0.1:8094/ or http://localhost:8094/
 window.open('http://localhost:8095/search.html'); //window...wrong input

// Obtain data from the api - console.log 
  let endpoint = `${url}${search_type}?api_key=${api_key}&query=${query}`;
  //  console.log(endpoint);

// TODO: send search input
fetch(endpoint)
      .then(response => response.json())
        .then(data => console.log(data))
  // data.forEach(function(movie, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
  // });

    // TODO: Display on new page with nav

    // Make enter button from keyboard also work
} // close if- loop
  } // close function

// ALT 2
// $("#searchButton").click( function() {
//     var url = "http://localhost:8094/search.html" + $("#text").val();
//     window.open(url);
//     console
// });

// ALT 3: a tag instead of a button tag

// user interaction
searchElement.addEventListener('click', getSearchText);

