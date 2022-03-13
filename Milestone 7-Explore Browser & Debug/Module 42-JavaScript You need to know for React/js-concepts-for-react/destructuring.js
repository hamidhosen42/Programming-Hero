// 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

// const [x, y] = [42, 65]

const [x, y] = numbers;
// console.log(x, y);

function boxify(num1, num2) {
    const nums = [num1, num2];
    return nums;
}

// // const [first, second] = [90, 34]
// const [first, second] = boxify(90, 34);

// console.log(boxify(90, 34));
const student = {
    name: 'Salib Khan',
    age: 32,
    movies: ['king khan', 'Dhakar Mastan']
}

const [firstMovie, secondMovie] = student.movies;


// object destructuring
const { name, age } = { name: 'alu', age: 14 };
const { name1, age1 } = { id: 12, name1: 'alu', salary: 3400, age1: 14 };

const employee = {
    ide: 'VS Code',
    designation: 'developer',
    machine: 'mac',
    languages: ['html', 'css', 'js'],
    specification: {
        height: 66,
        weight: 67,
        address: 'kumarkhali',
        drink: 'water',
        watch: {
            color: 'black',
            price: 500,
            brand: 'garmin'
        }
    }
}

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;//optional chaining
console.log(brand);
console.log(weight);
console.log(address);

/* 
সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।
*/