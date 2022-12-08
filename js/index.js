//main page of my javascript..
//here i will have the framework of all my functions inside a async fetch function
import { baseUrl } from "./settings/api.js";
async function getItems() {
  try {
    const response = await fetch(baseUrl);
    const items = await response.json();

    console.log(items);

    //functions will go here
  } catch (error) {
    console.log(error);
  }
}

getItems();
