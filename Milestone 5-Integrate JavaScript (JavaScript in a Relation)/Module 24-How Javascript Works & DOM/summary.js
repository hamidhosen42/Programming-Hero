console.log("Welcome to my website");

const blogs = document.getElementsByTagName("p");
// console.log(blogs);

for (const blog of blogs) {
    blog.style.color = "red";
}

const harum = document.getElementById("spacial-blog");
harum.innerHTML = `
<h3>My friend list</h3>
<div>
<ul>
<li>Friend-1</li>
            <li>Friend-2</li>
            <li>Friend-3</li>
            <li>Friend-4</li>
            <li>Friend-5</li>
            <li>Friend-6</li>
            <li>Friend-7</li>
            <li>Friend-8</li>
            <li>Friend-9</li>
            <li>Friend-10</li>
        </ul>
</div>
`;

// remove friend
const friend =document.getElementById('friend');
// console.log(friend);
// console.log(friend.childNodes);
// console.log(friend.children);

const fifth=friend.children[4];
friend.removeChild(fifth);

// create element
const friends=document.createElement('li');
friends.innerText='Friend-11';
friend.append(friends);