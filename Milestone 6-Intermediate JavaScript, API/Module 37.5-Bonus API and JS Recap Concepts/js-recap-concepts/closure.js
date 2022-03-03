// const bank=(owner)=>{
//     balance=0;

//     return amount=>{
//         balance+=amount;
//         return balance;
//     }
// }

const bank = (owner) => {
  balance = 0;

//   return (amount,withdraw) => {
//     balance += amount-withdraw;
//     return balance;
//   };

return {
  deposite: (amount) => {
    balance += amount;
    return balance;
  },
  withdraw: (amount) => {
    balance -= amount;
    return balance;
  },
};
};

// const HamidBank=bank("Hamid");
// // // console.log(HamidBank);
// // console.log(HamidBank(100));
// // console.log(HamidBank(300));
// // console.log(HamidBank(100));
// // console.log(HamidBank(50));
// // console.log(HamidBank.balance);
// // console.log(HamidBank(200));

const HamidBank=bank("Hamid");
console.log(HamidBank.deposite(100));
console.log(HamidBank.deposite(300));
console.log(HamidBank.deposite(100));
console.log(HamidBank.deposite(50));
console.log(HamidBank.balance);
console.log(HamidBank.deposite(200));

console.log(HamidBank.withdraw(200));
console.log(HamidBank.withdraw(20));