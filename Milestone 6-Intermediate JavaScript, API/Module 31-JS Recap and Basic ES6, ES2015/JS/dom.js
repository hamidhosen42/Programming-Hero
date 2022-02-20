document.getElementById("add-border").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  container.style.border = "2px solid red";
  container.style.margin = "10px";
  container.style.padding = "10px";
  container.style.borderRadius = "10px";
});

function addBackgroundColor() {
  const friend = document.getElementsByClassName("friend");

  for (const friends of friend) {
    friends.style.backgroundColor = "green";
  }
}

document.getElementById("add-friend").addEventListener("click", function () {
  const container = document.getElementById("friend-container");
  const friendDiv = document.createElement("div");
  friendDiv.classList.add("friend");

  friendDiv.innerHTML = `
            <h3 class="friend-name">New Friend</h3>
            <p>Quam, sapiente.</p>
    `;
  container.appendChild(friendDiv);
});