// variable
var favoriteBook = "Programming Book";

// array
var bookList = ["positioning", "hooked", "start with why", "shoe dog"];

var shoeDogIndex = bookList.indexOf("shoe dog");
console.log(shoeDogIndex);
bookList[1] = "python book";

bookList.push("java");
bookList.pop();

bookList.shift(); //remove last element
console.log(bookList);

bookList.unshift("javaScrift"); //add first element
console.log(bookList);

// conditionals

if (bookList[1] == "hooked") {
    console.log("I am hooked");
} else {
    console.log("I am not hooked");
}

console.log("loop")

//while loop
var a = 0;
while (a <= 5) {
    console.log(a);
    a++;
}
//for loop
console.log("for loop");
for (var i = 1; i < 5; i++) {
    console.log(i);
}