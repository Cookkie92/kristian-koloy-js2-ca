import { getItems } from "../index.js";
import { getArticles } from "../index.js";

const search = document.querySelector(".search");

search.onkeyup = async function () {
  const serachValue = event.target.value.trim().toLowerCase();
  const articles = await getArticles();

  const filteredArticles = articles.filter(function (article) {
    if (article.title.toLowerCase().includes(serachValue)) {
      return true;
    }
  });

  return getItems(filteredArticles);
};
