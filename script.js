function clearDisplay() {
    let display = document.getElementById("display");
    display.value = "";
}

function addValue(x) {
    let display = document.getElementById("display");
    if (display.value === "ERROR") {
        display.value = "";
    }
    display.value += x;
}

function calculate() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    }
    catch(e) {
        display.value = "ERROR";
    }
}

function calcTwo(x) {
    const a = parseFloat(document.getElementById("num1").value);
    const b = parseFloat(document.getElementById("num2").value);
    const display = document.getElementById("result");
    let result;

    try {
        if (x === "add") {
            result = a + b;
        }
        else if (x === "sub") {
            result = a - b;
        }
        else if (x === "mul") {
            result = a * b;
        }
        else if (x === "div") {
            result = a / b;
        }
        else {
            result = "ERROR";
        }
    }
    catch(e) {
        result = "ERROR";        
    }

    display.innerText = result;
}