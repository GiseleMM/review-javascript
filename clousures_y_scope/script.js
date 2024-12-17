/*
CLOUSURE es la combinacion de una funcion agrupada dentro de otra
que te da un acceso al alcance de una funcion externa desde una funcion interna.
en js los closure se crean al momento de la creacion de la funcion

La palabra léxico se refiere al hecho de que el ámbito léxico utiliza la ubicación donde se declara una variable dentro del código fuente para determinar dónde está disponible esa variable. Las funciones anidadas tienen acceso a variables declaradas en su ámbito externo.
 */
function init() {
    //En este ejemplo particular, el ámbito se denomina ámbito de función o alcance de la función, porque la variable es accesible y solo es accesible dentro del cuerpo de la función donde se declara.
    let initVariable = "InitVariable";// variable local creada por la funcion
    function show()// funcion interna q forma el clousure, solo esta disponible desntro del cuerpo de la funcion init()
    {// las funciones internas tienen acceso a las variables externas
        console.log("DEsde funcion interna " + initVariable);//uso de la variable delclara en la funcion padre

    }
    show();//ejecucion de la funcion  initerna
}
init(); //ejecucion de la funcion interna
// PARA OTROS lenguajes los bloques crean ambitos , en js solo lo crea si se declara con LET Y CONST , si usamos VAR no se crea ambito de bloque{}  por que en realidad se crean variables globales
if (Math.random() > 0.5) {
    var x = 1;
} else {
    var x = 2;
}
console.log(x);// con let y const da error por q las claves crean ambitos ( donde se pueden ver las variables)

function dameFuncion() {
    const name = "dameFuncionVariable";
    function show() {
        console.log(name);// hace uso de varaible de mismo ambito lexico
    }
    return show;//retorno funcion sin ejecutar
}
let funcionInterna = dameFuncion();
console.log(funcionInterna);
funcionInterna();
// en algunos lenguales de programacion , las variables locales existen solo durante la ejecucion de la funcion. Una vez q lka funcion dameFuncion() termina de ejecutar, se espera q la variable name , ya no sea accesible. Pero debido a que las fucniones form closures. Un closure es una combianacion de una fucion y el entorno léxico dentro del cual se declaro esa funcion.El entorno consiste en cualquier varaibel local q entuviera dentro del alcande en el momento en q se creo el clousure.En este caso fucionInterna hace referencia a la funcion show interna que se crea cuando se ejecuta dameFuncion. la variable name permanece disponible para su uso por que hay un refrencia viva de ese entorno lexico 

//AMBITO GLOBAL
function sumar(x) {
    //AMBITO DE FUNCION EXTERIOR
    return function (y) { 
        //AMBITO LOCAL
        return x + y;
     };
}
let finterna=sumar(1); // retorna una funcion q recibe un parametro 
console.log(finterna(10));
//NO es produnte crear funciones dentro de otras si no se necesitan closures por q afecta el rendimiento

//BLOQUE DE CODIGO
// si uan variable se declara  dentro de un blñoque de código ,solo es visible dentro de ese bloque
{
    let message="Message";
}
// console.log(message); ERROR no esta definida
//PARA IF,FOR y WHILE las variables declaradas dentro de {...} tambien son visibles en un interir
if(true)
{
    let verdad="TRue";
}else{
    let falso="FAlse";
}
// console.log(verdad,falso); ERROR NO DEFINIDAS

//FUNCIONES ANINADAS
//una funcion se llama anidada cuando se crea dentro de otra funcion
// que puede usarse en el mismo interior de la funcion o retornarla y luego usarla en otro lugar 

//ALCANCE LEXICO
// en js todas las fucniones en ejecucion , el bloque de codigo tienen un objetop interno conocido alcance lexico
// q tiene 2 partes:
//-resgistro de entorno - es un objeto q alamacena en sus propiedades todas las variables locales
//-una referencia al entorno léxico externo asociado al código externo
//una variable es solo una propiedad del objeto interno especial,el registro de entorno
//el entorno lexico global esta asociado a todo el script
// cuando se jecuta una funcion , se crea automaticamente un nuevo ento9rno léxico para almacenar variables y params locales,
// durante la llamada a la funcion tenemos 2 entornos léxico , el interno(de la funcion) y el externo(global)
//si el entorno léxico interno tiene una referencia al externo,
//cuando el código queiere aaceder a una varaible primero busca en el entorno léxico interno, leugo el externo , y luego el externo del externo hasta llegar al global
//si no se encuentra se produce un error
function contador()
{
    let inicio=0;
    return function(){return inicio++;}// se crea una funcion. Todas las funciones recuerdan el entorno léxico en el q se definieron
}
let counter=contador();// al invocar a la f se crea un nuevo objeto de entorno léxico para almacenar variables para la ejecucion 
console.log(counter);//cuadno es llamada la funcion interna se crea un nuevo entorno léxico y su referencia externa del entorno léxico externo
console.log(counter());
console.log(counter());
console.log(counter());

// Una closure es una fucnion q recuerda variables extermas y puede acceder a ellas

//RECOLECTOR DE BASURA 
//un entorno lexico se elimina de la memoria con todas las varaibles una vez q finalize la ejecucion de la misma , pero si hay una referencia al entorno lexico de la fucnion se matiene en memoria.
//Cualquier objeto de Js solo se matien en la memoria mientras sea accesible, en el caso de que el entorno léxico aun sea accesible incluso despues de completar la funcion externa, por lo q permanece vigente

