const boxes = document.querySelectorAll(".box");

boxes.forEach(box => {
    box.addEventListener("click", () => {

        // Remove active from all boxes
        boxes.forEach(item => {
            item.classList.remove("active");
        });

        // Add active to selected box
        box.classList.add("active");
    });
});


document.querySelectorAll(".box").forEach(card => {
    card.addEventListener("click", () => {
        card.querySelector("input").focus();
    });
});


const input = document.getElementById("input");
const output = document.getElementById("output");

const swap = document.getElementById("center");
const from = document.getElementById("from");
const to = document.getElementById("to");

const C = document.getElementById("C");
const F = document.getElementById("F");

let isCelsius = true;


// CONVERSION
function convert() {

    let value = Number(input.value);

    if (input.value === "") {
        output.value = "";
        return;
    }

    if (isCelsius) {

        // Celsius → Fahrenheit
        let fahrenheit = (value * 9 / 5) + 32;
        output.value = fahrenheit.toFixed(2);

    } else {

        // Fahrenheit → Celsius
        let celsius = (value - 32) * 5 / 9;
        output.value = celsius.toFixed(2);
    }
}


// INPUT EVENT
input.addEventListener("input", convert);


// SWAP
swap.addEventListener("click", () => {

    isCelsius = !isCelsius;

    from.innerHTML = isCelsius
        ? "Celsius (<sup>o</sup>C)"
        : "Fahrenheit (<sup>o</sup>F)";

    to.innerHTML = isCelsius
        ? "Fahrenheit (<sup>o</sup>F)"
        : "Celsius (<sup>o</sup>C)";

    C.innerHTML = isCelsius
        ? "<sup>o</sup>C"
        : "<sup>o</sup>F";

    F.innerHTML = isCelsius
        ? "<sup>o</sup>F"
        : "<sup>o</sup>C";

    // Recalculate existing value
    convert();
});