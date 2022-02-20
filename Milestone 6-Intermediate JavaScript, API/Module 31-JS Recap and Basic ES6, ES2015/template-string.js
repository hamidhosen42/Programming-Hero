const priya = "Asif Akbar";
const meye = "Meye tumi ki dukkho chino";
const kobita = `kobita tumi sopno charini`;
const multiLine =
  "This is my first line. \n" +
  "this is my second line.\n" +
  "third line text here\n" +
  "fourth line text here";

// console.log(multiLine);

const multiLineNew = `this is is multi line
this is second line
this is third line
fourth line
`;

// console.log(multiLineNew);

const friends = ["abul", "babul", "kabul", "sabul"];
console.log(friends);

const count = 5;
const old = '<h3 class="friend-name">Friend-5</h3>';
console.log(old);

const old2 = '<h3 class="friend-name">Friend-' + count + "</h3>";
console.log(old2);

const old1 = `<h3 class="friend-name">Friend-${count}</h3>`;
console.log(old1);

const new1 = `<h3 class="friend-name">Friend-${friends.length}</h3>`;
console.log(new1);

const first = "Mamun";
const last = "Chowdhury";

const fullOld = "This person name is " + first + " " + last;
console.log(fullOld);

const fullNew = `This person name is: ${first} ${last}. Has money ${
  (friends.length + 10) * 500
}. He lives in Dhaka.`;

console.log(fullNew);