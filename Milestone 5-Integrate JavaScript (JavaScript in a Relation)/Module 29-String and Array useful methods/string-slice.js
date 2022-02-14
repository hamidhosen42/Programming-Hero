const anthem = "Amar Sonar Bangla Ami Tomai Valobashi";

// split() একটা স্ট্রিং কে ছোট ছোট সাবস্টিং এর অ্যারে তে ভাগ করে দেয়।
const words=anthem.split(' ');
console.log(words);

const withoutA=anthem.split('a');
console.log(withoutA);

// slice() একটা স্ট্রিং এর ছোট অংশকে বের করে সেটাকে রিটার্ন করে দেয়।
// slice 
const smallSlice = anthem.slice(5, 13);
console.log(smallSlice);

// substr
// substr() একটা পজিশন থেকে শুরু করে যতগুলো বলবা ততোগুলো অক্ষর রিটার্ন করে।
const anotherPart=anthem.substr(5,7);//(startIndex,totalOkkor)
console.log(anotherPart);

// substring()
// substring() পদ্ধতি একটি স্ট্রিং থেকে indices পজিশন থেকে অক্ষর বের করে এবং সাবস্ট্রিং প্রদান করে।
const anotherAnotherPart = anthem.substring(11, 15);//(startIndex,endIndex)
console.log(anotherAnotherPart);

// concate
// concat() একাধিক স্ট্রিংকে জোড়া দিয়ে একটা নতুন স্ট্রিং তৈরি করে;
const first="Hamid ";
const second="Hosen";

// const fullString = first + second;
const fullString=first.concat(second).concat(" Azad");
console.log(fullString);
console.log(first+second);

// join
// join() দিয়ে  অ্যারের সব উপাদানকে যোগ করে নতুন একটা স্ট্রিং তৈরি করে।
const words2 = ["alim", "badhon", "cameron", "david"];
// const allJoined = words2.join('');
// const allJoined = words2.join(' ');
// const allJoined = words2.join(',');
// const allJoined = words2.join(', ');
const allJoined = words2.join("WWW");
console.log(allJoined);