import {apiKey} from '../config.js'
// console.log(apiKey);

// let movie_url = `http://www.omdbapi.com/?i=tt3896198&apikey=${apiKey}`;
// or
// let movie_url = `https://www.omdbapi.com/?apikey=5387798f&i=tt3896198`;

// Get 7 images posters for 'the tomorrow war', 'the vampire diaries' movies, using 't' parameter and .poster object
// Photos displayed 1st: #1 movie, 2-5 amazon originals, 6&7 on promo maybe
// https://www.omdbapi.com/?apikey=5387798f&t=the tomorrow war
// https://www.omdbapi.com/?apikey=5387798f&t=the vampire diaries




// Display image in html id='showcase' 
const slideshowElement = document.getElementById('slideshow');
console.log(slideshowElement);

for(let i = 0; i < 7 ; i++) {
// image is in link then image

// Alternative 1
// create an img and link elements
let article = document.createElement('article');
let link = document.createElement('a');
let image = document.createElement('img');
let p = document.createElement('p');

// console.log(link);
// console.log(image);

// TODO: fetch url data from script
// TODO: !Get full or random data from the API. If not get from specific IDs or titles

let poster_url = "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg";
// Element.setAttribute(name, value);
// Value should come from fetching data 
link.setAttribute('href', '#');
image.setAttribute('src', poster_url);
// let objectURL = URL.createObjectURL(myBlob);
// image.src = objectURL;
// and give it some content
const movieTitle = document.createTextNode("The Vampire Diaries");
// console.log(link);
// console.log(image);

// read more: https://developer.mozilla.org/en-US/docs/Web/API/Element

// Display element in DOM
link.append(image);
// add the text node to the newly created p
p.appendChild(movieTitle);
link.append(p);

// document.body.appendChild(image);
article.append(link);
console.log(link);
slideshowElement.append(article);


// TODO: check error for when poster is unavailable: "Poster": "N/A"
// https://www.omdbapi.com/?apikey=5387798f&t=without remorse

// Get arrows to scroll
const leftArrowElement = document.getElementById('prev');
const rightArrowElement = document.getElementById('next');

let slideIndex = 1;

let showSlides = (n) => {
  let i;
  let slides = document.getElementsByTagName("article"); 
  console.log('slides', slides);
  let dots = document.getElementsByClassName("dot");
  console.log(dots);
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}

showSlides(slideIndex);

// Next/previous controls
let nextSlide = (n) => {
  showSlides(slideIndex += n);
  console.log('next');
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
  console.log('current')
}

//  TODO: Scroll images right and left    
leftArrowElement.addEventListener('click', nextSlide(-1));
rightArrowElement.addEventListener('click', nextSlide(1));



// TODO: Save user's fav movies to be viewed later

}