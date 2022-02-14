const numbers = [3, 6, 4, 8, 9, 19, 15, 21, 45, 87];

//slice
const numberSliced = numbers.slice(4, 8);
// console.log(numberSliced);
// console.log(numbers);

// যদি start অনির্ধারিত হয়,তাহলে ইনডেক্স শুন্য থেকে স্লাইস শুরু হই। যদি end বাদ দেওয়া হই,তাহলে অ্যারের শেষের মধ্যে দিয়ে স্লাইস এক্সাট্রাক্ট করে।

//splice to remove an element from an orginal-array
/* const numberSpliced = numbers.splice(4, 3);//(startIndex,deleteNumber)
console.log(numberSpliced);
console.log(numbers); */

const numberSpliced2 = numbers.splice(4, 3, 777, 888, 999);//(startIndex,delateNumber,totalAddNumber);
console.log(numberSpliced2);
console.log(numbers);