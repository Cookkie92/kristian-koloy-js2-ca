//main page of my javascript..
//here i will have the framework of all my functions inside a async fetch function
// import { renderProducts } from "./components/renderItems.js";
import { handleClick } from "./components/toggleItem.js";
import { baseUrl } from "./settings/api.js";
import { getSavedFavorites } from "./components/utils/favFunctions.js";
const itemsContainer = document.querySelector(".results");

export async function getArticles() {
  const response = await fetch(baseUrl);
  const articles = await response.json();

  return articles;
}
export async function getItems(articles) {
  try {
    itemsContainer.innerHTML = "";

    if (!articles) {
      articles = await getArticles();
    }

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
