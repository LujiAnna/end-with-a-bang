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