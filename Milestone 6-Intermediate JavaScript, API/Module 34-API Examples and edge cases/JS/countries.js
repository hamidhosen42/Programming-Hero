const loadCountries = () => {
  fetch("https://restcountries.com/v3.1/all")
    .then((res) => res.json())
    .then((data) => displayCountries(data));
};
loadCountries();

const displayCountries = (counties) => {
  console.log(counties);
  // for(const countie of counties)
  // {
  //     console.log(countie);
  // }

  const countriesDiv = document.getElementById("countries");
  counties.forEach((country) => {
    const div = document.createElement("div");
    div.classList.add("country");
    div.innerHTML = `
        <h3>${country.name.common}</h3>
        <p>${country.capital}</p>
        <button onclick="loadCountryByName('${country.name.common}')">Details</button>
        `;
    countriesDiv.appendChild(div);
  });
};

const loadCountryByName = (name) => {
  const url = `https://restcountries.com/v3.1/name/${name}`;
  console.log();
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayCountryDetail(data[0].name));
};

const displayCountryDetail = (country) => {
  const countryDiv = document.getElementById("country-detail");
  //   console.log(json);
  countryDiv.innerHTML = `
    <h5>${country.common}</h4>
    `;
};
{
  /* <p>population: ${country.population}</p>
        <img width="200px" src="${country.flag}"> */
}