// CARROUSEL BOOTSTRAP TEMPLATE ROWS
var intervalo;

function scrollDireita(){
    intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
};
function scrollEsquerda(){
    intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
};
function clearScroll(){
    clearInterval(intervalo);
};

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


