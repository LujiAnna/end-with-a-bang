import {apiKey} from '../config.js'
// console.log(apiKey);

// let movie_url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
// or
// let movie_url = `https://www.omdbapi.com/?apikey=5387798f&i=tt3896198`;

// Get 7 images posters for 'the tomorrow war', 'the vampire diaries' movies, using 't' parameter and .poster object
// Photos displayed 1st: #1 movie, 2-5 amazon originals, 6&7 on promo maybe
// https://www.omdbapi.com/?apikey=5387798f&t=the tomorrow war
// https://www.omdbapi.com/?apikey=5387798f&t=the vampire diaries

// TODO: Display image in html id='showcase' 
const showcaseElement = document.getElementById('showcase');
console.log(showcaseElement);

// image is in link then image

// Alternative 1
// create an img and link elements
let link = document.createElement('a');
let image = document.createElement('img');
// console.log(link);
// console.log(image);

// TODO: fetch url data from script
// TODO: !Get full or random data from the API. If not get from specific IDs or titles

let movie_url = `https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg`;

// Element.setAttribute(name, value);
// Value should come from fetching data 
link.setAttribute('href', '#');
image.setAttribute('src', movie_url);

// let objectURL = URL.createObjectURL(myBlob);
// image.src = objectURL;

// console.log(link);
// console.log(image);

// TODO: find more: https://developer.mozilla.org/en-US/docs/Web/API/Element

// TODO: append element in DOM
link.append(image);

// document.body.appendChild(image);
showcaseElement.append(link);

console.log(link);


// Alternative 3
// const url = new URL('../cats', 'http://www.example.com/dogs');
// console.log(url.hostname); // "www.example.com"
// console.log(url.pathname); // "/cats"
// Copy to Clipboard
// URL properties can be set to construct the URL:

// url.hash = 'tabby';
// console.log(url.href); // "http://www.example.com/cats#tabby"

// TODO: Style displayed images


// TODO: Display data object on the console 


// TODO: check error for when poster is unavailable: "Poster": "N/A"
// https://www.omdbapi.com/?apikey=5387798f&t=without remorse




// TODO: Add arrows to scroll
//  TODO: Scroll images right and left    

