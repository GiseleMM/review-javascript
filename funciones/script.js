//funciones 
//conjuento de instrucciones de que se ejecuta cuando las invocamos

//funciones declarativas
function miFuncion()
{
    console.log("Mi funcion declarativa");
}
miFuncion();
function miFuncionConParametros(a,b)
{
    console.log(a,b);
}
miFuncionConParametros(3,2);
miFuncionConParametros("boca","junior");

function miFuncionCambia(tipoValor)
{
    if(typeof(tipoValor)=="object")
    {
        tipoValor.nueva="Propiedad";

    }else{
        tipoValor="Cambie";

    }
    
    console.log("Dentro",tipoValor);

}
let variable=33;
miFuncionCambia(variable);// solo cambia dentro por fuera no cambia por que trabaja con una copia al pasar un tipo de valor
console.log("Fuera",variable);
let objeto={name:"Rosa",edad:50};
miFuncionCambia(objeto);// al cambiar dentro de la funcion y ser de tipo de referencia el cambio se refleja fuera de la funcion
console.log("Fuera",objeto);
function miFuncionConParametrosPorDefecto(a="esto es un valor por defecto")
{
    console.log(a);
}
miFuncionConParametrosPorDefecto();
miFuncionConParametrosPorDefecto("le paso algo");
function miFuncionParametroRest(a,...b)//... no permite representar un numero indefinido de argumentos
{
    console.log("a",a);
    console.log("rest",b);

}
miFuncionParametroRest(2,33,4,5,678);
miFuncionParametroRest("boca",1,"lali");

//expresion de funcion, las fucniones tambien se pueden crear a demas de declarativas a traves de expresiones de funciones

const miExpresionDeFuncion=function(param){
    console.log(param);
}
miExpresionDeFuncion();
miExpresionDeFuncion("expresion de funcion");
// puedo darle un nombre a la funcion para llamarla desde adentro; 
const miExpresionDeFuncionConNombre=function f1(){
    console.log(f1);//[Function:f1]
    
};
miExpresionDeFuncionConNombre();
//son conveniente cuando debo pasar una funcion como parametro a otra funcion
const miExpresionDeFuncionParametroFuncion=function(a){
    return a*a;
}
function miFuncionArray(array,f1)//f1 seria la funcion
{
    array.forEach(element => {
        let r=f1(element);
        console.log(r);
        
    });

}
miFuncionArray([3,4,5,1],miExpresionDeFuncionParametroFuncion);

//ambito de la funcion es donde la funcion se declara  , la declaracion de funciones se elevan solo si son funciones declaradas
// no funciones si son expresiones de funciones
console.log(eleva);
eleva();//por mas q este definida abajp
function eleva()
{
    console.log("eleva");
}
// console.log(noEleva); NO puede acceder a noEvela antes de inicializarla
// noEleva();
let noEleva=function()
{
    console.log("no eleva?");
}
//AMBITO
/*No se puede acceder a las variables definidas dentro de una función desde cualquier lugar fuera de la función, porque la variable se define solo en el ámbito de la función. Sin embargo, una función puede acceder a todas las variables y funciones definidas dentro del ámbito en el que está definida. */
let ambitoGlobal="Ambito Global";
function miFuncionAmbito()
{
    let ambitoInterno="ambito interno";
    console.log(ambitoGlobal);// pude acceder a variable definida fuera
console.log(ambitoInterno);
}

//Funcion anida y cierre
//una función definida en el ámbito global puede acceder a todas las variables definidas en el ámbito global.
// console.log(ambitoInterno); ERROR no esta definido en este ambito glabal si no dentro de la funcion
let global=3;
function miFuncionAnidada()
{
    let a=1;
    let b=2;
    function add()
    {

        return a+b+global;

    }
    return add();
}
console.log(miFuncionAnidada());
// add(); Error no existe en este ambito 
//La función anidada (interna) es privada de su función contenedora (externa).
//Solo se puede acceder a la función interna desde declaraciones en la función externa.

//La función interna forma un cierre: la función interna puede usar los argumentos y variables de la función externa, mientras que la función externa no puede usar los argumentos y variables de la función interna.

//Dado que la función interna forma un cierre, puedes llamar a la función externa y especificar argumentos tanto para la función externa como para la interna:
function externa(a)
{
    function interna(b)
    {
        return a+b;
    }
    return interna;//retorna la funcion interna
}
let finterna=externa(3);// guardo en una variable la funcion intena y le paso lo que necesita
console.log(finterna(10));// al todavia tener una referencia de lo que esta dentro de la funcion, la memoria no se libera y sigue existiendo el cierre o ambito de la funcion
//Un cierre debe conservar los argumentos y variables en todos los ámbitos a los que hace referencia.
let resultado=externa(3)(10);// o paso directamente , 1 se ejecuta la externay retorna una funcion y hace le paso el 2 parentesis
console.log(resultado);

//funciones flechas son anonimas y no estan vinculadas al this
let arrayMapeado=[1,2,3,4].map(a=>a*2);
console.log(arrayMapeado);
//Una función flecha no tiene su propio this se utiliza el valor de this del contexto de ejecución adjunto
function miFuncionThis()
{
    console.log(this);//objeto glabal
}
miFuncionThis();
let flecha =()=>console.log(this);
flecha();

const persona={
    name:"gisel",
    saludar:function()
    {
        console.log("Hola soy "+this.name);
    }
}
persona.saludar();
let per=persona.saludar;// esta asociado el this al objeto persona  :hola soy gisel 
per();//obtengo la ref de la funcion y ejecuto  fuera del contexto de la persona:hola soy undefined
const persona2={
    name:"pepe",
    saludar:()=>console.log("hola soy "+this.name)
}
persona2.saludar();// hola soy undefined por q es una funcion flecha y toma el this del contexto superior, en este caso el this del contexto superior es el de la persona2 (se definio en el conetxto global)
let per2=persona2.saludar;
per2();
const persona3={
    name:"dami",
    saludar:function()
    {
        console.log("hola soy",this.name);
    }
}
persona3.saludar();// tiene su propio this 
let per3=persona3.saludar;//es udefined por que se ejecuta fuera, pierde la referencia
per3();

//METODOS ESPECIALES Q TIENE UN OBJETO FUNCION 
//BIND()
const person={
    lastname:"Leal",

    saludar:function()
    {
        console.log("HOLA SOY "+this.lastname);
        
    },
    despedir:function(valor)
    {
        console.log("Adios "+valor+". "+this.lastname)
    }
}
person.saludar();//this corresponde al objeto delante del punto
let otroContexto=person.saludar;
otroContexto();// aca el this no es person  ya q ahoar apunta a la referencia del objeto global y no tiene acceso a lastname q esta dentro de person
//si quiero q el this dentro de OtroContexto sea el mismo q persona usamos BIND()
const otroContextoConPersonThis=otroContexto.bind(person);// retorna una funcion con el this de person
otroContextoConPersonThis();
//El metodo bind crea una copia de la funcion pero el enlaza la referencia de this dentro de la funcion con el this de la referencia q le pasomos(person)

//CALL, tambien enlaza la funcion con un this pero si ejecuta la funcion no retorna una copia. El 1° parametro es la referencai a la que apunta el this, y los siguientes parametros son los arguentos si tiene
let despedirOtroContexto=person.despedir;
despedirOtroContexto("Rosa");// sin this enlazado
despedirOtroContexto.call(person,"Rosa");

// APPLY, la unica direfencia entre call y apply es q los argumento de la funcion se mandan como arreglo 
despedirOtroContexto.apply(person,['Mariana']);
//podemos prestar la  funciona otro objeto para q lo utilize con sus propios argumentos {lastname:""} esto crea un objeto  
person.despedir.apply({lastname:"Taylor"},["Anya"]);
