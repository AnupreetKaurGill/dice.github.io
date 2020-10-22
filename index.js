

var state = history.state || {};

var reloadCount = state.reloadCount || 0;

if (performance.navigation.type === 1) { // Reload

  state.reloadCount = ++reloadCount;

  history.replaceState(state, null, document.URL);

} else if (reloadCount) {

  delete state.reloadCount;

  reloadCount = 0;

  history.replaceState(state, null, document.URL);

}

if (reloadCount > 0) {

  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  var randomDiceImage = "dice" + randomNumber1 + ".png"; //dice1.png - dice6.png

  var randomImageSource = "images/" + randomDiceImage;  //images/dice1.png -images/dice6.png

  var image1 = document.querySelectorAll("img")[0];

  image1.setAttribute("src",randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) +1;

  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelectorAll("img")[1].setAttribute("src",randomImageSource2);

  if(randomNumber1 > randomNumber2){

    document.querySelector("h1").innerHTML = "✌🏻 Winner is Player 1!";
  }
  else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "Winner is Player 2!✌🏻";
  }
  else{
    document.querySelector("h1").innerHTML = "Draw!";
  }

}

