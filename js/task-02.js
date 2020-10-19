const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];
  
let ul = document.body.querySelector("ul#ingredients");
  
  for (let i=0; i<ingredients.length; i++){
    let li = document.createElement("li");
    ul.append(li);
    li.textContent =ingredients[i];
  }