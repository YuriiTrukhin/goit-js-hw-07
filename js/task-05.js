
const input = document.body.querySelector("input#name-input")
const span = document.body.querySelector("span#name-output")

input.oninput = function () {
    if (input.value === "") {
        span.textContent = "незнакомец";
    } else {
        span.textContent = `${input.value}`;
    }
}