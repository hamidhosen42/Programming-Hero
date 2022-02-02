//variable part
// var glass = "water";
// console.log(glass);

// var myName = "Milton";
// console.log(myName);

// Data type
//  Primitive data type
// 1. String data type
// var firstName = "Azizul";
// var lastName = "Milton";
// var fullName = firstName + " " + lastName;
// console.log(fullName);

// 2.Number data type
// var age1 = 30;
// var age2 = "40";
// var sum = age1 + parseInt(age2);
// console.log(sum);

// Boolean Data type
// var number1 = 60;
// var number2 = 60;
// console.log(number1 == number2);

// Undefined data type
// var rollNumber;
// console.log(typeof rollNumber);

// null Data type
// var x = null;
// console.log(x);

// var number1 = 60;
// var number2 = 50;

// console.log(number1 < number2);
// if(number1 < number2){
//     console.log("Number2 is big");
// }

// var number = 50;

// if(number % 2 == 0){
//     console.log("The number is Even/jor");
// }

// if(number % 2 == 1){
//     console.log("The number is odd/bijor");
// }

// var number1 = 200;
// var number2 = 100;

// if(number1 > number2){
//     console.log("Number1 is big");
// }
// else{
//     console.log("Number1 is small");
// }

// var number1 = 1000;
// var number2 = 100;

// if(number1 > number2){
//     console.log("Number1 is big");
// }
// else if(number2 > number1){
//     console.log("Number2 is big");
// }
// else{
//     console.log("Number1 and Number2 is equal!");
// }

// Ternary operator
// var number1 = 1000;
// var number2 = 2000;
// // var test = (condition) ? "true" : "false";
// var result = (number1 > number2) ? "Number1 is big" : "Number2 is big";

// console.log(result);

// for(var i = 1; i <= 10; i++){
//     console.log(i);
// }

// for(var i =10; 0 < i; i--){
//     console.log(i);
// }
// var i = 1;
// while(i <= 10){
//     console.log(i);
//     i++;
// }

// var arr = [10, 15, 20, 25, 30, 35, 40, 43, 75, 69];

// var addOneNumber = arr.push(120); // last e data add kore

// arr.unshift(5); // first e data add kora

// arr.pop(); // last e data remove kore

// arr.shift(); // first e data remove kore
// arr.shift(); // first e data remove kore

// var arr = [10, 15, 20, 25, 30, 35, 40, 43, 75, 69];

// for(var i = 0; i < arr.length; i++) {
//     var result = arr[i];
//     console.log(result, i);
// }

// 1. কোনো একটা লেটার vowel কিনা তা নির্ণয় করা যায় কিভাবে ?
// var input = "z";
// var letter = input.toLowerCase();
// if(letter == "a" || letter == "e" || letter == "i" || letter == "o" || letter == "u"){
//     console.log(letter, "is vowel");
// }
// else{
//     console.log(letter, "is not vowel");
// }

// 2. তিনটি সংখ্যার মধ্যে বড়ো সংখ্যাটি বের কর
// for own practice=>তিনটি সংখ্যার মধ্যে ছোট  সংখ্যাটি বের কর
var number1 = 1000;
var number2 = 6000;
var number3 = 7000;

if (number1 > number2) {
  if (number1 > number3) {
    console.log("Number1 is big");
  }
} else if (number2 > number3) {
  if (number2 > number1) {
    console.log("Number2 is big");
  }
} else {
  console.log("Number3 is big");
}

// 3. ১ - ১০০ এর মধ্যে জোড় সংখ্যাটি বের করার প্রোগ্রাম লিখো
// for own practice=>১ - ১০০ এর মধ্যে বিজোড় সংখ্যাটি বের করার প্রোগ্রাম লিখো
// for(var i = 1; i <= 100; i++){
//     if(i % 2 == 0){
//         console.log(i);
//     }
// }

// 5. একটা লুপ এর সাহায্যে ৭ ঘরের নামতা লিখো
// var number = 5;
// for(var i = 1; i <= 10; i++){
//     var result = i * number;
//     var multiplicationTable = number + " * " + i + " = " + result;
//     console.log(multiplicationTable);
// }
