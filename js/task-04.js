// Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.

// Создай переменную counterValue в которой будет хранится текущее значение счетчика.
// Создай функции increment и decrement для увеличения и уменьшения значения счетчика
// Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса



const container =document.body.querySelector("div#counter");
const incButton = document.body.querySelector('div#counter button[data-action="increment"]');
const decButton = document.body.querySelector('div#counter button[data-action="decrement"]');
let mainValue =document.body.querySelector("span#value")
let counterValue = 0;
const increment = (a) => a+=1;
const decrement = (a) => a-=1;
container.addEventListener("click",e=>{
    if (e.target === incButton){
      counterValue =  increment(counterValue);
      
    } else if (e.target === decButton){        
        counterValue =  decrement(counterValue);
    } 
    mainValue.textContent= `${counterValue}`
})

