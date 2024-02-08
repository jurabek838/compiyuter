










const btnEl = document.querySelector(".btn")
const textEl = document.querySelector(".respons")

let number1 = prompt("birinchi raqamdi kiriting")
let number2 = prompt("ikkinchi raqamdi kiriting")
let number3 = prompt("qiymat raqamdi kiriting") 



btnEl.addEventListener('click', () => {
    textEl.innerHTML = eval(number1 + number3 + number2);
})
