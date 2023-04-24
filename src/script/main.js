const tbtn1 = document.getElementById("t-btn-1");
const tbtn2 = document.getElementById("t-btn-2");
const tbtn3 = document.getElementById("t-btn-3");
const tbtn4 = document.getElementById("t-btn-4");
const tbtn5 = document.getElementById("t-btn-5");
const tbtn6 = document.getElementById("t-btn-6");
const tbtn7 = document.getElementById("t-btn-7");
const tbtn8 = document.getElementById("t-btn-8");
const tbtn9 = document.getElementById("t-btn-9");
const tbtn0 = document.getElementById("t-btn-0");
const pantalla = document.getElementById("pantalla");

const suma = document.getElementById("o-btn-1");
const res = document.getElementById("o-btn-2");
const div = document.getElementById("o-btn-3");
const prod = document.getElementById("o-btn-4");

const igual = document.getElementById("i-btn-1");
const dlt = document.getElementById("i-btn-2");

function sendNum(numero){
    if (pantalla.innerText.length < 114 && pantalla.innerText != 0){
        pantalla.innerHTML += numero;
    }else if( pantalla.innerText.length <114 && pantalla.innerText == 0){
        pantalla.innerText = numero;
    }else{
        alert("numeros a operar demaciado alto");
    }
}


igual.addEventListener('click', ()=>{
    pantalla.innerHTML = eval(pantalla.innerText)
})

dlt.addEventListener('click', ()=>{
    pantalla.innerText = "0"
})

suma.addEventListener('click', ()=>{
    sendNum("+");
})
res.addEventListener('click', ()=>{
    sendNum("-");
})
div.addEventListener('click', ()=>{
    sendNum("/");
})
prod.addEventListener('click', ()=>{
    sendNum("*");
})


tbtn1.addEventListener('click', ()=>{
    sendNum(1)
})
tbtn2.addEventListener('click', ()=>{
    sendNum(2)
})
tbtn3.addEventListener('click', ()=>{
    sendNum(3)
})
tbtn4.addEventListener('click', ()=>{
    sendNum(4)
})
tbtn5.addEventListener('click', ()=>{
    sendNum(5)
})
tbtn6.addEventListener('click', ()=>{
    sendNum(6)
})
tbtn7.addEventListener('click', ()=>{
    sendNum(7)
})
tbtn8.addEventListener('click', ()=>{
    sendNum(8)
})
tbtn9.addEventListener('click', ()=>{
    sendNum(9)
})
tbtn0.addEventListener('click', ()=>{
    sendNum(0)
})