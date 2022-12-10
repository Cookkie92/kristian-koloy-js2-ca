//main page of my javascript..
//here i will have the framework of all my functions inside a async fetch function
// import { renderProducts } from "./components/renderItems.js";
// import { baseUrl } from "./settings/api.js";
const itemsContainer = document.querySelector(".results");
const baseUrl = "http://localhost:1337/articles/";
async function getItems() {
  try {
    const response = await fetch(baseUrl);
    const items = await response.json();

    console.log();

    items.forEach((articles) => {
      itemsContainer.innerHTML += `
      <div class="results">
            <h1>${articles.title}</h1>
            <p> ${articles.author}</p>
            <p>${articles.summary}</p>
            <i class="fa fa-heart" data-id="${articles.id}" data-title="${articles.title}"></i>
      </div>
      `;
    });
    const heartButtons = document.querySelectorAll(".results i");

    heartButtons.forEach((button) => {
      button.addEventListener("click", handleClick);
    });
  } catch (error) {
    console.log(error);
  }
}

getItems();

function handleClick() {
  event.target.classList.toggle("fa");
  event.target.classList.toggle("far");

  const id = this.dataset.id;
  const title = this.dataset.title;
  const author = this.dataset.author;
  const summary = this.dataset.summary;

  const savedFavs = getSavedFavorites();

  const articleExist = savedFavs.find(function (fav) {
    return fav.id === id;
  });

  console.log("articleExist", articleExist);

  if (articleExist === undefined) {
    const article = {
      author: author,
      title: title,
      summary: summary,
      id: id,
    };
    savedFavs.push(article);
    saveFavorites(savedFavs);
  } else {
    const newFavs = savedFavs.filter((fav) => fav.id !== id);
    saveFavorites(newFavs);
  }
}

function getSavedFavorites() {
  const favs = localStorage.getItem("favorites");

  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

// let articlesArray = [];
// let getArticles = JSON.parse(localStorage.getItem("articles"));

// articlesArray = items.map((x) => {
//   return {
//     author: x.author,
//     title: x.title,
//     summary: x.summary,
//     id: x.id,
//     favorite: "false",
//   };
// });

// localStorage.setItem("articles", JSON.stringify(articlesArray));
