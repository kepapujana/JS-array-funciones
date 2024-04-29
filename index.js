//1
let arrayVacio = []

//2
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//3
let arrayNumerosPares = [0, 2, 4, 6, 8]

//4
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']]

//5
function suma (a, b) {
    return a + b
    }

suma (8, 2)

//6
function potenciacion(a, b) {
    a = +a;
    b = +b;

    let resultado = Math.pow(a, b);
    return (resultado);
}
console.log(potenciacion(5, 15));

//7
const frase = "hola mundo";

function separarPalabras(frase) {
    // Utilizamos el método split() para dividir la cadena en palabras
    // utilizando el espacio como separador
    return frase.split(" ");
}

const palabras = separarPalabras(frase);
console.log(palabras); // Output: ["hola", "mundo"]

//8
const string = "Hola ";
const numero = 3;

function repetirString(string, numero) {
    // Creamos una variable para almacenar el resultado
    let resultado = "";
    
    // Utilizamos un bucle for para concatenar el string el número de veces dado
    for (let i = 0; i < numero; i++) {
        resultado += string;
    }
    
    return resultado;
}

const resultado = repetirString(string, numero);
console.log(resultado); // Output: "Hola Hola Hola "

//9
function esPrimo(a) {
    // Los números menores o iguales a 1 no son primos
    if (a <= 1) {
        return false;
    }
    
    // Verificamos si el número es divisible por algún número
    // mayor que 1 y menor o igual que la raíz cuadrada del número
    for (let i = 2; i <= Math.sqrt(a); i++) {
        if (a % i === 0) {
            // Si es divisible, entonces no es primo
            return false;
        }
    }
    
    // Si no se encontró ningún divisor, entonces es primo
    return true;
}

// Ejemplo de uso:
const a = 6;
console.log(esPrimo(numero)); // Output: true

// 10
const array = [3, 1, 5, 2, 4];
const arrayOrdenado = ordenarArray(array);
function ordenarArray(array) {
    // Creamos una copia del array original usando slice()
    const arrayOrdenado = array.slice();
    
    // Utilizamos el método sort() para ordenar la copia del array
    // de menor a mayor
    arrayOrdenado.sort((a, b) => a - b);
    
    return arrayOrdenado;
}

console.log(arrayOrdenado); // Output: [1, 2, 3, 4, 5]

// 11
const array2 = [1, 2, 3, 4, 5, 6];

function obtenerPares(array) {
    // Utilizamos el método filter() para filtrar los elementos pares
    return array.filter(numero => numero % 2 === 0);
}

const pares = obtenerPares(array);
console.log(pares); // Output: [2, 4, 6]

// 12
const array3 = [0, 1, 2];

function pintarArray(array) {
    let resultado = '[';
    
    // Iteramos sobre cada elemento del array
    for (let i = 0; i < array.length; i++) {
        // Agregamos el elemento actual al resultado
        resultado += array[i];
        
        // Si no es el último elemento, agregamos una coma y un espacio
        if (i < array.length - 1) {
            resultado += ', ';
        }
    }
    
    resultado += ']'; // Agregamos el caracter de cierre ']'
    
    return resultado;
}

console.log(pintarArray(array)); // Output: "[0, 1, 2]"

// 13
function arrayMapi(arr,func) { 
    let resultado = []
    for (let i = 0; i < arr.length; i++) {
        resultado[i] = func(arr[i])    
    }
    return resultado
}

// 14
const arrayConDuplicados = [1, 2, 2, 3, 4, 4, 5];

function eliminarDuplicados(array) {
    // Utilizamos el método filter() para filtrar solo los elementos únicos
    return array.filter((elemento, indice) => array.indexOf(elemento) === indice);
}

const arraySinDuplicados = eliminarDuplicados(arrayConDuplicados);
console.log(arraySinDuplicados); // Output: [1, 2, 3, 4, 5]

// 15
let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9]
    
// 16
let holaMundo = ['Hola', 'Mundo']

// 17
let loGuardoTodo = ['hola', 'que', 23, 42.33, 'tal']

// 18
let arrayDeArrays = [[756,'nombre'],[225,'apellido'],[298,'direccion']]

// 19
function multiplicacion (num1,num2){
    return num1 * num2
}

// 20
function division (num1,num2){
    return num1 / num2
}

// 21
function esPar(num) {
    return num % 2 == 0;
  }

// 22
function resta(num1,num2){
    return num1 - num2;
} 
let arrayFunciones = [ suma, resta, multiplicacion] 

// 23
function ordenarArray2(arr) {
    arr.sort(function (a, b) {
        return  b - a
    })
    return arr
}

// 24
function obtenerImpares(arr) {
    let arrImp = []
    arrImp = arr.filter(arr => arr % 2 !== 0)
    return arrImp
}

// 25
function sumarArray(arr) {
    let result = []
    result = arr.reduce((a,b) => a + b)
    return result
}

// 26
function multiplicarArray (arr){
    let result = []
    result = arr.reduce((a,b) => a * b)
    return result
}