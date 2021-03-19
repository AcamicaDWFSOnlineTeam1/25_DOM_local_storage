// 1.-
function sayHi() {
    console.log(name);
    console.log(age);
    var name = 'Lydia';
    let age = 21;
}

// Descomentar la siguiente línea:
//sayHi();

/* Respuesta correcta: undefined and ReferenceError
Dentro de la función, primero declaramos la variable name con la palabra reservada var. Esto significa que 
la variable sube de ámbito por el hoisting (el espacio de memoria se configura durante la fase de creación) 
con el valor predeterminado de indefinido, hasta que realmente llegamos a la línea donde definimos la variable. 
Aún no hemos definido la variable en la línea 5, donde intentamos registrar la variable name, por lo que aún 
mantiene el valor de undefined. Las variables con la palabra clave let (y const) suben de ámbito por el hosting, 
pero a diferencia de var, no se inicializa. No son accesibles antes de la línea que los declaramos (inicializamos).
A esto se le llama "temporal dead zone". Cuando intentamos acceder a las variables antes de que se declaren, 
JavaScript lanza un ReferenceError */

// 2.-
// Descomentar la linea 24 a 30
/* for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
}

for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 1);
} */

/* Respuesta correcta: 3 3 3 y 0 1 2
Debido a la cola de eventos en JavaScript, la función setTimeout se llama una vez el ciclo se ha ejecutado.
Dado que la variable i en el primer for se declaró utilizando la palabra reservada var, este valor es global.
Durante el primer for, incrementamos el valor de i en 1 cada vez, utilizando el operador unario ++. Cuando se
invocó la función setTimeout, i era igual a 3 en el primer ejemplo.
En el segundo for, la variable i se declaró utilizando la palabra reservada let: las variables declaradas con
la palabra reservada let (y const) tienen un ámbito de bloque (un bloque es lo que se encuentra entre {}).
Durante cada iteración, i tendrá un nuevo valor, y cada valor se encuentra dentro del bucle.
Pueden revisar la documentación de setTimeout en los siguientes links:
- https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
- https://www.w3schools.com/js/js_timing.asp
Los siguientes links hablan del uso de setTimeout en los ciclos:
- https://medium.com/@axionoso/watch-out-when-using-settimeout-in-for-loop-js-75a047e27a5f
- https://coderwall.com/p/_ppzrw/be-careful-with-settimeout-in-loops
*/

// 3.-
const shape = {
    radius: 10,
    diameter() {
        return this.radius * 2;
    },
    perimeter: () => 2 * Math.PI * this.radius
};

console.log(shape.diameter());
console.log(shape.perimeter());

/* Respuesta correcta: 20 y NaN
Aquí que el valor de diameter es una función regular o normal, mientras que el valor del 
perimeter es una función arrow. Con las funciones arrow, la palabra clave this se 
refiere a su ámbito actual, a diferencia de las funciones regulares. Esto significa que 
cuando llamamos a "perimeter", no se refiere al objeto en sí mismo, sino a su ámbito 
dentro de la definición de la función arrow. No hay valor radius en ese objeto, que 
devuelve undefined.
 */


// 4.-
console.log(+true);
console.log(!'Lydia');

/* Respuesta correcta: 1 y false
En el primera caso se intenta convertir un operando en un número. true es 1, y false es 0.
En el segundo caso la cadena 'Lydia' es un valor verdadero. La negación resulta en false.
 */

// 5.-
const bird = {
    size: 'small',
};

const mouse = {
    name: 'Mickey',
    small: true,
};

/* Respuesta correcta: mouse.bird.size is not valid
En JavaScript, todas las llaves (keys) son cadenas (a menos que sea un símbolo). A pesar de 
que no podríamos escribirlos como cadenas, siempre funcionan como cadenas de manera interna.
JavaScript interpreta declaraciones. Cuando usamos la notación de corchetes, ve el corchete
de apertura [ y continúa hasta que encuentra el corchete de cierre ]. Solo de esta manera 
se evaluará la afirmación. 
mouse [bird.size]: Primero evalúa bird.size, que es"small". mouse ["small"] devuelve true
Sin embargo, con la notación de puntos, esto no sucede. mouse no tiene una clave llamada bird, 
lo que significa que mouse.bird es undefined. Luego, pedimos el tamaño usando la notación de 
puntos: mouse.bird.size. Como mouse.bird es undefined, en realidad estamos preguntando undefined.size. 
Esto no es válido y generará un error similar al Cannot read property "size" of undefined
 */

// 6.-
let c = { greeting: 'Hey!' };
let d;

d = c;
c.greeting = 'Hello';
console.log(d.greeting);

/* Respuesta correcta: Hello
En JavaScript, TODOS los objetos interactúan por referencia, de modo que cuando se establecen 
iguales o pasan a una función, todos apuntan a la misma ubicación. De esta manera cuando cambia 
un objeto, los cambia a todos. Primero, la variable c tiene un valor para un objeto. Más tarde, 
asignamos d con la misma referencia que c tiene al objeto. 

         C       D
          \     /
            Obj

Cuando cambias un objeto, cambian todos ellos.
 */

// 7.-
const fruit = ['🍌', '🍊', '🍎'];

fruit.slice(0, 1);
console.log(fruit);
fruit.splice(0, 1);
console.log(fruit);
fruit.unshift('🍇');
console.log(fruit);

/* Respuesta correcta: ['🍇', '🍊', '🍎']
Primero, invocamos el método slice en el arreglo fruit. El método slice no modifica el
arreglo original, pero regresa el valor que fue cortado del arreglo: el emoji 🍌. Después,
invocamos el método splice en el arreglo fruit. El método splice no modifica el arreglo
original, por lo que el arreglo fruit ahora contiene ['🍊', '🍎']. Finalmente, invocamos 
el método unshift en el arreglo fruit, este modifica el arreglo original agregando el valor
‘🍇’, como el primer elemento del arreglo. El arreglo fruit ahora contiene ['🍇', '🍊', '🍎'].
 */

// 8.-
const emojis = ['🎄', '🎅🏼', '🎁', '⭐'];

/* 1 */ emojis.push('🦌');
/* 2 */ emojis.splice(0, 2);
/* 3 */ //emojis = [...emojis, '🥂'];
/* 4 */ emojis.length = 0;

/* Respuesta correcta: emojis = [...emojis, '🥂']; causa un error
La palabra reservada const quiere decir que no podemos redeclarar el valor de esa variable,
es de solo lectura. Sin embargo, el valor en sí no es inmutable. Las propiedades en los 
emojis pueden modificarse, por ejemplo agregar nuevos valores, cambiar el tamaño del arreglo 
a 0, empalmarlos.
Para información del operador SPREAD ... vean el siguiente link:
- https://www.codingame.com/playgrounds/7998/es6-tutorials-spread-operator-with-fun
- https://codeburst.io/a-simple-guide-to-destructuring-and-es6-spread-operator-e02212af5831
 */

// 9.-
const add = x => x + x;

function myFunc(num = 2, value = add(num)) {
    console.log(num, value);
}

myFunc();
myFunc(3);

/* Respuesta correcta: 2 4 y 3 6
Primero, invocamos myFunc() sin argumnentos. Ya que no enviamos argumentos, num y value 
obtienen sus valores por default: num es igual a 2, y value toma el valor regresado por 
la función arrow add. A la función add, pasamos num como argumento, el cual tiene el valor
de 2. add regresa 4, el cual es el valor de value. Después, invocamos myFunc(3) y 
pasamos 3 como valor del argumento num. No enviamos ningún valor para el argumento value.
Este obtiene su valor de default: el valor retornado por la función add. A add, pasamos
num, el cual tiene el valor 3. add regresa 6, este es el valor de value.
 */

// 10.-
const myFunc = ({ x, y, z }) => {
    console.log(x, y, z);
};

myFunc(1, 2, 3);

/* Respuesta correcta: undefined undefined undefined
myFunc espera un objeto con propiedades "x", "y" y "z" como argumento. Ya que solo
estamos pasando 3 valores numericos por separado (1, 2, 3) en lugar de un objeto con
las propiedades "x", "y" y "z" ({x: 1, y:2, z:3}), "x", "y" y "z" tienen su valor por
default undefined.
 */

// 11.-
function addToList(item, list) {
    return list.push(item);
}

const result = addToList('apple', ['banana']);
console.log(result);

/* Respuesta correcta: 2
¡El método .push() devuelve la longitud del nuevo array! Al principio, el array contenía 
un elemento (el string "banana") y tenía una longitud de 1. Después de añadir el string 
"apple" al array, el array contiene dos elementos, y tiene una longitud de 2. Esto es lo 
que devuelve la función addToList. El método push modifica el array original. Si quisieras 
devolver el array de la función en lugar de la longitud del array deberías haber devuelto 
list después de introducir item en él.
 */