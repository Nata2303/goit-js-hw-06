const inputRef = document.querySelector("#validation-input");

const onInputChange = () => {
  const inputLength = inputRef.value.length;
  const dataLength = inputRef.getAttribute("data-length");

  if (inputLength === Number(dataLength)) {
    inputRef.classList.add("valid");
    inputRef.classList.remove("invalid");
  } else {
    inputRef.classList.add("invalid");
    inputRef.classList.remove("valid");
  }
};

inputRef.addEventListener("blur", onInputChange);
