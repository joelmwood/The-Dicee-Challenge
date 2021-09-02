var random1 = Math.floor(Math.random()  * 6) + 1;
var random2 = Math.floor(Math.random()  * 6) + 1;

document.querySelectorAll("div img")[0].src = "images/dice" + random1 + ".png"
document.querySelectorAll("div img")[1].src = "images/dice" + random2 + ".png"

if ( random1 > random2 ){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if ( random1 < random2 ){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Tie.";
}
