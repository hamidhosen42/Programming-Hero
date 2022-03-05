function doSomething()
{
   console.log("I am coding JavaScript");
}

console.log('First: ami sobar age');
console.log('Second: I am the second person');
// doSomething();
setTimeout(doSomething);

setTimeout(doSomething,5000);//(5000->milisecond)

setTimeout(function(){
    console.log("I am using vs code");
},500)

setTimeout(() => {
  console.log("Exploring MDN articles");
}, 4000);

console.log('Third: ami 3 number baccha');
console.log('Fourth: ami ek hali purno korsi');