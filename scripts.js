// Generates random number between 1-6 for two players
var random1 = Math.floor(Math.random()  * 6) + 1;
var random2 = Math.floor(Math.Grandom()  * 6) + 1;

// Sets dice images on page based on random number generated
document.querySelectorAll("div img")[0].src = "images/dice" + random1 + ".png"
document.querySelectorAll("div img")[1].src = "images/dice" + random2 + ".png"

// Changed text in h1 element based on which random number is higher
if ( random1 > random2 ){
  document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
} else if ( random1 < random2 ){
  document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
} else {
  document.querySelector("h1").innerHTML = "It's a Tie.";
}
