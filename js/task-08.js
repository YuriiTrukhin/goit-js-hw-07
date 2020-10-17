const controls = document.querySelector("div#controls");
const input = document.querySelector("div>input");
const createBtn =document.querySelector('div#controls button[data-action="render"]');
const destroyBtn =document.querySelector('div#controls button[data-action="destroy"]');
const box = document.getElementById("boxes");
let acc =0;

input.addEventListener("input",()=>input.value)


input.addEventListener("input",()=> {
let div = document.createElement("div");
createBtn.addEventListener("click",()=>{
    box.append(div)
    let a = Math.floor(Math.random()*250)
    
    let c=30
    let b=30
    if(input.value<2){
    div.style.width ="30px";
    div.style.height ="30px";
    } else {
    div.style.width +=`${c}px`;
    div.style.height +=`${b}px`;        
    }
    div.style.background =`rgb(${a+3},${a-3},${a+5})`;
});  
})
destroyBtn.addEventListener("click",()=>box.innerHTML = '')



// const createBoxes=function(amount){
//     console.log(amount);   
//     for (let i=0; i<amount; i++){
//         let div = document.createElement("div");
//         createBtn.addEventListener("click",()=>box.append(div))
//     }
// }
// console.log(createBoxes());
