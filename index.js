var rand1 = Math.ceil(Math.random() * 6);
var rand2 = Math.ceil(Math.random() * 6);

var imgs = document.querySelectorAll("img");

imgs[0].setAttribute("src", "images/dice" + rand1 + ".png");
imgs[1].setAttribute("src", "images/dice" + rand2 + ".png");

if (rand1 > rand2) {
    document.querySelector("h1").innerHTML = "🏁 Player 1 WINS !"
}
else if (rand1 < rand2) {
    document.querySelector("h1").innerHTML = "Player 2 WINS ! 🏁"
}
else {
    document.querySelector("h1").innerHTML = "- Tie -"
}