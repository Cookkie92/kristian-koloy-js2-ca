//this function will toggle a item in and out of an array stored in localstorage
import { getSavedFavorites } from "./utils/favFunctions.js";
import { saveFavorites } from "./utils/favFunctions.js";
export function handleClick() {
  event.target.classList.toggle("fa");
  event.target.classList.toggle("far");

  const id = this.dataset.id;
  const title = this.dataset.title;
  const author = this.dataset.author;
  const summary = this.dataset.summary;

  let savedFavs = getSavedFavorites();

  const articleExist = savedFavs.find(function (fav) {
    return fav.id === id;
  });

  console.log("articleExist", articleExist);

  if (articleExist) {
    savedFavs = savedFavs.filter((fav) => fav.id !== id);
    return saveFavorites(savedFavs);
  }
  const article = {
    author: author,
    title: title,
    summary: summary,
    id: id,
  };
  savedFavs.push(article);
  saveFavorites(savedFavs);
}
