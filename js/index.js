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

    console.log(items);
    for (let i = 0; i < items.length; i++) {
      itemsContainer.innerHTML += `
      <div class="results">
            <h1>${items[i].title}</h1>
           <p> ${items[i].author}</p>
            <p>${items[i].summary}</p>
            <button>
            </div>
        `;
    }
    //functions will go here
  } catch (error) {
    console.log(error);
  }
}

getItems();

//[0].title
