let rand = (Math.floor(Math.random() * 100) + 1);
console.log(`${rand}`)
let i = 10;

function randod() {


Return.innerHTML = `Угадать`
let inr = rand;
let h = +rnput.value;
numbers.innerHTML = `${i}`
if (h > inr){
      number.innerHTML = `${h} больше загаданного`
      i--
      numbers.innerHTML = `${i}`
}

if (h < inr){
    number.innerHTML = `${h} меньше загаданного`
    i--
    numbers.innerHTML = `${i}`
}

if (h == inr){
    number.innerHTML = `Вы угадали!!!`
    Winner()
    }

if (i == 0){
    number.innerHTML = `вы Проиграли`
    GameOver()
}

}

function GameOver() {
      i = 11;
      let rand = (Math.floor(Math.random() * 100) + 1);
      Return.innerHTML = `Начать заново`
      
    }
 function Winner() {
    i = 10;
    let rand = (Math.floor(Math.random() * 100) + 1);
    Return.innerHTML = `Начать заново`
 }