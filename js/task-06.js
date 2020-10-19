const inputItem = document.body.querySelector("input#validation-input");
const maxLength = Number(inputItem.getAttribute("data-length"));

let fn = function () {
if (inputItem.value.length!==maxLength){
    inputItem.classList.remove("valid");
    inputItem.classList.add("invalid");
}    
if(inputItem.value.length===maxLength){
    inputItem.classList.remove("invalid");
    inputItem.classList.add("valid");
} 
if(inputItem.value.length===0){
    inputItem.classList.remove("valid");
    inputItem.classList.remove("invalid");    
}
}  
inputItem.addEventListener("blur", fn);