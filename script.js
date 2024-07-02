document.addEventListener("DOMContentLoaded", () => {
  const paragraph = document.getElementById("text");
  const changeStyleBtn = document.getElementById("changeStyleBtn");
  const list = document.getElementById("list");
  const addItemBtn = document.getElementById("addItemBtn");

  changeStyleBtn.addEventListener("click", () => {
    paragraph.style.color = "red";
    paragraph.style.fontSize = "20px";
  });

  addItemBtn.addEventListener("click", () => {
    const newItem = document.createElement("li");
    newItem.textContent = "New Item";
    list.appendChild(newItem);
  });
});

const number = 60;
console.log(typeof number);
const string = "String";
console.log(typeof string);
const boolean = true;
console.log(typeof boolean);
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function divide(a, b) {
  if (b === 0) {
    console.log("error:Division by 0");
    return null;
  }
  return a / b;
}

function multiply(a, b) {
  return a * b;
}

const num1 = 15;
const num2 = 5;

console.log("add", num1, "and", num2, "to", "be", "equal:", add(num1, num2));
console.log(
  "subtract",
  num2,
  "from",
  num1,
  "to",
  "be",
  "equal:",
  subtract(num2, num1)
);
console.log(
  "divide",
  num1,
  "by",
  num2,
  "to",
  "be",
  "equal:",
  divide(num1, num2)
);
console.log(
  "multiply",
  num1,
  "by",
  num2,
  "to",
  "be",
  "equal:",
  multiply(num1, num2)
);
