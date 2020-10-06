const number1 = document.querySelector("#number1");
const number2 = document.querySelector("#number2");
const button = document.querySelector("#button");
const result = document.querySelector("#result");

button.addEventListener("click", () => {
  let no1 = parseInt(number1.textContent);
  let no2 = parseInt(number2.textContent);
  result.innerHTML = no1 + no2;
});
