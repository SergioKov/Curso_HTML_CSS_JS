const sumNumbers = (a, b) => a + b;

let res = sumNumbers(5, 8);
//console.log('res: ' + res);

const var_sumNumbers = 33;

const say2 = name => console.log('say2: ' + name);
//say2('Sergio2');

const resultSum = sumNumbers(2, 3);
//console.log('resultSum: ' + resultSum);

//-------------------------------------------------//
//# Ejercicios funciones con parámetros
//1
const sayHello = name => {
    console.log('1) Hola ' + name);
};
sayHello('Sergio');

//2
const calculateSquareArea = num => {
    return num * num;
};
console.log(`2) El área de de un cuadrado de ${5} m es ${calculateSquareArea(5)} m cuadrados.`);

//3
const calculateTriangleArea = (base, altura) => {
    return (base * altura) / 2;
};
console.log(
    `3) El área de de un triángulo con base ${8} y altura ${7} es ${calculateTriangleArea(8, 7)} metros cuadrados.`
);

//4
const calculateCircleArea = radio => {
    return 3.1416 * radio * radio;
};
console.log(`4) El área de de un circulo con radio ${3} es ${calculateCircleArea(3)} metros cuadrados.`);

//5
const celsiusToFahrenheit = celsius => {
    const res = celsius * 1.8 + 32;
    return res;
};
console.log(`5) Los 34 grados celsius convertidos en fahrenheit es: ${celsiusToFahrenheit(34)} `);

//6
const fahrenheitToCelsius = fahrenheit => {
    const res = ((fahrenheit - 32) / 1.8).toFixed(2);
    return res;
};
console.log(`6) Los grados fahrenheit 80 convertidos en celsius es: ${fahrenheitToCelsius(80)}`);

//7
const totalPrice = precio => {
    const res = precio * 1.21;
    return res;
};
console.log(`7) El precio de 100 € con iva es: ${totalPrice(100)} €`);

//8
const writeMessage = (namePerson, material, size, note) => {
    return console.log(`8) ${namePerson} ha pedido una caja de ${material} de tamaño ${size}. ${note}.`);
};
writeMessage('Sergio', 'manzanas', 'extra grande', 'Mi lista de compras');

//
//
//
console.log('');
//# Ejercicios funciones con return
const mediaEntre3Numeros = (n1, n2, n3) => {
    const res = (n1 + n2 + n3) / 3;
    return res;
};
console.log(`1) la media entre esos 3 números (5,7,9) es: ${mediaEntre3Numeros(5, 7, 9)} `);

//condicionales
const holaEdad = (nombre, edad) => {
    let estadoEdad;
    if (edad < 18) {
        estadoEdad = 'menor';
    } else {
        estadoEdad = 'mayor';
    }
    return console.log(` Soy ${nombre}. Soy  ${estadoEdad} de edad .`);
};
holaEdad('Sergio', 45);

const compararNumeros = (n1, n2) => {
    let res;
    if (n1 > n2) {
        res = n1;
    } else {
        res = n2;
    }
    return console.log(` El numero mayor entre ${n1} y ${n2} es  ${res}`);
};
compararNumeros(5, 7);

const esDivisible = n => {
    let res;

    if (n % 3 === 0 && n % 5 === 0) {
        res = ` El numero ${n} Es divisible por 3 y por 5`;
    } else if (n % 3 === 0) {
        res = ` El numero ${n} Es divisible por 3 `;
    } else if (n % 5 === 0) {
        res = ` El numero ${n} Es divisible por 5 `;
    } else {
        res = n;
    }
    return console.log(res);
};
esDivisible(15);

const parImpar = n => {
    if (n === 0) return 'El número no es válido';

    if (n % 2 === 0) {
        return ` El numero ${n} Es un número par`;
    }
    return ` El numero ${n} Es un número impar`;
};
console.log(parImpar(1));

let esMayor;
if (2 > 0) {
    esMayor = true;
}
console.log(esMayor);

const div = document.createElement('div');
div.innerHTML = '';

const anio = a => {
    if (!a) return false;

    if ((a % 4 === 0 && a % 100 !== 0) || a % 400 === 0) {
        return 'bisiesto';
    } else {
        return 'no bisiesto';
    }
};
console.log('el anio 2000 es: ' + anio(2000));

const sumStrings = (v1, v2) => {
    if (typeof v1 === 'string') v1 = Number(v1);
    if (typeof v2 === 'string') v2 = Number(v2);

    return v1 + v2;
};
console.log('suma de 2 valores es: ' + sumStrings('3', 2));

const miPalabra = palabra => {
    if (palabra.length > 5) {
        return palabra.toUpperCase();
    } else {
        return palabra.toLowerCase();
    }
};
console.log(miPalabra('aÑo'));

const miPalabra2 = palabra => {
    return palabra.length > 5 ? palabra.toUpperCase() : palabra.toLowerCase();
};
console.log(miPalabra2('aaaaaaaaaaaaÑo'));

const conjugar = (v1, v2) => {
    let conj1, conj2, tambien;

    if (v1.endsWith('ar')) {
        conj1 = 'primera';
    } else if (v1.endsWith('er')) {
        conj1 = 'segunda';
    } else if (v1.endsWith('ir')) {
        conj1 = 'tercera';
    }

    if (v2.endsWith('ar')) {
        conj2 = 'primera';
    } else if (v2.endsWith('er')) {
        conj2 = 'segunda';
    } else if (v2.endsWith('ir')) {
        conj2 = 'tercera';
    }

    tambien = conj1 === conj2 ? ' también' : '';

    return `1) El verbo ${v1} es de la ${conj1} conjugación y el verbo ${v2} es de la ${conj2} conjugación${tambien}.`;
};
console.log(conjugar('andar', 'correr'));
console.log(conjugar('vivir', 'existir'));

const checkVerb = verb => {
    if (verb.endsWith('ar')) {
        return 'primera';
    } else if (verb.endsWith('er')) {
        return 'segunda';
    } else if (verb.endsWith('ir')) {
        return 'tercera';
    }
};

const conjugar2 = (v1, v2, fn) => {
    let conj1, conj2, tambien;

    conj1 = checkVerb(v1);
    conj2 = checkVerb(v2);

    tambien = conj1 === conj2 ? ' también' : '';

    return `2) El verbo ${v1} es de la ${conj1} conjugación y el verbo ${v2} es de la ${conj2} conjugación${tambien}.`;
};
console.log(conjugar2('andar', 'correr', checkVerb));
console.log(conjugar2('vivir', 'existir'));

const generateWord = (w1, w2, w3) => {
    return w1.substring(0, 2) + w2.substring(0, 2) + w3.substring(0, 2);
};
console.log(generateWord('hola', 'Adios', 'Mano'));

function myRandom(min, max) {
    return Math.ceil(min + Math.random() * (max - min));
}

const generateWord2 = (w1, w2, w3) => {
    let rand1 = w1.charAt(Math.floor(Math.random() * w1.length)) + w1.charAt(Math.floor(Math.random() * w1.length));
    let rand2 = w1.charAt(Math.floor(Math.random() * w2.length)) + w1.charAt(Math.floor(Math.random() * w2.length));
    let rand3 = w1.charAt(Math.floor(Math.random() * w2.length)) + w1.charAt(Math.floor(Math.random() * w3.length));

    return rand1 + rand2 + rand3;
};
console.log(generateWord2('hola', 'Adios', 'Mano'));
