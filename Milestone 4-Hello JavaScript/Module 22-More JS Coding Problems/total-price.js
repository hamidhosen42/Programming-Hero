const phone = [
  { name: "sumsung s5", price: 3400, camra: 10, storage: 32, quantaty: 1 },
  { name: "walton m32", price: 4000, camra: 90, storage: 20, quantaty: 2 },
  { name: "walton m32", price: 5000, camra: 30, storage: 30, quantaty: 1 },
  { name: "oppo m32", price: 6000, camra: 40, storage: 40, quantaty: 3 },
  { name: "nokia m32", price: 3000, camra: 50, storage: 50, quantaty: 2 },
  { name: "htc m32", price: 8000, camra: 60, storage: 60, quantaty: 1},
];

let totalPrice=0;
for(let prices of phone)
{
    totalPrice=totalPrice+prices.price*prices.quantaty;
}
console.log(totalPrice);