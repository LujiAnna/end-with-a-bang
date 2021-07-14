// Display image in html id='showcase' 
const slideshowElement = document.getElementById('slideshow');
// console.log(slideshowElement);

let i = 0; 			// Start Point
let images = [];	// Images Array
	 
// TODO: fetch url data from API - most popular, etc => Ask Aich

// Image List
images[0] = 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TWAR_1onPV_Glow/2921bbe4-ea6d-424d-86de-8e9eec50daed._UR3000,600_SX3000_FMwebp_.jpeg';
images[1] = 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_WORE_Control/564a8513-db87-447d-aa74-bab3c233f88e._UR3000,600_SX3000_FMwebp_.jpeg';
images[2] = 'https://m.media-amazon.com/images/G/01/digital/video/sonata/superhero_gl2_vampirediaries_magellan/f65e9b73-d0c8-408d-b5f8-a71bd668adb6._UR3000,600_SX3000_FMwebp_.jpg';
images[3] = 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_TheGrandTour_S4/bdf3cde9-d653-4878-b5cd-5ba502cb46a4._UR3000,600_SX3000_FMwebp_.jpg';
images[4] = 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_Coming2America/86cdd2a2-afcc-4b65-9e1e-9b6878ca33e7._UR3000,600_SX3000_FMwebp_.jpg';
images[5] = 'https://m.media-amazon.com/images/S/sonata-images-prod/SVOD_ROW_BoratSubsequentMoviefilm_NoRing/afc2ca73-199c-4d4f-9669-1ba272bf0539._UR3000,600_SX3000_FMwebp_.jpg';
images[6] = 'https://m.media-amazon.com/images/G/01/digital/video/sonata/SVOD_ROW_7500/63620b07-873e-4b74-add7-99c7e62545aa._UR3000,600_SX3000_FMwebp_.jpg';

//  Change Image
let changeImg = () => {

// image is in link then image

// create an img and link elements
let article = document.createElement('article');
let link = document.createElement('a');
let image = document.createElement('img');

// Element.setAttribute(name, value);
// Value should come from fetching data 
link.setAttribute('href', '#');
image.setAttribute('src', images[i]);
image.setAttribute('name', 'slide');

// Display element in DOM
link.append(image);

// document.body.appendChild(image);
article.append(link);
console.log(link);
slideshowElement.append(article);

	// Check If Index Is Under Max
	if(i < images.length - 1){
	  // Add 1 to Index
	  i++; 
	} else { 
		// Reset Back To O
		i = 0;
	}
}

// Get arrows to slide
const leftArrowElement = document.getElementById('prev');
const rightArrowElement = document.getElementById('next');

// Run function everytime one clicks a button   
leftArrowElement.addEventListener('click', changeImg);
rightArrowElement.addEventListener('click', changeImg);

// Run function when page loads
window.onload=changeImg;

// changeImg();

// DOTS
let dots = document.querySelectorAll('.dot');
console.log(dots);

dots.forEach((element,index) => {
element.addEventListener('click', () => {
  document.slide.src = images[index];
  // images[index].src = images[index];
});
})

// TODO: Ask responsivity, dots (change, highlight on click/slid), proceed with saving, api

// TODO: Save user's fav movies to be viewed later
