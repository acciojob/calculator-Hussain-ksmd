//your code here
const input = document.getElementById("input");
const buttons = document.querySelectorAll("button");

let operand1 = null;
let operand2 = null;
let operator = null;
let result = null;

for (let button of buttons) {
  button.addEventListener("click", function() {
    const value = this.innerText;
    if (value === "C") {
      input.value = "0";
      operand1 = null;
      operand2 = null;
      operator = null;
      result = null;
    } else if (value === "+" || value === "-" || value === "*" || value === "/") {
      operator = value;
      operand1 = input.value;
      input.value = "0";
    } else if (value === ".") {
      if (!input.value.includes(".")) {
        input.value += ".";
      }
    } else if (value === "=") {
      operand2 = input.value;
      if (operand1 !== null && operand2 !== null && operator !== null) {
        result = eval(operand1 + operator + operand2);
        if (result === Infinity) {
          input.value = "Cannot divide by 0";
        } else if (isNaN(result)) {
          input.value = "0/0 is undefined";
        } else {
          input.value = result;
        }
        operand1 = null;
        operand2 = null;
        operator = null;
        result = null;
      }
    } else {
      if (input.value === "0") {
        input.value = value;
      } else {
        input.value += value;
      }
    }
  });
}
