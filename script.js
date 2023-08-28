var timer = 60;
var score = 0;
var mn = 0;

function increaseScore(){
    score+=10;
    document.querySelector("#scoreval").textContent = score
}



 
 function getNewHit() {
     mn= Math.floor(Math.random() * 10)
    document.querySelector("#hitval").textContent = mn;
  }
 
 
 
 
 function makeBubble() {
    var clutter = " ";

    for(var i= 1; i<=168; i++){
        var an = Math.floor(Math.random()*10)
        clutter+= `<div class="bubble">${an}</div>`
    }
    
    document.querySelector("#pbtom").innerHTML = clutter;

 }
 
 function runTimer(){
  var timerint =  setInterval(function(){
        if(timer > 0){
            timer--;
            document.querySelector("#timervalue").textContent = timer
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtom").innerHTML = `<h1>Game Over</h1>`
        }
     }, 1000)
 }

 document.querySelector("#pbtom")
 .addEventListener("click",function(dets){
  var clickthenum = Number(dets.target.textContent);
  if(mn === clickthenum){
    increaseScore();
    makeBubble();
    getNewHit();
  }
 })
 
 getNewHit();
 runTimer();
 makeBubble();