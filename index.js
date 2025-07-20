const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");

for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {

        var x = this.innerHTML;

        if (x === "AC") {
            DeleteAll();
        }
        else if (x === "Delete") {
            Deletelast();
        }
        else if (x === "=") {
            equal();
        }
        else {
            appendAll(x);
        }

    });
}

document.addEventListener("keydown", function (event) {
    var x = event.key;

    if (x === "Escape") {
        DeleteAll();
    }
    else if (x === "Backspace") {
        Deletelast();
    }
    else if (x === "Enter" || x === "=") {
        equal();
    }
    else if (x === "0" ||
        x === "1" || x === "2" || x === "3" ||x === "4" ||
        x === "5" ||x === "6" ||x === "7" ||x === "8" ||
        x === "9" || x === "+" ||x === "-" || x === "*" 
        || x === "/"|| x === "%") {
        appendAll(x);
    }
}
);


function DeleteAll() {
    display.value = ""
}
function Deletelast() {
    display.value = display.value.slice(0, -1);
}

function appendAll(input) {
    display.value += input;
}
function equal() {
    try {
        display.value = eval(display.value);
    }
    catch (error) {
        display.value = "Error";
    }

}