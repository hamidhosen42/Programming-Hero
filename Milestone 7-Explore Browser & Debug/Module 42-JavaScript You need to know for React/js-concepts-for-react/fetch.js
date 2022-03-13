// 1. JSON => stringify, parse

const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}
const studentJSON = JSON.stringify(student);
// console.log(student);
// console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
// console.log(studentObj);


//2. fetch
// fetch('url')
//     .then(res => res.json())
//     .then(data => console.log(data));

// keys, values
const keys = Object.keys(student);
const values = Object.values(student);

// for 
const numbers = [23, 54, 67, 87, 23, 78];

// numbers.forEach(num => console.log(num));
// numbers.forEach(function (num) {
//   console.log(num);
// });

// console.log(numbers.map((num) => num * 2));

// for of on array like object->
// loop on an object using for in 

const numbers1 = [23, 54, 67, 87, 23, 78];
for (const a of numbers1) {
//   console.log(a);
}

const student1 = {
  name: "Salib Khan",
  age: 32,
  movies: ["king khan", "Dhakar Mastan"],
};
for (const a in student1) {
//   console.log(a);
}

// add or remove from an array
const products = [
    { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
    { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
    { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
    { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
    { name: 'camera', price: 9000, brand: 'canon', color: 'gray' }
];

const newProduct = { name: 'webcam', price: 700, brand: 'Lal' };

// copy products array and then add newProduct 
const newProducts = [...products, newProduct];
// console.log(newProducts);
// create a new array without one specific item 
// remove phone means create a new array without the phone
const remaining = products.filter(p => p.name !== 'phone');
console.log(remaining);

/* 
একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে।
*/