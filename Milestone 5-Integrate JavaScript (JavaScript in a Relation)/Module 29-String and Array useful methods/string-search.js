const products = [
  "Dell hardcore i29 200GB laptop",
  "iphone 1TB camera flashlight Phone",
  "yellow laptop with black camera",
  "Dell 1X59 Lenovo commercial yoga laptop",
  "LG supernova laptop Dell",
  "HTC low price Phone",
  "Dell purple color phone with Laptop",
];

const searching = "dell";

// indexOf()
// indexOf() দিয়ে প্রথম ম্যাচিং এর index বা পজিশন পাওয়া যায়

const output=[];
for(const product of products)
{
    if(product.toLowerCase().indexOf(searching.toLowerCase())!=-1)
    {
        output.push(product);
    }
}
console.log(output);

//includes() দিয়ে বুঝা যায় যেটা খুজতেছো সেটা স্ট্রিং এর মধ্যে আছে নাকি নাই।

const output1 = [];
for(const product of products)
{
    if(product.toLowerCase().includes(searching.toLowerCase()))
    {
        output1.push(product);
    }
}
console.log(output1);

// startsWith() দিয়ে বুঝা যায় যে জিনিস খুজতেছে সেটা স্ট্রিং এর শুরুতে আছে নাকি নাই।
const output2=[]
for(const product of products)
{
    if(product.toLowerCase().startsWith(searching.toLowerCase()))
    {
        output2.push(product);
    }
}
console.log(output2);

// endsWith() দিয়ে বুঝা যায় যে জিনিস খুজতেছে সেটা স্ট্রিং এর শেষে আছে নাকি নাই।

const output3=[];
for(const product of products)
{
    if(product.toLowerCase().endsWith(searching.toLowerCase()))
    {
        output3.push(product);
    }
}
console.log(output3);