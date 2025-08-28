const buttonvalues = [
    "7", "8", "9", "/",
    "4", "5", "6", "*",
    "1", "2", "3", "-",
    "0", ".", "=", "+",
    "AC", "⌫"
];
const rightsymbols = ["/", "*", "-", "+", "."];
const topsymbols = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];


const display = document.getElementById("display");
const keys = document.getElementById("keys");

//A+B. A*B, A/B, A-B
let A = 0;
let operator = null;
let B = null;
 
for (let i=0; i < buttonvalues.length; i++) {
    const button = document.createElement("button");
    button.innerText = buttonvalues[i];
    button.classList.add("button");
    keys.appendChild(button);
    button.addEventListener('click', function() {
        handleInput(buttonvalues[i]);
    });
}
function handleInput(value) {
    if (topsymbols.includes(value)) {
        if (display.value === "0" || display.value === "") {
            display.value = value;
        } else {
            display.value += value;
        }
    } else if (rightsymbols.includes(value)) {
        const lastChar = display.value.slice(-1);
        if (!rightsymbols.includes(lastChar)) {
            display.value += value;
        }
    } else if (value === "=") {
        calculate();
    } else if (value === "AC") {
        display.value = "";
    } else if (value === "⌫") {
        display.value = display.value.slice(0, -1);
    }
}
function calculate() {
    const expression = display.value;
    try {
        const result = eval(expression);
        display.value = result;
    } catch (error) {
        display.value = "Error";
    }
}
