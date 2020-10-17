const inputVal = document.querySelector("input#font-size-control");
const text = document.querySelector("span#text");

inputVal.addEventListener("input",()=>{    
    text.style=`font-size:${inputVal.value}px`;    
})

