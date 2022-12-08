//main page of my javascript..
//here i will have the framework of all my functions inside a async fetch function

async function getItems() {
  try {
    const response = await fetch(url);
    const items = await response.json();

    console.log(items);

    //functions will go here
  } catch (error) {
    console.log(error);
  }
}

getItems();
