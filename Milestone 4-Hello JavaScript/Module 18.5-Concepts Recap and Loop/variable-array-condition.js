var bottleColor = "yellow";
var watherQuantity = 1;
var isFull = true;

// array
var item = ["bottle", "muq", "paper", "pen"];
item.indexOf("logens"); //-1
item.push("envelop");
item.push("watch");
item.pop();

// conditionls

if (item.length == 4) {
    console.log("length is four");
} else if (item.length < 4) {
    console.log("length less than four");
} else {
    console.log("length is grather than four");
}