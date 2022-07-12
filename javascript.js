
const screen = document.querySelector('.first-line');
const result = document.querySelector('.second-line');
const zero = document.querySelector('#zero');
zero.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '0';
})

const one = document.querySelector('#one');
one.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '1';
})

const two = document.querySelector('#two');
two.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '2';
})

const three = document.querySelector('#three');
three.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '3';
})

const four = document.querySelector('#four');
four.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '4';
})

const five = document.querySelector('#five');
five.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '5';
})

const six = document.querySelector('#six');
six.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '6';
})

const seven = document.querySelector('#seven');
seven.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '7';
})

const eight = document.querySelector('#eight');
eight.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '8';
})

const nine = document.querySelector('#nine');
nine.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '9';
})

const clear =document.querySelector('#clear');
clear.addEventListener('click', ()=>{
    screen.innerHTML = "";
    result.innerHTML = "";
})

const mod =document.querySelector('#modular');
mod.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '%';
})

const divide =document.querySelector('#divide');
divide.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '/';
})

const mult =document.querySelector('#mult');
mult.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '*';
})

const power =document.querySelector('#power');
power.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '^';
})

const plus =document.querySelector('#plus');
plus.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '+';
})

const minus =document.querySelector('#minus');
minus.addEventListener('click', ()=>{
    screen.innerHTML = screen.innerHTML + '-';
})

const equal = document.querySelector('#equal');
equal.addEventListener('click', ()=>{
    let expression = screen.innerHTML;
    let calculation = new arithmeticExpression(expression);
    calculation.buildTree();
    result.innerHTML = calculation.evaluate(calculation.root);
})

