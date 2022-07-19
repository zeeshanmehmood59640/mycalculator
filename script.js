"using strict";
const buttons = document.querySelectorAll("button").length; // number of buttons in calculator
let display = document.querySelector(".display"); // displayed string on screen
display.textContent = "";
let digits = [
  "0",
  ".",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "+",
  "-",
  "*",
  "/",
];
for (let i = 0; i < buttons; i++) {
  document.querySelectorAll("button")[i].addEventListener("click", function () {
    if (this.textContent === "=") {
      calculate();
    } else if (this.textContent === "c" || this.textContent === "C") {
      display.textContent = "";
    } else if (this.textContent === "🔙") {
      removeData();
    } else if (digits.includes(this.textContent)) {
      display.textContent += this.textContent;
    }
  });
}
document.addEventListener("keydown", function (event) {
  if (event.key === "=" || event.key === "Enter") {
    calculate();
  } else if (event.key === "c" || event.key === "C") {
    display.textContent = "";
  } else if (event.key === "Backspace") {
    removeData();
  } else if (digits.includes(event.key)) {
    display.textContent += event.key;
  }
});
function calculate() {
  let typed = display.textContent;
  let temp = eval(typed);
  display.textContent = temp;
}
function removeData() {
  let input = display.textContent;
  display.textContent = input.slice(0, -1);
}
