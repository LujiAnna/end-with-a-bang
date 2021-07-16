const memoryGameInner = document.querySelector('.memoryGameInner');

function makeCardsRow(){
    const cardT = document.querySelector(".cardTemp");
    let clon = cardT.content.cloneNode(true);
    memoryGameInner.appendChild(clon);
}

for (let i = 0; i < 20; i++){
    makeCardsRow();
}
const frontDiv = document.querySelectorAll(".flip-card-front");
const backDiv = document.querySelectorAll(".flip-card-back");
const gameCard = document.querySelectorAll(".gameCard");
const gameCards = [...gameCard];

const img0 = "//upload.wikimedia.org/wikipedia/commons/thumb/a/ad/Angelina_Jolie_2_June_2014_%28cropped%29.jpg/225px-Angelina_Jolie_2_June_2014_%28cropped%29.jpg";
const img1 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvJ3FBjqPAqCsxww-ura7-H1lIPL34C-eXvA&usqp=CAU";
const img2 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfItq6RklDd1UJWGHfPNWunt7oXz0irbDq_w&usqp=CAU";
const img3 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCcnPYf728oApZ9gIrXELuePLOvDa23COxIQ&usqp=CAU";
const img4 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwx2leu7il1dmJp1Doh_042QZnSHvW6IJeJQ&usqp=CAU";
const img5 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGM1-lN4wseVQMO0jLz4nIi8ZmwbUES6AmxA&usqp=CAU";
const img6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBCnDP8Tuzyp3yHguFecHtHXFPbPfWj81xSg&usqp=CAU"
const img7 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3uetguGVp8lflq4c_3YKG1ix5xw7nL-5WVA&usqp=CAU"
const img8 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJIHeOyCsNjLDYGJvl7ourAs0DpF9k-5dtdQ&usqp=CAU"
const img9 ="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCuvGJk4KwuwPKs_kN2geJ2toLHW41KGCWBQ&usqp=CAU"


 const dataImg =[
     {bImg:img0, data:0, divNum:1,},
     {bImg:img0, data:0, divNum:2,},
     {bImg:img1, data:1, divNum:3,},
     {bImg:img1, data:1, divNum:4,},
     {bImg:img2, data:2, divNum:5,},
     {bImg:img2, data:2, divNum:6,},
     {bImg:img3, data:3, divNum:7,},
     {bImg:img3, data:3, divNum:8,},
     {bImg:img4, data:4, divNum:9,},
     {bImg:img4, data:4, divNum:10,},
     {bImg:img5, data:5, divNum:11,},
     {bImg:img5, data:5, divNum:12,},
     {bImg:img6, data:6, divNum:13,},
     {bImg:img6, data:6, divNum:14,},
     {bImg:img7, data:7, divNum:15,},
     {bImg:img7, data:7, divNum:16,},
     {bImg:img8, data:8, divNum:17,},
     {bImg:img8, data:8, divNum:18,},
     {bImg:img9, data:9, divNum:19,},
     {bImg:img9, data:9, divNum:20,},
 ]




function shuffleArray(){
    dataImg.sort(function() { return 0.5 - Math.random() });
}
shuffleArray();

function showElem (elem){
    elem.style.display = "block"
}
function hideElem (elem){
    elem.style.display = "none"
}
function setBackgroundImage(elem, image){
    elem.style.backgroundImage = `url(${image});`
}
frontDiv.forEach((e,i)=>{
    e.style.backgroundImage = `url(${dataImg[i].bImg})`
    e.setAttribute("data", dataImg[i].data)
    e.setAttribute("divNum", dataImg[i].divNum)
});
let click = 0;
let previousClickedDiv;
let previousClickedBehind;
let clickedImg1 ;
let clickedImg2 ;
let divNum1;
let divNum2;
let clickedCard1;
gameCard.forEach((e,i)=>{
    e.classList.add("animate__animated");

    e.addEventListener("click", function(){

        click++;
        e.classList.toggle("animate__flipInX");
        hideElem(backDiv[i]);
        showElem(frontDiv[i]);
        if(click === 1){
            clickedCard1 = e.children[0].attributes.divNum.value;
            clickedImg1 = frontDiv[i].attributes.data.value;
            divNum1 = frontDiv[i].attributes.divNum.value;
            previousClickedDiv = e.children[0];
            previousClickedBehind = e.children[1];
        }
        if(click === 2 && clickedCard1 !== frontDiv[i].attributes.divNum.value){
            console.log(frontDiv[i].attributes.divNum.value)
            clickedImg2 = frontDiv[i].attributes.data.value;
            divNum2 = frontDiv[i].attributes.divNum.value;
            e.classList.toggle("animate__flipInX");

            if(clickedImg1 === clickedImg2 ){
                click = 0;
                console.log("yes")
            }
        }
        if(clickedImg1 !== clickedImg2 && click === 2){
            setTimeout(function(){
                hideElem(frontDiv[i]);
                hideElem(previousClickedDiv)
                showElem(backDiv[i]);
                showElem(previousClickedBehind);
            }, 200);
            click=0;
        }
        if(click==0 && clickedImg1 !== clickedImg2){
            setTimeout(function(){
                hideElem(frontDiv[i]);
                hideElem(previousClickedDiv)
                showElem(backDiv[i]);
                showElem(previousClickedBehind);
            }, 200);
        }

    })
})
gameCard.forEach(e=>{
    e.addEventListener("dblclick", function(){
        click = 0;
    })
})

let a = '2021-06-1980';
let f = a.split('-')[0];
console.log(f);

