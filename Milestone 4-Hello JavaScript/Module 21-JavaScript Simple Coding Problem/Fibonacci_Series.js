// const fibo=[0,1];
// for(let i=2;i<=10;i++)
// {
//     // nth=(n-1)th+(n-2)th
//     // ith=(i-1)th+(i-2);
//     fibo[i]=fibo[i-1]+fibo[i-2];
// }
// console.log(fibo);

// // Function
// function fiboSerice(num)
// {
//     const fibo=[0,1];
//     for(let i=2;i<num;i++)
//     {
//         fibo[i]=fibo[i-1]+fibo[i-2];
//     }
//     return fibo;
// }
// console.log(fiboSerice(10));

function fiboSerice(num) {
  if (typeof num != "number") 
  {
    return "Please give a number";
  }
  if(num<2)
  {
      return 'Please enter a positive number greather than 1';
  }
  const fibo = [0, 1];
  for (let i = 2; i < num; i++) 
  {
    fibo[i] = fibo[i - 1] + fibo[i - 2];
  }
  return fibo;
}
console.log(fiboSerice("dsrfsd"));
console.log(fiboSerice(-34));
console.log(fiboSerice(10));

var sentence = "I am hardworking. I am determined. I will be a web developer.";
var count = 0;
for(var i = 0; i < sentence.length; i++){
  var letter = sentence[i];
  if(letter=='a'){
    count++;
  }
}
console.log(count);