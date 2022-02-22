function loadData() {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

//   stringify JSON
// {
//   "userId": 1,
//   "id": 1,
//   "title": "delectus aut autem",
//   "completed": false
// }

function loadUsers() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    // .then((json) => console.log(json));
    .then((json) => displayUsers(json));
}

function loadPosts() {
  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => response.json())
    .then((json) => console.log(json));
}

function displayUsers(data){
    const ul=document.getElementById('users');
    for(const user of data)
    {
        const li=document.createElement('li');
        li.innerText=`name : ${user.name} "............" email : ${user.email}`;
        ul.appendChild(li);
    }
}