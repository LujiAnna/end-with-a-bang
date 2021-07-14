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



const rows = document.querySelectorAll('.scroller');
let handlePrev = document.querySelectorAll(".handlePrev");
let handleNext = document.querySelectorAll(".handleNext");

handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
    rows[i].scrollLeft -= 150;

} ));

handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
    rows[i].scrollLeft += 150;
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
fetch("https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        setImagesForPopular(data.results)
    })
    .catch(err => {
        console.error(err);
    });

let images = document.querySelectorAll(".gui-card__img");
let title = document.querySelectorAll(".gui-card__title");
let movieId = document.querySelectorAll(".movie-id");

const setImagesForPopular = (res)=>{
    for(let i = 0 ; i < 20; i++){
        if(res[i].backdrop_path === null){
            images[i].src = `${imgUrl}${res[i].poster_path}`;
        } else{
            images[i].src = `${imgUrl}${res[i].backdrop_path}`;
        }
        title[i].innerHTML = res[i].title;
        movieId[i].innerHTML = res[i].id;

    }
}

const titleRow = document.querySelectorAll(".title-title-row");
    titleRow[0].innerHTML = "Popular";
    titleRow[1].innerHTML = "Upcoming";
    titleRow[2].innerHTML= "Oldies but Goldies";


cards.forEach(e=>{
    e.addEventListener("click", function(){
       localStorage.setItem('id', e.children[1].children[1].innerHTML)
        // console.log(localStorage)
        // console.log(localStorage.getItem("id"))
    })
})