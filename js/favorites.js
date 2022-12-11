import { getSavedFavorites } from "./components/utils/favFunctions.js";

const itemsContainer = document.querySelector(".results");
const clearButton = document.querySelector(".clear-favs");

export function populateFavs() {
  const savedFavs = getSavedFavorites();
  itemsContainer.innerHTML = "";
  if (savedFavs.length === 0) {
    itemsContainer.innerHTML = "No favorites";
  }

  savedFavs.forEach((favorite) => {
    itemsContainer.innerHTML += `
          <div class="results">
          <h4>${favorite.title}</h4>
          <i class="fa fa-heart"></i>
          
          </div>
          
          `;
  });
}
populateFavs();
clearButton.addEventListener("click", function clearFavorites() {
  localStorage.removeItem("favorites");
  populateFavs();
});
