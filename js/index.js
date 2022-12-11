//main page of my javascript..
//here i will have the framework of all my functions inside a async fetch function
// import { renderProducts } from "./components/renderItems.js";
import { handleClick } from "./components/toggleItem.js";
import { baseUrl } from "./settings/api.js";
import { getSavedFavorites } from "./components/utils/favFunctions.js";
const itemsContainer = document.querySelector(".results");
async function getItems() {
  try {
    const response = await fetch(baseUrl);
    const articles = await response.json();

    console.log();
    const savedFavs = getSavedFavorites();
    articles.forEach((article) => {
      const isObjectFavorite = savedFavs.find(function (fav) {
        return parseInt(fav.id) === article.id;
      });
      const isArticleFavorite = isObjectFavorite ? "fa" : "far";

      itemsContainer.innerHTML += `
      <div class="results">
            <h1>${article.title}</h1>
            <p> ${article.author}</p>
            <p>${article.summary}</p>
            <i class="${isArticleFavorite} fa-heart" data-id="${article.id}" data-title="${article.title}"></i>
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

// export function saveFavorites(favs) {
//   localStorage.setItem("favorites", JSON.stringify(favs));
// }

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
// if (articleExist === undefined) {
//   const article = {
//     author: author,
//     title: title,
//     summary: summary,
//     id: id,
//   };
//   savedFavs.push(article);
//   saveFavorites(savedFavs);
// }
// else {
//   const newFavs = savedFavs.filter((fav) => fav.id !== id);
//   saveFavorites(newFavs);
// }
// function handleClick() {
//   event.target.classList.toggle("fa");
//   event.target.classList.toggle("far");

//   const id = this.dataset.id;
//   const title = this.dataset.title;
//   const author = this.dataset.author;
//   const summary = this.dataset.summary;

//   let savedFavs = getSavedFavorites();

//   const articleExist = savedFavs.find(function (fav) {
//     return fav.id === id;
//   });

//   console.log("articleExist", articleExist);

//   if (articleExist) {
//     savedFavs = savedFavs.filter((fav) => fav.id !== id);
//     return saveFavorites(savedFavs);
//   }
//   const article = {
//     author: author,
//     title: title,
//     summary: summary,
//     id: id,
//   };
//   savedFavs.push(article);
//   saveFavorites(savedFavs);
// }
// if (isObjectFavorite) {
//   fontHeart = "fa";
// }
