
const input = document.body.querySelector("#name-input")
const span = document.body.querySelector("#name-output")

input.addEventListener("input",() =>{
    if (input.value === "") {
        span.textContent = "незнакомец";
    } else {
        span.textContent = `${input.value}`;
    }
})