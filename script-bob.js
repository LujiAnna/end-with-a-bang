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


