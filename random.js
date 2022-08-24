
function randod() {
let rand = (Math.floor(Math.random() * 100) + 1);
let inr = rand;
let h = +rnput.value;

for (let i = 1; i <=10; i++){
    numbers.innerHTML = `${i}`;
if (h == inr){
    number.innerHTML = `ваш Ответ ${h} правильный`;
    break
}else if (h > inr){
    number.innerHTML = `ваш Ответ ${h} больше`;
}else if (h < inr){
    number.innerHTML = `ваш Ответ ${h} меньше`;
}
}
}

