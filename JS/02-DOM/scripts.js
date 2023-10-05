/*
ELEMENTOS DOM
CONSTANTES
VARIABLES
FUNCIONES
ACCIONES
EVENTOS
*/

const h3 = document.getElementById('start-point');

console.log(
    `Soy un h3 con el id '${h3.id}' y la clase '${h3.className}'. mi padre es un '${h3.parentElement.tagName}' con class '${h3.parentElement.className}' mi hermano es un '${h3.previousElementSibling.tagName}' con el id '${h3.previousElementSibling.id}' la clase '${h3.previousElementSibling.className}' y el texto '${h3.previousElementSibling.textContent}'`
);

const nav = document.createElement('nav');
nav.innerHTML = `
                <ul>
                    <li class="list-item"><a href="#">Inicio</a></li>
                    <li class="list-item"><a href="#">Acerca de</a></li>
                    <li class="list-item"><a href="#">Contacto</a></li>
                </ul>
                <script>alert('es una mala manera de escribir código')</script>
`;
//h3.insertAdjacentElement('beforebegin', nav);
//h3.parentElement.children[1].insertAdjacentElement('beforebegin', nav);

const undiv = document.createElement('div');

const buttonElement = document.getElementById('button');

const handleClick = (event, name) => {
    console.log(event);
    console.log(name + ' ha hecho click');
};
//buttonElement.addEventListener('click', handleClick);
buttonElement.addEventListener('click', (event, name) => {
    handleClick(event, 'Sergio');
});

const menuElement = document.getElementById('menu');
const handleClick2 = ev => {
    console.log(ev.target);
    console.log(ev.target.innerText);
};

menuElement.addEventListener('click', ev => {
    handleClick2(ev);
});

/*
- Crea un h1 con el texto "Soy un título otra vez", al ponerte con el ratón encima del h1, deberá cambiar al texto a "Quita de encima!!!" y al quitarte, deberá volver a poner "Soy un título"
*/
const h1 = document.createElement('h1');
document.body.append(h1);

const mostrarAlgo = ev => {
    ev.target.textContent = 'Quita de encima!!!';
    console.log(ev.target);
};
const mostrarAlgo2 = ev => {
    ev.target.textContent = 'Soy un título otra vez';
    console.log(ev);
};

h1.textContent = 'Soy un título para pruebas';
h1.addEventListener('mouseover', ev => {
    mostrarAlgo(ev);
});
h1.addEventListener('mouseleave', ev => {
    mostrarAlgo2(ev);
});

//-------------------------------
/*
- Crea un p con el texto "esperando entrada de teclado" al pulsar cualquier tecla deberá poner qué tecla has pulsado.
*/
const p = document.createElement('p');
p.id = 'p_text';
p.textContent = 'esperando entrada de teclado';
document.body.append(p);

const mostrarTecla = ev => {
    //p.innerHTML = ev.key;
    p.textContent = ev.key;
    //document.getElementById('p_text').textContent = ev.key;
    console.log(ev.key);
};

window.addEventListener('keyup', ev => {
    mostrarTecla(ev);
});

//-----------------------------
/*
- Crea un array con 5 palabras. Añade un h2 a tu HTML y ponle un id. Añade dos botones con el texto previus y next respectívamente. Haz que los botones cambien el texto del h2 con las palabras del array, cuando llegues a la última volverás a la primera si pulsas next y cuando estés en la primera podrás volver a la última dandole a previous.
*/
const arr = ['manzana', 'pera', 'banana', 'cereza', 'piña', 'David', 'Sergio', 'Carlos'];

const h2 = document.createElement('h2');
h2.id = 'title2';
h2.textContent = arr[0];

const h4 = document.createElement('h4');
h4.textContent = arr;

let index = 0;

const goNext = ev => {
    //console.log(ev);
    /*
    let pos = arr.indexOf(h2.textContent);
    if (pos < arr.length - 1) {
        h2.textContent = arr[pos + 1];
    } else {
        h2.textContent = arr[0];
    }
    */

    index++;
    if (index > arr.length - 1) index = 0;
    h2.textContent = arr[index];
    console.log(h2.textContent);
};

const goPrev = ev => {
    /*
    let pos = arr.indexOf(h2.textContent);
    if (pos > 0) {
        h2.textContent = arr[pos - 1];
    } else {
        h2.textContent = arr[arr.length - 1];
    }
    */

    if (index == 0) index = arr.length - 1;
    h2.textContent = arr[index];
    console.log(h2.textContent);
    index--;
};

const b_next = document.createElement('button');
b_next.id = 'b_next';
b_next.textContent = 'Next';
b_next.addEventListener('click', ev => {
    goNext(ev);
});

const b_prev = document.createElement('button');
b_prev.id = 'b_prev';
b_prev.textContent = 'Prev';
b_prev.addEventListener('click', ev => {
    goPrev(ev);
});

document.body.append(h2, h4, b_prev, b_next);

//-----------------------------------//
const fetchData = async url => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
};

//fetchData('');

//----------------------------------
const originalNames = ['Laura', 'Ana', 'Carlos'];
console.log('originalNames: ' + originalNames);

const sortNames = names => {
    // con 'names.sort' se modifica el array original
    /*const sortedNames = names.sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });
    */

    // con '[...names].sort' NO se modifica el array original ya que se hace copia
    const sortedNames = [...names].sort((a, b) => {
        if (a < b) return -1;
        if (a > b) return 1;
        return 0;
    });

    console.log('sortedNames: ' + sortedNames);
};
sortNames(originalNames);
console.log('originalNames: ' + originalNames);

//---------------

const boxElement = document.querySelector('.box');
