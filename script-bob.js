// CARROUSEL BOOTSTRAP TEMPLATE ROWS

// let intervalo;
// const rows = document.querySelectorAll('.scroller');
//
// let handlePrev = document.querySelectorAll(".handlePrev");
// let handleNext = document.querySelectorAll(".handleNext");
//
// handlePrev.forEach((e,i)=>e.addEventListener('click',function toLeftScroll  (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft -= 1 }  , 2);
//
// } ));
//
// handleNext.forEach((e,i)=>e.addEventListener('click',function toRightScroll (){
//     intervalo = setInterval(function(){ rows[i].scrollLeft += 1 }  , 2);
// } ));
//
//
// handlePrev.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }));
// handleNext.forEach((e,i)=>e.addEventListener("mouseleave", function clearScroll(){
//     clearInterval(intervalo);
//
// }));

// NEW DROPDOWN MENU FUNCTION
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}


window.onclick = function(event) {
    if (!event.target.matches('#dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

const imageUrl = 'https://image.tmdb.org/t/p/w500';

fetch("\n" +
    "https://api.themoviedb.org/3/movie/upcoming?api_key=2fc09aa4868aaf55aacca5023aea7172&language=en-US&page=1")
    .then(response => {
        return response.json();
    })

    .then(data => {
        console.log(data.results)
        setImagesToUpcomming(data.results)
    })

    .catch(err => {
        console.error(err);
    });

let titleCard = document.querySelectorAll(".gui-card__title");
let imageCard = document.querySelectorAll(".gui-card__img");

const setImagesToUpcomming = (res) => {
    let count = 0;
    for(let i = 20 ; i < 40; i++){
        imageCard[i].src = `${imageUrl}${res[count++].backdrop_path}`;
        titleCard[i].innerHTML = res[count++].title;
    }
};

