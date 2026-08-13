const display = document.getElementById("screen");
display.textContent = "0";

function appendtodisplay(section) {
    if (display.textContent === "0") {
        display.textContent = section;
    } else {
        display.textContent += section;
    }
}

function clearDisplay() {
    display.textContent = "0";
}

function backspace() {
    display.textContent = display.textContent.slice(0, -1);
    if (display.textContent === "") {
        display.textContent = "0";
    }
}

function calculate() {
    try {
        display.textContent = eval(display.textContent);
    } catch {
        display.textContent = "Error";
    }
}