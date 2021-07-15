
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

  // TODO: open a new html window
  

  // console.log(inputSearch[0].value);
  let query = inputSearch[0].value;

// Obtain data from the api - console.log 
  let endpoint = `${url}${search_type}?api_key=${api_key}&query=${query}`;  
  //  console.log(endpoint);

// TODO: send search input
fetch(endpoint)
      .then(response => response.json())
        .then(data => console.log(data));
  data.forEach(function(movie, i) {
//       document.querySelector("#slide-" + (i+1)).innerHTML = `
//         <img src="${image.urls.regular}" alt="">
//         <p class="author-info">
//           <a href="${image.links.html}?utm_source=slider-thing&utm_medium=referral&utm_campaign=api-credit">Photo by ${image.user.name}</a> on <a href="https://unsplash.com/">Unsplash</a>
//         </p>
//       `;
//     });
  });

    // TODO: Display on new page with nav

    // Make enter button from keyboard also work


  } //

// user interaction
searchElement.addEventListener('click', getSearchText);
