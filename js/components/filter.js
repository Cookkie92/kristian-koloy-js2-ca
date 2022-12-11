//create a function that can filter trhough the array of results on one of the properties
import { getItems } from "../index.js";
import { getArticles } from "../index.js";

const search = document.querySelector(".search");
// if (!article.title.includes(searchField)) return;

search.onkeyup = async function () {
  console.log(event);
  const serachValue = event.target.value.trim().toLowerCase();
  const articles = await getArticles();

  const filteredArticles = articles.filter(function (article) {
    if (article.title.toLowerCase().includes(serachValue)) {
      return true;
    }
  });

  return getItems(filteredArticles);
};
