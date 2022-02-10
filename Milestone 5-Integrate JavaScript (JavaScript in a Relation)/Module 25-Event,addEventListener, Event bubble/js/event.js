function eventRed() {
  document.body.style.backgroundColor = "red";
}

// handel blue button click by setting functon name

const bluebutton = document.getElementById("make-blue-button");
// console.log(bluebutton);
// just set the name of the function
bluebutton.onclick = makeBlue;
function makeBlue() {
  document.body.style.backgroundColor = "blue";
}

// handle event using anonymous function

//  <!-- system no-4 -    addEventListener-->
const greenButton = document.getElementById("make-green-button");
// anonymous function
greenButton.onclick = function () {
  document.body.style.backgroundColor = "green";
};

// handle event using addEventListener

// <!-- system no-5 -    addEventListener-->

const orangeButton = document.getElementById("make-orange-button");
orangeButton.addEventListener("click", makeOrange);
function makeOrange() {
  document.body.style.backgroundColor = "orange";
}

// <!-- system no-6 -    addEventListener-->
const hotPink = document.getElementById("make-hotpink-button");
hotPink.addEventListener("click", function () {
  document.body.style.backgroundColor = "hotpink";
});

// <!-- system no-7 -    addEventListener-->
document.getElementById("make-light-blue-button").addEventListener("click", function () 
  {
    document.body.style.backgroundColor = "lightblue";
  });