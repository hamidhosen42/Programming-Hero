const elementById = (id) => {
  return document.getElementById(id);
};

const handleSearch = () => {
  const keyword = elementById("keyword");
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=${keyword.value}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showArtists(data));
    keyword.value = "";
};

const defult = () => {
  const url = `https://theaudiodb.com/api/v1/json/2/search.php?s=AURORA`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showArtists(data));
};
defult();

const showArtists = (data) => {
  const artistContainer = elementById("artists");
  artistContainer.textContent="";
  data?.artists?.forEach((artist) => {
    const div = document.createElement("div");
    div.classList.add("artist-card");
    div.innerHTML = `
    <div class="image-container">
    <div class="image-container-inner">
      <img
        src="${
          artist.strArtistThumb
            ? artist.strArtistThumb
            : "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
        }"
        alt=""
      />
    </div>
  </div>
  <div class="info-container">
    <h1>${artist.strArtist ? artist.strArtist : "Not Available"}</h1>
    <p>Country: ${artist.strCountry ? artist.strCountry : "Not Available"}</p>
    <p>Style: ${artist.strGenre ? artist.strGenre : "Not Available"}</p>
  </div>
  <button class="album-button">
    <i class="fa-solid fa-compact-disc"></i>
    <p onclick="fetchAlbums('${
      artist.idArtist
    }')" class="button-title">Albums</p>
  </button>`;
    artistContainer.appendChild(div);
  });
  const albumContainer = elementById("albums");
  albumContainer.textContent="";
};

const fetchAlbums = (id) => {
  const url = `https://theaudiodb.com/api/v1/json/2/album.php?i=${id}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => showAlbum(data));
  // const artistContainer = elementById("artists");
  // artistContainer.innerHTML = "";
};

const showAlbum = (data) => {
  console.log(data);
  const albumContainer = elementById("albums");
  albumContainer.textContent="";
  data?.album?.forEach((item) => {
    const div = document.createElement("div");
    div.classList.add("album");
    div.innerHTML = `
        <div class="album-image-container">
          <img
            src="${
              item.strAlbumThumb
                ? item.strAlbumThumb
                : "https://monstar-lab.com/global/wp-content/uploads/sites/11/2019/04/male-placeholder-image.jpeg"
            }"
            alt=""
          />
        </div>
        <div class="album-name">
          <h3>${item.strAlbum}</h3>
        </div>
      `;

    albumContainer.appendChild(div);
  });
};