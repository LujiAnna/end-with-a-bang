// Display image in html id='showcase' 
const slideshowElement = document.getElementById('slideshow');
console.log(slideshowElement);

for(let i = 0; i < 7 ; i++) {
// image is in link then image

// create an img and link elements
let article = document.createElement('article');
let link = document.createElement('a');
let image = document.createElement('img');
let p = document.createElement('p');

// TODO: fetch url data from script
// TODO: !Get full or random data from the API. If not get from specific IDs or titles

let poster_url = "https://m.media-amazon.com/images/M/MV5BMDk3YzgxNDQtNTEzOS00NDMyLWFlYmYtYTZlMDk1NDkxNmMyXkEyXkFqcGdeQXVyNzA5NjUyNjM@._V1_SX300.jpg";
// Element.setAttribute(name, value);
// Value should come from fetching data 
link.setAttribute('href', '#');
image.setAttribute('src', poster_url);

// and give it some content
const movieTitle = document.createTextNode("The Vampire Diaries");


// Display element in DOM
link.append(image);
// add the text node to the newly created p
p.appendChild(movieTitle);
link.append(p);

// document.body.appendChild(image);
article.append(link);
console.log(link);
slideshowElement.append(article);

// Get arrows to scroll
const leftArrowElement = document.getElementById('prev');
const rightArrowElement = document.getElementById('next');