const personObject={
    firstName:"Hamid",
    lastName:"Hosen",
    address:{country:"Uganda",capital:"kampala"},
}

const cart={abc:1,def:2,ghi:1};

const personArray=["Hamid1","Hosen1","Azad1"];

// Object Dot Notation and Square Bracket notation

//-------------- Dot Notation-------
// const firstName=personObject.firstName;

// --------------Square Bracket Notation-------
// const lastName="lastName";
// const name =personObject[lastName];
// console.log(name);
// const giveQuantity=(id)=>{
//     console.log(cart[id]);
// }
// giveQuantity("abc");

// ---------------Simple Object Destructuring--------
// const {firstName,lastName,address}=personObject;
// console.log(firstName);
// console.log(lastName);
// console.log(address);
// console.log(address.country);
// console.log(address.capital);

// ---------------Array index--------------------
// const firstName=personArray[0];

// ---------------Array Destructuring ------------
// const [firstName,lastName]=personArray;
// const [, , hoho]=personArray;
// console.log(firstName);
// console.log(lastName);
// console.log(hoho);

// Object Destructuring Pro tricks

// --------------Multi-level Destructuring-----
// const {address:{capital}}=personObject;
// console.log(capital);

//-------------- Defult Value---------------
// const {age="Not available"}=personObject;
// console.log(age);

// --------re-assigning---------
const {firstName:bhukiChiki}=personObject;
console.log(bhukiChiki);