// JavaScript Object Notation (JSON)
const user={id:191002012,name:"Hamid Hosen",job:"Programming"};
const stringified=JSON.stringify(user);
// console.log(user);
// console.log(stringified);

// stringify
const shop = {
  name: "Alia Store",
  address: "Ranbir road",
  profit: 15000,
  products: ["laptop", "mobile", "pepsi"],
  owner: {
    name: "Alia Bhatt",
    profession: "actor",
  },
  isExpensive: false,
};
const shopStringified=JSON.stringify(shop);
// console.log(shop);
console.log(shopStringified);
const converted=JSON.parse(shopStringified);
console.log(converted);
console.log(converted.owner.name);