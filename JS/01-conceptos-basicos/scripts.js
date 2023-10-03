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

const randomNumberArray = arr => {
    //if (arr.length !== 5) return false;
    let rand = Math.floor(Math.random() * arr.length);
    console.log(arr[rand]);

    /*for (let index = 0; index < arr.length; index++) {
        let rand = Math.floor(Math.random() * arr.length);
        console.log(arr[rand]);
    }
    */
};
randomNumberArray([0, 1, 2, 3, 4, 55, 99, 88, 66, 33, 11, 44, 77, 22, 55, 66, 987, 654, 321, 654, 444]);

//ARRAYS
/*
  - Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  - "La suma de todos los números es:[suma]"
  - "La media de todos los números es:[media]"
  - "El mayor es [mayor] y el menor es [menor]"
*/
const getMinMaxSumFromArray = arr => {
    let suma = arr[0] + arr[1] + arr[2];
    let media = (arr[0] + arr[1] + arr[2]) / 3;
    let mayor = Math.max(...arr);
    let menor = Math.min(...arr);

    console.log(`
    - La suma de todos los números es: ${suma}\n
    - La media de todos los números es:${media}\n
    - El mayor es ${mayor} y el menor es ${menor}    
    `);
};
getMinMaxSumFromArray([55, 3, 99]);

/*
- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). 
Dentro de la función genera un número aleario entre 0 y 10. 
La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.
*/
const getNumberRandomFromArray = arr => {
    let rand = Math.floor(Math.random() * 11);
    console.log(`rand: ${arr}`);

    let pos = arr.indexOf(rand);
    console.log(`pos: ${pos}`);

    if (arr.includes(rand)) {
        console.log(`El array [${arr}] SI contiene el valor ${rand} y su posición es ${pos} `);
    } else {
        console.log(`El array [${arr}] NO contiene el valor ${rand}`);
    }
};
getNumberRandomFromArray([1, 2, 3, 4, 5]);

/*
- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.
*/
const getArrRandom = arr => {
    //modo1
    let rand1 = Math.floor(Math.random() * 101);
    let rand2 = Math.floor(Math.random() * 101);
    let rand3 = Math.floor(Math.random() * 101);
    arr.push(rand1, rand2, rand3);

    //modo2
    /*
    arr.push(Math.floor(Math.random() * 101));
    arr.push(Math.floor(Math.random() * 101));
    arr.push(Math.floor(Math.random() * 101));
    */
    console.log(`El array con random: [${arr}] `);
};
getArrRandom([]);

/*
- Crea una función que reciba un array de 5 números. 
Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), 
después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, 
si el resultado es par, guárdalo en el array de pares, 
si es impar, en el array de impares, 
al final, imprime los 3 arrays por consola.
*/
const getArrWith2Arr = arr => {
    let arr1 = [];
    let arr2 = [];
};

const numbers = [1, 2, 3, 4, 5, 7, 8];
const newNumbers = numbers.map(number => {
    return number * 2;
});
console.log(newNumbers);

const filterNumbers = numbers.filter(number => {
    //return number % 2 === 0;
    return number % 2 === 0 && number; //filtrar
});
console.log(filterNumbers);

const everyNumbers = numbers.every(number => {
    return number % 2 === 0; //filtrar
});
console.log(everyNumbers);

//sort
const words = ['Pedro', 'gato', 'perro', 'arbol', 'Sergio'];
const sortedWords = words.sort((a, b) => {
    if (a.toLowerCase() > b.toLowerCase()) return 1;
    if (a.toLowerCase() < b.toLowerCase()) return -1;
    return 0;
});
console.log(sortedWords);

const result2 = numbers.filter(number => number).map(number => number + 1);
console.log(result2);

const result = numbers.reduce((acc, prev) => {
    //return prev * acc;
    if (prev) {
        return prev + acc;
    } else {
        return acc;
    }
});
console.log(result);

const result3 = numbers.reduce((acc, prev, index) => {
    if (index <= 2) return prev + acc;
    return prev * acc;
});
console.log(result3);

const result4 = numbers.reduce((acc, prev, index) => {
    return index <= 2 ? prev + acc : prev * acc;
});
console.log(result4);

console.log('------------------------------------------ ');
//----------------------------------------------------------------------------//
//ejercicios callback
/*
- Crea una función que reciba un array de números 
y muestre por consola cada número multiplicado por su índice en el array
*/
const getEveryArray = arr => {
    const res = arr.map((el, i) => {
        return el * i;
    });
    return res;
};
console.log(getEveryArray([2, 4, 6, 8]));

/*
- Crea una función que reciba un array de palabras y devuelva un array con las mismas palabras en mayúsculas.
*/
const getMayus = arr => {
    const res = arr.map(el => {
        return el.toUpperCase();
    });
    return res;
};
console.log(getMayus(['aaa', 'bbb', 'ccc']));

/*
- Crea una función que reciba un array de palabras y una letra. La función devolerá un array con las palabras que comiencen por esa letra, si no hay mostrará un mensaje por consola diciendo que ninguna palabra coincide.
*/
const getArrByLetter = (arr, letra) => {
    const filteredWords = arr.filter(palabra => {
        return palabra.startsWith(letra);
    });
    if (filteredWords.length > 0) return filteredWords;
    else return `Del array [${arr}] ninguna palabra empieza por '${letra}'`;
};
console.log(getArrByLetter(['aaa', 'bbb', 'ccc'], 'a'));
console.log(getArrByLetter(['aaa', 'bbb', 'ccc'], 'z'));

/*
- Crea una función que reciba un array de 10 números e imprima por consola la suma de todos los valores del array.
*/
const getSum = arr => {
    return arr.reduce((acc, prev) => {
        return acc + prev;
    });
};
console.log(getSum([2, 2, 2]));
