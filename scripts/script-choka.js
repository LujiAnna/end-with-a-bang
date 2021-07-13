let makeSliderRow = (containerToClone)=>{
    let temp = document.querySelector(".temlate-for-rows");
    let clon = temp.content.cloneNode(true);
    containerToClone.appendChild(clon);
}
let sectionAllMovies = document.querySelector('.section-All-movies');
makeSliderRow(sectionAllMovies);
makeSliderRow(sectionAllMovies);
makeSliderRow(sectionAllMovies);
let cards = document.querySelectorAll(".gui-card");
console.log(cards.length);


const rows = document.querySelectorAll('.scroller');
let handlePrev = document.querySelectorAll(".handlePrev");
let handleNext = document.querySelectorAll(".handleNext");

handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
    rows[i].scrollLeft -= 120;

} ));

handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
    rows[i].scrollLeft += 120;
} ));

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
const imgUrl = 'https://image.tmdb.org/t/p/w500';
fetch("\n" +
    "https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.results)
        setImagesForPopular(data.results)
    })
    .catch(err => {
        console.error(err);
    });

let images = document.querySelectorAll(".gui-card__img");
let title = document.querySelectorAll(".gui-card__title");

const setImagesForPopular = (res)=>{
    for(let i = 0 ; i < 20; i++){
        images[i].src = `${imgUrl}${res[i].backdrop_path}`;
        title[i].innerHTML = res[i].title;
    }
}