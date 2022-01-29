var computer={
    price:"25000",
    storage:"145gb",
    processor:"intel i5",
    color:"red",
}

console.log(computer);
console.log(computer.price)

// set of object property
computer.price=2000;
console.log(computer);

// different ways to set a value of an object property
computer.price=2000000;
computer["price"]=349009;
var name="price";
computer[name]=382392938224;
console.log(computer);