/*PROGRAMAICION FUNCIONAL, es un paradigma de programcion q se base en el uso de funciones
puras y aisladas,las funciones son el componente principal de la prog funcional.
funciones puras funciones q no tinen efectos secundarios

HAY 4 tipos de funciones
-f de 1° clase, en js todas las funciones son de primera clase( pueden tratarse como cualqueir otra variable(se pueden asingnar a variables. devolver de otras funciones, y pasarse como argumento de itra funcion))
-f callback son funciones q se pasan a otras como argumento y son llamadas por la funcion en la se pasan
-f de orden superior , son funciones q recibem otras funciones como argumentos o devuelven otra funcion de retorno
-f asincronas , son funciones q no tienen nombre y no se pueden reutilizar

PRINCIPIOS DE LA PROGRACION FUNCIONAL
- evitar mutuaciones y efectos secundarios, una funcion NO deberia cambiar nada
-una funcion debe ser pura, no debe tener efectos secundarios(resultados).
en progamacion funcional los cambios son MUTACIONES y los rslutados son EFECTOS SECUNDARIOS
una funcion pura siempre tendra la misma salida para la misma entrada


el estilo con el que solemos escribir nuestras funciones suele ser indicar las instrucciones, paso a paso, que queremos que ejecute la computadora, es decir, un modo imperativo: hablamos de cómo hacer las cosas en lugar del qué (declarativo).
a programación funcional es un paradigma de programación que nos sirve para estructurar, organizar y controlar la complejidad de nuestro código, favoreciendo un estilo más declarativo_, componiendo funciones puras para construir aplicaciones, evitando el uso de estado compartido, los datos mutables y los side effects, 
vamos a utilizar

funciones pequeñas, puras: sólo dependen de sus inputs y no de otras partes del código
sin side effects: no hay consecuencias más allá del scope de la función y su output
composición: construimos nuestra aplicación a partir de estos bloques
Nuestra aplicación estará definida en términos de una función principal. La función principal se define a partir de otras funciones, que a su vez se definen a partir de otras funciones, etc, hasta llegar a valores de tipos primitivos como number o string.

El estado de nuestra aplicación fluye a través de funciones puras, en contraste con lo que sucede en la Programación Orientada a Objetos, donde el estado de las aplicaciones es usualmente compartido en objetos y manipulado a través de sus métodos.
input -function -output
Las funciones son procesos que reciben determinado input y producen cierto output.
En el paradigma funcional, las funciones cumplen con las siguientes características:

Son puras
Usan datos inmutables
Tienen transparencia referencial
Son de primera clase

Higher-Order Functions
Si una función acepta otras funciones como argumentos (por ejemplo, cada vez que usamos callbacks en JS/Node) o retorna funciones, se dice que es una función de alto orden o Higher-Order Function (alcanza con que cumpla alguna de las 2 características).

Algunos métodos de Array, como map(), filter() y reduce() son funciones de alto orden.

Funciones First-Class
En un lenguaje de programación funcional, las funciones son First-Class Citizens (es decir, pueden tratarse como cualquier otro valor) y JavaScript cumple con esto.
Transparencia referencial
Decimos que una expresión es referencialmente transparente si puede ser reemplazada por su valor, sin alterar el comportamiento del programa.

Por ejemplo, si tenemos la siguiente función

const greet = () => 'Hello World!';
cualquier invocación de greet() puede ser reemplazada por el string 'Hello World!' perfectamente, por lo tanto tiene transparencia referencial.

Declarativo vs Imperativo
Cuando utilizamos un enfoque imperativo, definimos todos los pasos necesarios para cumplir cierta tarea. Con un enfoque declarativo en cambio, le decimos a la computadora qué hacer y que la misma se encargue de resolver los detalles, abstrayéndonos de estos.

Side Effects
Decimos que una expresión o función tiene un side effect si, aparte de retornar un valor, interactúa de alguna forma (lee o escribe) con un estado externo a la misma (es decir, cualquier otra cosa que haga aparte de retornar un valor). Por ejemplo, leer o modificar una variable global son considerados side effects.
Los side effects incluyen:

leer/escribir de un disco (HD/SSD)
leer/escribir de la red (request HTTP)
leer inputs a través de la consola
loggear info a la consola
arrojar errores
modificar el DOM
mutar objetos/arrays pasados como argumentos
El paradigma funcional utiliza funciones puras y datos inmutables para evitar los side-effects.
Inmutabilidad
Decimos que los datos son inmutables si nunca cambian (no pueden modificarse). En el paradigma funcional, los datos son inmutables. Utilizar valores inmutables facilita mucho razonar sobre el código de nuestra aplicación, ya que no modificaremos accidentalmente el estado de la misma, por lo que es recomendable aplicar esta característica del paradigma siempre que podamos.
Por ejemplo, si queremos modificar un array, para agregar un nuevo ítem al mismo, creamos un nuevo array concatenando el array anterior con el nuevo ítem.

const originalArray = [1, 2, 3];
const newArray = [...originalArray, 4];
 si estamos utilizando objetos, tengamos en cuenta que en JavaScript, los objetos siempre se pasan por referencia, es decir, si una función muta/modifica un objeto que recibe como argumento, está mutando un estado externo fuera de su scope. Los tipos primitivos en cambio, se pasan por valor/copia.
 Para evitar mutar el estado, es importante tratar el input de las funciones como inmutable
 es muy útil utilizar el operador spread para copiar las propiedades del objeto original y modificar sólo las que cambian.

const original = {
  name: 'JavaScript',
  age: 25,
  color: 'yellow'
}

const modifiedCopy = {
  ...original,
  color: 'blue'
}

console.log(original);
console.log(modifiedCopy);
Funciones puras
Decimos que una función es pura si

el valor de retorno está determinado únicamente por su input (mismo input => mismo output), sin importar cuántas veces la llamemos[1]
es predecible (por el ítem anterior)
no modifica ningún estado interno (argumentos) ni interactúa con ningún estado externo (no leen ni modifican valores fuera de su scope), es decir, no provocan side effects
son referencialmente transparentes.
const sum = (a, b) => a + b;
es pura, ya que no tiene side-effects y para los mismos valores de a y b, el resultado será siempre el mismo, mientras que getId

const SECRET = 42; 

const getId = a => SECRET * a;
es impura, ya que accede a la variable global SECRET. Si SECRET fuera modificada, getId retornaría un valor diferente para el mismo input, por lo tanto no puede ser una función pura.
Composición de funciones
El rol de una función es tomar un valor inicial y transformarlo en otro. La composición nos permite combinar funciones, para que podamos aplicar una serie de transformaciones hasta alcanzar un valor final.

La composición consiste entonces en utilizar el resultado de una función (output) como argumento (input) de otra función.

Podemos utilizar la composición cuando coinciden la cantidad y el tipo de retorno de una función con el tipo de argumento de otra, 


FUNCIONES ARREGLOS
funciones de orden superior q nos permite trabajar con arreglos


ARRAYS es una estructura que nos permite almacenar una collecion ordenada de datos 
let arr=new Array()
let arr=[]; 
ambas crean array vacios

*/
let frutas=['pera','manzana','sandia','uva','damasco','frutilla'];
//los elementos del array estan indexado desde CERO
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
//recorrer un array
frutas.forEach(function(elemento,indice,array){
    console.log(elemento,indice);
})
//añadir un elemento al final de un array
let nueva=frutas.push("naranja");
console.log(nueva);// cantidad de elementos en el array
console.log(frutas[nueva-1])
//eliminar un elemento al final de un array
let ultimo=frutas.pop();
console.log(ultimo);
let nuevaLongitud=frutas.unshift("naranja");
console.log("nueva longitud",nuevaLongitud);
console.log(frutas[0]);
let primero=frutas.shift();
console.log(primero);

//encontrar el indice de un elemento del array
let posicionBanana=frutas.indexOf("banana");
console.log(posicionBanana); //-1 si no la encuentra
let posicionUva=frutas.indexOf("uva");
console.log(posicionUva);// indice empezando de 0

//eliminar un unico elemento mediante su posisico splice(posicion del 1 elemento q se elima ,numero de elemento q queremos eliminar)
let e=frutas.splice(posicionUva,1);
console.log(e);//array con elemento eliminado , en este caso 1
//copiar una array
let copiaArray=frutas.slice();// no es el mismo array , si modifico la copia no modifico el original
console.log(copiaArray,frutas);
copiaArray.push("fresa");
console.log(copiaArray,frutas);
//length, cantidad elementos de un array
console.log(copiaArray.length,frutas.length);
//si se dispimuye la propiedad length , puedo eliminar elementos
copiaArray.length=5;
console.log(copiaArray.length,frutas.length);
//ARRAY.isArray(valor) devuelve boolean si el valor es una array
console.log(Array.isArray(copiaArray));//true
console.log(Array.isArray({}));//false


//METODOS DE ISNTANCIA
//CONCAT crea nuevo arrar con la concatenacion de los arrays
let nuevoConcat=copiaArray.concat([1,2,3]);
console.log(nuevoConcat);
//ENTRIES devuelve un nuevo objeto array Iterator q contine los pares clase /valor 
let objetoArrayIterartor=nuevoConcat.entries();// solo se recorre con for of
for (const key of objetoArrayIterartor) {
        console.log(key);//[indice,valor]
        
    }

//EVERY develve true si todos los elementos del array cumplen con el predicate
console.log(frutas.every(f=>f.length>=3));
//FILL asignar un valor estatico entre las posiciones inicio y fin
let nuevoFill=nuevoConcat.fill("4",2,5);// solo funciona si existe los indices inicio y fin no para crear nuevos indices
console.log(nuevoFill);
//FIND develve el 1° elemento del array q cumpla con el predicate, o undefined si no encuentra
console.log(nuevoFill.find(f=>f==="4"));
console.log(nuevoFill.find(f=>f===4));
//FILTER devuleve nuevo arrar q contine todos los elemento q cumplan con el predicate
let nuevoFilter=nuevoFill.filter(f=> typeof(f)=="string");
console.log(nuevoFilter);
//FINDINDEX , devuelve el indice del 1° elemento q cumpla con el predicate o -1
console.log(nuevoFilter.findIndex(f=>f=="4"));
//INCLUDES(valor buscado)  retorna true  si el array contienne el valor buscado
console.log(frutas.includes("pera"));
//JOIN, devuelve un string con todos los elementos de un array
console.log(frutas.join());// con coma
console.log(frutas.join("+"));
console.log(frutas.join(" "));//con espacio
//KEYS() devuelve un nuevo array iterator con las claves de cada indice del array
for (const element of frutas.keys()) {
  console.log(element);
  
}
//LASTINDEXOF(valor) devuelve el ultimo indice del array q sea igual a valor o -1
console.log(nuevoFilter);
console.log(nuevoFilter.lastIndexOf("4"));
//MAP()devuelve un nuevo array  q contiene el resultado de llamar a la funcion pasada como paremetro a todos los elementos del array
let nuevoMap=nuevoFilter.map(c=>{
  return c+"MAP";
})
console.log(nuevoMap);
//REDUCE aplca la funcion pasado como parametro a un acumulador y cada valor del array y lo reduce a un unico valor
let valorInicial=100;
let nuevorReduce=[1,2,10,5].reduce(function(acumulador,actual,indice,array)
  {
    console.log(acumulador,actual,indice);
    return acumulador+actual;
  },valorInicial// si no le paso toma como valor inicial el primer elemento del arrat
);
console.log(nuevorReduce);
//REVERSE invierte el orden de los elementos del array en el PROPIO ARRAY
console.log(frutas.reverse());
//SOME(predicate) devuelve true si al menos un elmento del array cumple el fredicate
console.log(frutas.some(f=>f.length==8));
//SORT ordena el array modificandolo
console.log(frutas.sort());
//VALUES deveulve un nuevo array iterator con los valores de cada indice
for (const element of frutas.values()) {
  console.log(element);
  
}








