/*a medida q la apliacion crece , queremos dividirla en multiples archivos llamados modulos
, el sistema de módulos a nivel de lenguaje aparecio en 2015
que es un modulo?
solo un archivo. los modulos se pueden cargar entre si y con las directivas export e import intercambiar funcionalidades y llamar a funciones de otra modulos
-export etiqueta las variabels y funciones que pueden ser accesibles desde fuera del modulo actual
-import permite importar funcionalidades desde otros módulos

*/
import{unoVariable,unoFuncion} from './uno.mjs'; // no js por que  no uso package.json es decir no hice npm init -y con{
//     "name": "mi-proyecto",
//     "version": "1.0.0",
//     "main": "index.js",
//     "type": "module" -->esto Esto le indica a Node.js que todos los archivos .js en tu proyecto deben tratarse como módulos ES Ahora puedes usar import y export en tus archivos .js.
//   }

//otra forma es en el navegador poniendo en el script type="module" esto funciona con http ,NO locamente  no con C//file... SI con liveService
console.log(unoVariable);
unoFuncion();
// CARACTERISTICA DE LOS MODULOS TANTO A NIVEL NAVEGADOR COMO JS DEL LADO DEL SERVIDOR
/*
- el alcande del modulo, cada variable y funcion no se ven en otro script, lo
los modulos deben exportar lo q quieren q sea accesible desde fuera, y los que quieren usarlo deben import .
DE esta forma usamos import/export en vez de tener variables GLOBALES window.user = "John" MALA PRACTICA
-un código de modulo se evalua solo la primera vez, si el mismo modulo se imprta en varios modulos, su codigo se ejecuta solo una vez, si necesitamos algo que pueda ser llamado varias veces debemos exportar como una funcion
ejemplo 1.js alert(sin export)   2.js import '1.js' ; 3.js import '1.js' solo ejecutara el alert la primera importacion
un patron clasico que hace uso de esta caracteristica es un modulo exporta algun objeto de configuarcion, el primer impor lo inicializa y los import poseriores usan el modulo
por ejemplo el modulo admi.js tiene un obj config y una funcion que usa ese objeto
admi.js
export let config={}
export function Valido()
{
if(conf.user) return true;
return false;

}
entonces el primer script de nuestar app importa la conf u establece su valor
init.js
import{config} form './admi.js'
config.user="lali";
ahora importadores posteriores pueden llamarlo y usar su funcion
otro.js
import(valido,config) from '/admi.js';
if(valido())
{
alert("hola "+ config.user);
}
 */
import './dos.mjs'; 


/*

otras caractericas especificas del navegador y los modulos de typo module
-los modulos son diferidos, es como si tuviera el atributo defer( los modulos esperan hasta q el doc html este completamente listo y luego lo ejejcuta, y se mantiene el orden de los script)
por mas que lo pongamos en el head , si no fuera modulo y lo ponemos en el head se ejecuta antes q se carge los elementos de la  pagina html
-En la producción, se suelen usar paquetes como Webpack para agrupar módulos, para mejor rendimiento y otras razones.
-Para cargar scripts externos de otro origen (dominio/protocolo/puerto), se necesitan encabezados CORS.
-Se ignoran los scripts externos duplicados.

EXPORT E IMPORT
las directivas export/impor tiene variantes:
-exportar antes de la sentencia:
podenis etiqutar cualquier sentencia colocando export , ya sea clase , funcion o variable
(sin punto y7 coma despues de exportar una clase/funcion)
export const CONSTANTE_EJEMPLO=2024;
export class User{
constructor(name){this.name=name;}}

-exportar separado de la declaracion, primero declaramos despues exportamos
function f1(){...}
function f2(){...}
export{f1,f2};// exportamos una lista de variables 
*/
import{f1,f2} from './tres.mjs';
f1();
f2();
/*
-import*, si hay mucho para importar, podemos importar todo un objeto utilizando import* as <obj>
import * tres from './tres.mjs';
tres.f1();
tres.f2();

- import as, podemos utilizar as para importar bajo un nombre diferente
import { f1 as funcion1, f2 as funcion2} from './tres.mjs'
-export as , lo mismo se peude hacer en la exportacion
export { f1 as func1, f2 as func2};
 */
import * as cuatro from './cuatro.mjs';
cuatro.cuatro1();
cuatro.cuatro2();
cuatro.cuatroTres();
/*
-export defaul, en la practica existen 2 tipos de módulos:
1mod q contienen librerias , un paquete de funciones
2mod q declaran entidades ej class User.
los modlulos proporciona una sintaxis especial con 'export default' para que cada cosa que reside en su propio modulo , de esta forma 
al hacer el import no necesita llaves en las exportaciones predeterminadas.
Solo puede existir un solo export default por archivo
las exportacione predeterminada simpre elegimos el nombre al importar (por lo que distintos miembros pueden importar el mismo objeto con distinto nombre , lo que NO es bueno)
export default class User{...}
import User from './...'
new User();
como puede haber un maximo de exportacion predeterminda por archivo las exportaciones prederteminada pueden NO tener nombre
export defaul class{...} o export defalut function(){...} o export default [1,2,3,4];

si en el mismo modulos tenemos exportaciones con nombre  al import debemos usar default as 
export default class {....}
export f1();
import {default as User,f1} from...

 o si usamos  import * como un objeto en la propiedad default esta la exportacion predeterminada
 import * as user from...
 user.default; la exportacion predeterminada
 */
import Perro
 from './cinco.mjs';
 let p=new Perro("Rocky");
 p.saludar();
 /*
 REEXPORTACION 
 expor ... from... permite importar cosas e inmediatamente exportarlas
 la unica diferencia es que los modulos  reexportados no están disponibles en el archivo actual que rexporta
 import {login, logout} from './helpers.js';
export {login, logout};

// importar default como User y exportarlo
import User from './user.js';
export {User};

SINTAXIS mAS CORTA 
// re-exportar login/logout
export {login, logout} from './helpers.js';

// re-exportar export default como User
export {default as User} from './user.js';
 
 */
import {f1 as F1,f2 as F2,Dog} from './seis.mjs';
F2();
F1();
let d=new Dog("manchi");
d.saludar();

/*
IMPORTACIONES DINAMICAS
No se peude generar dinamicament ningun parametro de import (ni por llamdo a funcion , ni condicionales)
if(...) import ...; X
import {} from getModulo(); X
para importar un modulo usamos la expresion import()

IMPORT()
esta expresion carga el moódulo y devuelve  una promesa q  se resuleve en un objeto de modulo q contine todas sus exportaciones
import (moduloPath)
.then(obj=>...)
.catch(err=>..)
 o se podria usar let modulo=await import(modulopath) si esta dentro de una funcion asincrona

 export function h1(){...}
 export default  funcion h2(){...}

 async function load(){
 let obj= await import(ruta);
 let h2=obj.default;
 h2();
}
 NOTA las importacion dinamicas no necesitan script de tipo modulo, funcionan en los normales
 */
 async function importacionDinamica()
 {
let obj=await import("./siete.mjs");
console.log(obj);
console.log(obj.PATH);
obj.miFuncion();
let array=obj.default;
console.log(array);
 }
 importacionDinamica();