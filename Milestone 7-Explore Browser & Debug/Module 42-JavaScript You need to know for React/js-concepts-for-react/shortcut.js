// 'almas', 5, true, {}, []   ->truthy
// '', 0, false, null, undefined    ->false
// check truthy

let myVar = 5;
// check any truthy 
if (myVar) {
    myVar = myVar * 100;
}
else {
    myVar = 0;
}

let myMoney = 50;
// you check negative or falsy anything
if (!myMoney) 
{
    myMoney=myMoney*10;
}
else
{
    myMoney=0;
}

const money = 800;
let food;
if (money > 100) {
    food = 'biryani';
}
else {
    food = 'cha biscuit';
}

// ternary
let food1 = money > 100 ? 'biryani' : 'cha biscuit';
// console.log(food1);

let drink = (money > 100 && myVar > 100) ? 'coke' : 'filter water';
// console.log(drink);

// number to string conversion
const num1 = 52;
// console.log(num1);
const numStr = num1 + '';
// console.log(numStr)

// string to number
const input = '560';
const inputNum = +input;
// console.log(inputNum);


let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('hide User');

isActive ? showUser() : hideUser();

// use && if the left side is true then right side will be executed
isActive && showUser();
// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;

/* 
২. ternary অপারেটর কি ? এইটা দিয়ে শর্টকার্টে কিভাবে if-else লিখে 
৩. লজিক্যাল এন্ড (&&) আর লজিক্যাল or (।।) এই দুইটা সম্পর্কে হালকা ধারণা 
৪. JSON এর stringify এবং parse কখন কোনটা ইউজ করে 
৫. ++, --, +, +'', +=, -= এইগুলা কি জিনিস। কোনটা দিয়া কি করে সেটা বুঝলেই হবে। তাছাড়া active = !active এইটা এর মানে কি। 
*/