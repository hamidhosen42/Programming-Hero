const phone=
[
    {name:"sumsung s5",price:3400,camra:10,storage:32},
    {name:"walton m32",price:4000,camra:90,storage:20},
    {name:"walton m32",price:5000,camra:30,storage:30},
    {name:"oppo m32",price:6000,camra:40,storage:40},
    {name:"nokia m32",price:3000,camra:50,storage:50},
    {name:"htc m32",price:8000,camra:60,storage:60},
];

let cheapest=phone[0];
for(let phones of phone)
{
    // compare price only
    if(phones.price<cheapest.price)
    {
        cheapest=phones;
    }
}
console.log(cheapest);