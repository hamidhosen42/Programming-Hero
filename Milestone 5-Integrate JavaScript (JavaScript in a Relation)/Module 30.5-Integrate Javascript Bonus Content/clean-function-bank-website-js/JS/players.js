function setPlayerStyle(player) {
  player.style.border = "5px solid red";
  player.style.margin = "10px";
  player.style.padding = "10px";
  player.style.borderRadius = "15px";
}

const players = document.getElementsByClassName("player");
for (const player of players) {
  setPlayerStyle(player);
  player.addEventListener("click", function () {
    player.style.backgroundColor = "yellow";
  });
}

function addPlayer() {
  const playesContainer = document.getElementById("players");
  const players = document.createElement("div");
  players.classList.add("player");
  players.innerHTML = `
    <h4 class="player-name">New Player</h4>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, alias repellat fuga neque iure ipsa quaerat et ut praesentium repudiandae, ullam omnis debitis quasi vero deserunt aliquam, ab perspiciatis est!</p>
    `;
  setPlayerStyle(players);
  playesContainer.appendChild(players);
}

document.getElementById("players").addEventListener("click", function (event) {
  if (event.target.tagName.toLowerCase() == "div") {
    event.target.style.backgroundColor = "yellow";
  } else {
    event.target.parentNode.style.backgroundColor = "yellow";
  }
});
