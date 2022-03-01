const loadSingleUser = () => {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())
    .then((data) => displaySingleUser(data.results[0]));
};

loadSingleUser();

const displaySingleUser = (user) => {
  // console.log(user.name);
};

// meal db
const toggleSpinner=displayStyle=>{
  document.getElementById('spinner').style.display=displayStyle;
}

const toggleSearchResult=displayStyle=>{
  document.getElementById('meals').style.display=displayStyle;
}

function searchMeal() {
  const searchText = document.getElementById("search-field").value;

  // display spinner
  toggleSpinner('block');
  toggleSearchResult('none');

  if (searchText == "") {
    alert("empty");
    toggleSpinner("none");
  } else {
    loadMeals(searchText);

    document.getElementById("search-field").value = "";
  }
}

const loadMeals = (searchText) => {
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMeals(data.meals));
};

const displayMeals = (meals) => {
  const container = document.getElementById("meals");
  container.textContent = "";

  meals?.forEach((element) => {
    const div = document.createElement("div");
    div.innerHTML = `
        <h1 style="color:red">${element.strMeal}</h1>
        <P>${element.strIngredient18?element.strIngredient18:""}</p>
        <button onclick="loadMealDetail('${element.strMeal}')">${element.strMeal}</button>
        `;
    container.appendChild(div);
  });
  toggleSpinner("none");
  toggleSearchResult('block');
};

// loadMeals("");

const loadMealDetail = (mealName) => {
  console.log(mealName);
};