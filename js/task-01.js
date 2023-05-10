const categoriesList = document.querySelectorALL(".item");

console.log(`Number of categories: ${categoriesList.length}`);

categoriesItems.forEach(e => {
  console.log(`Category:${e.firstElementChild.textContent}`)
console.log(`Element:${e.laststElementChild.querySelectorAll(`li`).length}`) 
});
