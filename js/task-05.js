const input = document.querySelector("#name-input");
const output = document.querySelector("#name-output");

input.addEventListener("input", (event) => {
  const value = event.target.value.trim();
  output.textContent = value ? value : "Anonymous";
});
