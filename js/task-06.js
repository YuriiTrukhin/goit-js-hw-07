const inputItem = document.body.querySelector("input#validation-input");
const maxLength = inputItem.getAttribute("data-length")


inputItem.addEventListener("blur",()=>{
    
if(inputItem.value.length<=maxLength){
    inputItem.classList.remove("invalid")
    inputItem.classList.add("valid")
} 
if(inputItem.value.length===0){
    inputItem.classList.remove("valid")
    inputItem.classList.remove("invalid")    
}
if (inputItem.value.length>maxLength&&inputItem.value.length!==0){
    inputItem.classList.remove("valid")
    inputItem.classList.add("invalid")
}
})  
