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

    console.log();

    items.forEach((articles) => {
      itemsContainer.innerHTML += `
      <div class="result">
            <h1>${articles.title}</h1>
            <p> ${articles.author}</p>
            <p>${articles.summary}</p>
            <i class="toggle-x" data-id="${articles.id}" data-name="${articles.title}">\u00D7</i>
      </div>
      `;
    });

    //functions will go here
  } catch (error) {
    console.log(error);
  }
}

getItems();

function handleClick() {
  this.classList.toggle();
  this.classList.toggle();
}
