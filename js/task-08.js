const controls = document.querySelector("div#controls");
const createBtn =document.querySelector('div#controls button[data-action="render"]');
const destroyBtn =document.querySelector('div#controls button[data-action="destroy"]');
const box = document.getElementById("boxes");



function getAmount() {
  let amount = +document.querySelector("#controls input").value;
  createBoxes(amount);
}

function createBoxes(amount) {
  let basicSize = 30;
  var fragment = document.createDocumentFragment();
  for (let i = 0; i < amount; i++) {
    let size = basicSize + i * 10;
    let div = document.createElement("div");
    div.style.cssText = `width: ${size}px; height: ${size}px; background-color: rgba( ${random()} , ${random()} , ${random()} )`;
    fragment.appendChild(div);
  }
  boxes.appendChild(fragment);
}

// input.addEventListener("input",()=> {
// let div = document.createElement("div");
// createBtn.addEventListener("click",()=>{
//     box.append(div)
//     let a = Math.floor(Math.random()*100)
//   for (let i = 0; i < amount; i++) {
//     let size = basicSize + i * 10;    
//     div.style.background =`rgb(${a+3},${a-3},${a+5})`;
// });  
// })
// destroyBtn.addEventListener("click",()=>box.innerHTML = '')



// const createBoxes=function(amount){
//     console.log(amount);   
//     for (let i=0; i<amount; i++){
//         let div = document.createElement("div");
//         createBtn.addEventListener("click",()=>box.append(div))
//     }
// }
// console.log(createBoxes());
