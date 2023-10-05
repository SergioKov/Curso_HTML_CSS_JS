/*
ELEMENTOS DOM
CONSTANTES
VARIABLES
FUNCIONES
ACCIONES
EVENTOS
*/

const boxElement = document.querySelector('.box');

const wr_btns = document.querySelector('.wr_btns');

const div_start = document.getElementById('start');
const div_stop = document.getElementById('stop');

const allBtns = document.querySelectorAll('button');

allBtns.forEach(el => {
    el.classList.add(el.dataset.color);
});

//de Sergio
const handleClick = ev => {
    console.log(ev.target);
    console.log(ev.target.color);
    boxElement.removeAttribute('class');
    boxElement.classList.add('box');
    boxElement.classList.add(ev.target.dataset.color);
};

//de Adrian
const handleClick2 = ev => {
    console.log(ev.target);

    const { color } = ev.target.dataset;
    if (boxElement.classList[1]) {
        boxElement.classList.replace(boxElement.classList[1], color);
    } else {
        boxElement.classList.add(color);
    }
};

//wr_btns.addEventListener('click', handleClick);
wr_btns.addEventListener('click', handleClick2);

let index = 0;
let stop = false;

const hacerClick = () => {
    if (stop == true) return;
    setTimeout(() => {
        wr_btns.children[index].click();
        index++;
        if (index == wr_btns.children.length) index = 0;
        hacerClick();
    }, 1000);
};
//hacerClick();

div_start.addEventListener('click', () => {
    stop = false;
    hacerClick();
});
div_stop.addEventListener('click', () => {
    stop = true;
});
