const counterValue = document.querySelector("#value");
const incrementBtn = document.querySelector('[data-action="increment"]');
const decrementBtn = document.querySelector('[data-action="decrement"]');

let counter = 0;

incrementBtn.addEventListener("click", () => {
  counter += 1;
  counterValue.textContent = counter;
});

decrementBtn.addEventListener("click", () => {
  counter -= 1;
  counterValue.textContent = counter;
});
