const product = [
  { name: "iphone 14", price: 40000 },
  { name: "iphone 15", price: 50000 },
  { name: "iphone 16", price: 60000 },
  { name: "iphone 17", price: 70000 },
  { name: "iphone 18", price: 80000 },
  { name: "iphone 16", price: 60000 },
];

function searchProduct(products,searchText)
{
    const result=[];
    for(const product of products)
    {
        if(product.name.includes(searchText))
        {
            result.push(product);
            console.log(product);
            console.log(product.name);
        }
        // console.log(product);
        // console.log(product.name);
    }
    return result;
}

console.log(searchProduct(product,"iphone 16"));