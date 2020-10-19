const createBtn =document.querySelector('#controls button[data-action="render"]');
const destroyBtn =document.querySelector('#controls button[data-action="destroy"]');
const box = document.getElementById("boxes");

createBtn.addEventListener("click",getAmount);
destroyBtn.addEventListener("click",()=>box.innerHTML = '')

function getAmount() {
  let amount = document.querySelector("#controls  input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  
  let div;
  for (let i = 0; i < amount; i++) {
    div = document.createElement("div");
    let size = basicSize + i * 10;
    let color = Math.floor(Math.random() * 256);
    let colorTwo = Math.floor(Math.random() * 256);
    let colorThree = Math.floor(Math.random() * 256);
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${color} , ${colorTwo} , ${colorThree} )`;
    box.append(div);
  } 
}