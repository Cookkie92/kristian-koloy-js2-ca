//fetch array of items stored in localstorage and display them or display a message that there are not items
// make a clear all button that clears out localstorage or just a specific key in localstorage
//and reloads the display(dont reload the page, just redraw html)
import { getSavedFavorites } from "./components/utils/favFunctions.js";
// import { clearFavorites } from "./components/utils/favFunctions.js";

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
