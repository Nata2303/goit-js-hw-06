const categoriesList = document.querySelectorAll(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesList.forEach(e => {
  console.log(`Category:${e.firstElementChild.textContent}`)
console.log(`Element:${e.lastElementChild.children.length}`);
});
