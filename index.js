var score = 0;
var timer = 60;
var hitrn = 0;
//! multiple  bubble created and random number
const makeBubble =()=>{
var clutter = "";
for(var i=1;i<=189;i++){
    var rn = Math.floor(Math.random()*10);
    clutter += `<div class="div bubble">${rn}</div>`
}
document.querySelector(".pbtm").innerHTML = clutter;
}

//! timer code 

const runTimer = () =>{
    var timerClear = setInterval(function(){
         if (timer > 0 ) {
            timer --;
            document.querySelector("#timerval").textContent = timer;
         }else {
            clearInterval(timerClear);
            document.querySelector(".pbtm").innerHTML = `<h1>Game Over!</h1><h1>Your Score is ${score}</h1>`
         }
    },1000)
}

//! hit random value
const hitValue = ()=>{
  hitrn =  Math.floor(Math.random()*10);
   document.querySelector("#hitval").textContent=hitrn;
}

//! score increment
const scoreIncr = ()=>{
    score += 10;
    document.querySelector("#scoreval").textContent=score;
}

//! game concept
const gaming = () =>{
    document.querySelector(".pbtm").addEventListener("click",function(det){
    var clickNum = Number(det.target.textContent);
    if (clickNum === hitrn) {
        scoreIncr();
        makeBubble();
        hitValue();
    }
})
}
gaming();
hitValue();
runTimer();
makeBubble();