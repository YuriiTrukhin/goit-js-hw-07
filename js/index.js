
// let body = document.querySelector('body');
// body.style.backgroundColor="grey";

// let div = document.createElement('div');
// body.append(div)
// //============ add text
// div.textContent = "Some text";
// //======= change style
// div.style.fontSize = "55px";
// div.style.fontColor = "blue";
// //========= add style
// div.classList.add('container');


// 2) Дан список в штмл. Вставьте в него 3 лишки с текстом
// 3)Создайте 5 красных кругов 100х100 пикселей (стили подключаються в цсс)
// 4)Доавьте всем дивам нумерацию (в свойство текс контент записывается какой это по счёту див)
// 5)Создайте 3 картинки с котиками за одно операцию

// let ul = document.body.querySelector("ul")
// for (let i =0; i<3;i++){
// let li = document.createElement("li")
// ul.append(li)
// li.textContent ="Text"
// }

// let body =document.querySelector("body")


// for (let i =0; i<5;i++){
// let div = document.createElement("div");
// body.prepend(div)
// div.classList.add("circle")
// }
// const allDivs = document.querySelectorAll("div")
// allDivs.forEach((el,i)=>el.textContent= `${i+1}`)



// let arr =["https://klike.net/uploads/posts/2019-07/1564314090_3.jpg","https://glavcom.ua/img/article/6914/22_main.jpg","https://n1s2.hsmedia.ru/b3/38/b5/b338b527f7ebe61fd2cbf20a2a2ec5bf/680x374_21_af2b2f43f93f7e1c3ef9dedceabb0b3a@690x380_0x0a330c2a_13176846571580468282.jpeg"]
// for (let i =0; i<3;i++){
// let img = document.createElement("img")
// body.prepend(img)
// let b = arr[Math.floor(Math.random() * 3)];
// img.src = b

// const body = document.querySelector("body");
// body.addEventListener('click',(e)=> {
//     e.target.classList.toggle("green") ;
// })
// const check = document.querySelector(".check");
// console.log(check.checked);
// check.addEventListener("click", (e)=>{
//     if (e.target.checked){
//         body.style.background = "black";
//         body.style.color="white";
//     } else {
//         body.style.background = "white"
//         body.style.color="black";
//     }    
// })
// const headTitle = document.createElement("h1");
// headTitle.textContent = "xaxax"
// body.append(headTitle);

// console.log(headTitle);
// body.innerHTML = '<h1>Hello</h1>'
// body.insertAdjacentHTML('afterbegin','<h3>string</h3>')
//====================================задача
// const body = document.querySelector("body");
// const ball = document.querySelector(".circle")
// const arrowLeft = document.querySelector(".left")
// const arrowRight = document.querySelector(".right")
// const container = document.querySelector(".box")

// ball.style.transition = '0.7s'

// let x =0;
// container.addEventListener("click",(e)=>{
   
//     if (e.target === arrowLeft){
//         x -= 100;
//         ball.style.transform = `translateX(${x}px)`;
//     } else if (e.target === arrowRight){
//         x +=100;
//             ball.style.transform = `translateX(${x}px)`;
//     }
//     console.log(ball.style.transform);
// })
// ================================ two
// const body = document.querySelector("body");
// const form = document.querySelector(".form")
// const name = document.querySelector(".name");
// const surname = document.querySelector(".surname");
// const range = document.querySelector(".range")
 
// form.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     body.insertAdjacentHTML("beforeend",`<h1 style="font-size:${range.value}px; transition:.7s" class="output"> name:${name.value}\n last name:${surname.value}</h1>`)
    
// })

// range.addEventListener("input",(e)=>{
//     const output = document.querySelectorAll(".output")
//      output.forEach((el)=>{
//         output?el.style.fontSize = `${range.value}px`:"";})
    
// })
// =============================three
// const body = document.querySelector("body");
// const form = document.querySelector('.form');
// const age = document.querySelector('.age');
// const height = document.querySelector('.height');
// const weight = document.querySelector('.weight');

// form.addEventListener('submit', e=>{
//     e.preventDefault();
//     console.log(age.value);
//     let result = 10*weight.value + 6.25*height.value -5* age.value - 161;
//     body.insertAdjacentHTML("beforeend",`<p> Result:${result}</p>`)

// })

// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocation every 2000ms.');
//   }, 2000),
// );
// window.addEventListener(
//   'scroll',
//   _.debounce(() => {
//     console.log('Scroll event handler invocation every 500ms.');
//   }, 500),
// );

// import gallary from './gallary'


// let body = document.body;
// gallery.map(el=> {
//   body.innerHTML += `<img width="300" src="${el.src}" data-src="${el.data}"  class="imgs" id="${el.id}">`
// })
// window.onload = () => {
// const options = {
//   root: null,
//   rootMargin: '0px 0px 0px 0px',
//   threshold: 1,
// }
// const observer = new IntersectionObserver((entries) => {
//   // для каждой записи-целевого элемента
//   console.log(entries);
//   entries.forEach(entry => {
//       // если элемент является наблюдаемым
//       entry.isIntersecting ? entry.target.src = entry.target.dataset.src: '';
//       // entry.isIntersecting ? console.log(entry.target.src) : '';
//   })
// }, options);
// let images = document.querySelectorAll('.imgs');
// images.forEach(el=> {
//   observer.observe(el)
// })
// }
//========================== задача
//1) Дан ul, в нем несколько li. Под ul сделайте кнопку, по нажатию на которую в конец ul будет добавляться новый li с текстом 'пункт'.
// Сделайте так, чтобы при клике на каждый li, ему в конец добавлялся '!'.
// Это должно работать и для вновь добавленных li.
// Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).

// const ul = document.querySelector("ul")

// ul.insertAdjacentHTML("beforeend",`<button class="button" style="width:100px" ></button>`)
// const button = document.querySelector('button');
// button.addEventListener("click", () => {
//     let li = document.createElement("li")
//     li.textContent="пункт"
//     ul.append(li)
// })

// ul.addEventListener(("click"), (e) => {
//     e.target.nodeName === "LI" ? e.target.textContent += "!" : "";         
// })
//=========================задача 2
//2) Дан список с именами юзеров ul>li>p. Под таблицей сделайте форму form>input+input, с помощью которой можно будет добавить нового юзера в список.
//  Сделайте так, чтобы при клике на любой елемент появлялся prompt, с помощью которого можно изменить текст имени.
//  Задачу решите с помощью делегирования (то есть событие должно быть навешано на ul).
// const ul = document.querySelector("ul");
// const input = document.querySelector("input")

// input.addEventListener("blur",(e)=> {
//     let li = document.createElement("li")
//     li.textContent=input.value
//     ul.append(li)
// })
// ul.addEventListener(("click"), (e) => {
//     let result = prompt("введите текст")
//     console.log(e.target);
//     e.target.nodeName === "P" ? e.target.textContent=result: "";         
// })