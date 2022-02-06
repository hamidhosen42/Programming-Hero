const product = [
  { name: "iphone 14", price: 40000 },
  { name: "iphone 15", price: 50000 },
  { name: "iphone 16", price: 60000 },
  { name: "iphone 17", price: 70000 },
  { name: "iphone 18", price: 80000 },
  { name: "iphone 16", price: 40000 },
];

for(const products of product)
{
    if(products.price>50000)
    {
        break;
    }
    console.log(products);
}

for (const products of product) 
{
  if (products.price < 50000) 
  {
    continue;
  }
  console.log(products);
}