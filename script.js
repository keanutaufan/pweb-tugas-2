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