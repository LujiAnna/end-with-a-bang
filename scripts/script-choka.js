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




// API key
//2fc09aa4868aaf55aacca5023aea7172
//img urlgit
//https://image.tmdb.org/t/p/w500
fetch("\n" +
    "https://api.themoviedb.org/3/movie/popular?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.error(err);
    });