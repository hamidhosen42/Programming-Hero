/* 
javascript total 7 data type:

1. number
2. string
3. boolean
4. undefined
5. null
6. object
7. symbol
*/

/* 
Data types
primitive data types
1. number
2. string
3. boolean
4. undefined
5. null
7. symbol
non-primitive
6. object
*/

let a="hello";
let b=a;
console.log(a,b);
a="gelo";
console.log(a,b);

const x={job:"web devloper"};
const y=x;
console.log(x,y);
// x.job = "front end developer";
y.job = "front end developer";
console.log(x,y);