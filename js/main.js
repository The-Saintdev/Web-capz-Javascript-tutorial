// DOM Document Object Model

// SELCTORS IN JAVASCRIPT

// document.querySelector('.hi');
// document.getElementById('wrapper');
// document.querySelectorAll('.hi');
// document.getElementsByClassName('');
// document.getElementsByTagName('');

// EXAMPLE
let preciousContainer = document.querySelector('#precious');
let emmabox1 = document.querySelector('#box1');
let hi = document.querySelectorAll('.hi');
const secondhi = document.getElementsByTagName('div');

//Eventlistners in Javascript
//e3xamples of Event listners

/*
1. Click event
2. doubleclick event
3. mouseover event
4. mouseenter event
5. mouseleave event
6. load event
7. change event
8. scroll event
9. mousemove event
10. input event
11. focus event 
12. blur event
*/


let box1 = document.querySelector('#box1')
let box2 = document.querySelector('#box2')
let box3 = document.querySelector('#box3')

//DOUBLE CLICK EVENT

box1.addEventListener('dblclick', function(){
    alert('Favour si learning javascript')
});

//CLICK EVENT
function AddAlert() {
    //window.alert('hello world)
}

setInterval(() => {
    AddAlert()
}, 5000);

box2.addEventListener('click', function(){
    box1.style.width = '80%';
    box2.style.width = '80%';
    box2.style.backgroungcolor = 'orange';
    box3.style.width = '60%';
})
//box1.addEventListner('click' function(){
// alert('favour is learning javascript')})

//MOUSE-ENTER EVENT
box1.addEventListener('mouseenter', function(){
    box3.style.backgroungcolor = 'green'
})

//MOUSE LEAVE EVENT
box1.addEventListener('mouseenter', function(){
    box3.style.backgroungcolor = 'fushia'
})