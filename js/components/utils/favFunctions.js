// import { populateFavs } from "../../favorites";
export function getSavedFavorites() {
  const favs = localStorage.getItem("favorites");

  if (favs === null) {
    return [];
  } else {
    return JSON.parse(favs);
  }
}

export function saveFavorites(favs) {
  localStorage.setItem("favorites", JSON.stringify(favs));
}

// export function clearFavorites() {
//   localStorage.removeItem("favorites");
//   populateFavs();
// }
