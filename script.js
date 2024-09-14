var time = 30;
var hit = 0;
var score = 0;
var rm = 0;

function updateHit(){
    rm = Math.floor(Math.random()*10);
    document.querySelector(".hit").textContent = rm;
}

function updateScore(){
    score += 10;
    document.querySelector(".score").textContent = score;
}

function makeBubble(){
    harsh = "";
    var bottom = document.querySelector("#bottomgame")

    for(var i=1; i<=152; i++){
        harsh += `<div id="buble">${Math.floor(Math.random()*10)}</div>`
    }

    bottom.innerHTML = harsh
}

document.querySelector("#bottomgame").addEventListener("click",function(dets){
    var game = Number(dets.target.textContent);
    if(game === rm){
        updateScore()
        makeBubble()
        updateHit()
    }
})
function timer(){
    var timeint = setInterval(function(){
        if(time >0){
            time--;
            document.querySelector(".second").textContent = time
        }else{
            clearInterval(timeint)
            document.querySelector("#bottomgame").innerHTML = `<div id ="over"><h1 id="h1">Game is over!!</h1> 
            <h1 id ="h2">Your score is <span>${score}<span></h1></div>`
        }
    },1000)
}

timer()
makeBubble()
updateHit()