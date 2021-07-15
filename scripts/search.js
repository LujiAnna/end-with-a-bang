
// TODO: Search for movies with params: names, titles etc
//import {api_key} from '../config.js';
// console.log(api_key);
const api_key = "2fc09aa4868aaf55aacca5023aea7172"
// API endpoints
const url = 'https://api.themoviedb.org/3/';
const search_type = 'search/multi';

// Select action element
const searchElement = document.getElementById('searchButton');
// console.log(searchElement);

// Select where input is
const inputSearch = document.getElementsByTagName('input');
// console.log(inputSearch); // node like with index 0
//console.log(inputSearch);
// Interaction for value of input box when search button is clicked
let getSearchText = () => {
    // console.log(inputSearch[0].value);
    let query = inputSearch[0].value;


    if (query) {
        //window.open('http://localhost:63342/search.html');
        console.log(query);
// Obtain data from the api - console.log 

    let endpoint = `${url}${search_type}?api_key=${api_key}&query=${query}`;


    //  console.log(endpoint);

// TODO: send search input
   /* fetch(endpoint)
        .then(response => response.json())
    // TODO: Display on new page with nav

    // Make enter button from keyboard also work
    */

}

}

// user interaction
searchElement.addEventListener('click', getSearchText);


localStorage.getItem("input");

