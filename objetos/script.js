/* los tipos de datos en js son:  
-los promitivos  que contienen un solo valor
-los objetos q son usados para almacenar coleecciones de varios datos con un nombre clase

OBJETOS
son arreglos asociativos que almacenas propiedades clave-valor
Creacion
se crean con {...} con una lista opcional de propiedades (key(string):vale)
pra crear un objeto vacio podemos
let u=new Object();//contructor de objeto
let u={}; objeto literal
*/
let objeto=new Object();
let objetoLiteral={};
console.log(objeto);
console.log(objetoLiteral);

//podemos poner propiedades dentro del objeto como clave:valor
let perro={
    name:"Rocky",//clave name valor Rocky
    edad:3,
    "su amo":"Rosa"
}
//cada propiedad tiene una clave que es de tipo string y su valor viene despues de :
// se puede crfear una propiedad con mas de una palabra pero debemos usar " "

//se puede ACCEDER a los valores de las propiedaes utilizando .
console.log(perro.name);
console.log(perro.edad);
// se puede ElIMINAR una propiedad con el operador delete
delete perro.edad;
console.log(perro);
//se puede ACCEDER CON CORCHETES , cuando la clave es de mas de una palabra no funciona el punto y se usa corchete
//tambien sirven si queremos usar una variable como respustado de una expresion NO funciona si hacemos lo mismo con .
console.log(perro["su amo"]);
let clave="su amo";//puede calcularse en tiempo de ejecucion o depender de  la entrada del usuario
console.log(perro[clave]); // perro.clave ->NO
//PROPIEDADES CALCULADAS
//podemos usar []en un objeto literal y el nombre de la propiedade se obtiene de la variable
let numero="clave";//le puedo pedir al usuario, puedo calcularla pero debe ser un string
let p={
    [numero]:3// la clave toma el valor de la variable
}
console.log(p);
//como a veces tenemos los mismo nombres de las variables que las claves
// se puede usar una abreviacion
let nombre="Gisele";
let age=50;
const p1={
    nombre:nombre,
    age:age
}
console.log(p1);
function makeUser(nombre,age)
{
    return {nombre,age};
}
let p3={
    nombre,
    age
}
console.log(p3);
console.log(makeUser("Gisele",50));

// podemos probar si existe una propiedad con IN
console.log("nombre" in p3);
console.log("nombres" in p3);

//For in, podemos reccirres todas las claves de un objeto con el bucle for in 
// las propiedades se enumera en el orden de creacion
for (const key in p3) {
    if (Object.prototype.hasOwnProperty.call(p3, key)) {
        const element = p3[key];
        console.log(element,key)
        
    }
}
//Hay  muchos otros tipo de objetos en JS como array,Date,Error
//REFERENCIAS DE OBJETOS Y COPIAS
//los datos primitivos son aginados y copiados com un valor completo , en cambio los objetos
//son alamcenados y copiados por referencia, es decir que la variable no almacena el objeto sino su DIRECCION EN MEMORIA
// el objeto es alamacenado en algun lugar de la memoria miestras qq la variable tiene la refencia a él.
//entonces cuando una variable de objeto es copiada , se copia la referencia,el objeto no es duplicado
let gato={apodo:"michi",edad:10};
let gato2=gato;// copia la referencia, ahora hay 2 VARIABLES haciendo referencia al mismo objeto
delete gato2.edad;
console.log(gato);

let varieblePrimitiva="string";
let copiaVariablePrimitiva=varieblePrimitiva;
copiaVariablePrimitiva+=" modifico";
console.log(varieblePrimitiva);
console.log(copiaVariablePrimitiva);



//COMPARACION POR REFERENCIA, dos objetos son iguales si son los mismo objetos
console.log(gato===gato2);
let a={};// aunque tengan las mismas propiedades
let b={};
console.log(a===b);

//CONST,  los objetos al almacenarse como referencia  se puede declarar const y modificarlo, salvo que cambiemos la referencia (volvamos a crear el objeto con new o {}) no habra error
const modifico={
    constante:"mi constante",
}

modifico.constante="cambio";
console.log(modifico);
//modifico={};//ERROR

//CLONACION SIMPLE con OBJECT.assign , podemos copiar todas las propiedades de user en un objeto vacio y lo devuelve
let clone=Object.assign({},perro);
clone.nueva="nueva propiedad";// por mas que modifique no afecta a lo origina
console.log(clone);

console.log(perro);
//CLONMACION USANDO SPREAD
let clone2={...clone};
console.log(clone2);
console.log(clone2==clone);//false NO es el mismo objeto

//RECOLLECCION DE BASURA
//la gestion de memoria en js se hace de forma automatica.En js el manejo de memoria tiene que ver con el alcance
//los valores alcanzables son los que se pueden acceder o utilizar. se garantiza q serán conservados.
//por ejemplo cuando una funcion se ejecutando no se pueden eliminar las varaibles locales y parametros.
//tampoco se pueden eliminar las varaibles glebales.
// cuando un objeto no esta siendo referenciado  el recolector de basura los elimina y libera memoria
let memoria={ //memoria tiene la referencoa al objeto
    tam:200,
}
memoria=null; // se pierde la referencia al objeto Ya no es ACCESIBLE el recolector de basura recolectara los datos y liberara memoria

let memoria2={// la variable guarda la ref al objeto
    tam:300,
}
let memoria3=memoria2;// la 2 variable guarda la ref al objeto
memoria2=null;
console.log(memoria3);// sigue existiendo el objeto por que puede ser referenciado desde otra variable, por lo que debe quedar en memoria


//METODOS DE OBJETOS , THIS
//los objetos son creados para representar entidades del mundo real (POO) como usuarios,mascotas. Estas a demas de propiedades en el mundo real pueden 
//actuar, y estas acciones se implemenan asignando funciones a las propiedades ndel objeto
let mascota={
    nombre:"Gordo",
    edad:1
};
mascota.sonido=function (){// usamos una expresion de funcion para asignarla a la propiedad
    console.log("Guauuuu");
}
mascota.sonido();
// una pfuncion que es propiedasd de un objeto se denomina METODO
//Otra forma de crear metodos
let gatito={
    sonido:function()
    {
        console.log("miauuu");
    }
}
let vaca={
    sonido() // podem,os omitir function
    {
        console.log("Muuu");
    }
}
gatito.sonido();
vaca.sonido();
//THIS , es comun q los metodos necesiten usar la informacion del objeto para cumplir su tarea, para acceder al objeto desde un metodo del mismo objeto puede usar la palabra this
//el valor del this es el OBJETO antes del punto (el objeto q llama al metodo)
let persona={
    apellido:"John",
    edad:17,
    esMayor()
    {
        let respuesta="NO es mayor";

        if(this.edad>=18) respuesta="Es mayor";

        console.log(respuesta,this.edad);
    }
}
persona.esMayor();

//la palabra this puede ser usado en cualquier funcion, incluso si no es el método de un objeto

function holaMundo()
{
    console.log(this);// window en el navegador y Objeto GLOBAL en  node
}
holaMundo();
//el valor de this es evaluado en tiempo de ejecucion y dependiendo el contexto
// si asigno la fucion a 2 objetos diferentes y esta tiene un this , los llamados tendran direrentes this

var name="GLOBAL";

function saludar()
{
    console.log("Hola soy "+this.name); // undefined por que estoy en node, si estuviera en navegador con var name tendria una variable global
}
saludar();
let michi={name:"Garfield"};
let dog={name:"Firu"}
michi.f=saludar; // si hay un this dentro de la funcion, se espera q sea llamado en un contexto de objeto
dog.f=saludar;
michi.f();
dog.f();
//en js this es libre, esta desvinculado, es decir es evaluado al momento de ser llamado y no depende donde fue declarado sino CUAL ES EL OBEJTO DELANTE DEL PUNTO

//LAS FUNCIONES FLECHAS NO TIENE THIS , si no que se toma desde el exterior
let flecha={
    name:"Flecha",
    hola:()=>console.log("Hola soy "+this.name), // en este caso asigno una funcion flecha y a una propiedad y como toma del exterior y del exterior del objeto no hay this.name da undefined
    hola2()
    {
        let f=()=>console.log("HOla soy "+this.name);
        f();// llamo a la funion flecha que toma el this desde el exterior donde fue definida, en este caso el objeto flecha, la funcion crea un ambito dentro del objeto y  no toma ese this si no el del objeto
    }

}
flecha.hola();
flecha.hola2();

//OBJET:KEYS,VALUES,ENTRIES
//object key(o) devuelve un array de propiedades
//object.value(o) devuelve una array de valores
//object.entries(o) devuelve array de pares [propiedad,valor]
console.log(Object.keys(perro));
console.log(Object.values(perro));
console.log(Object.entries(perro));

//DESESTRUTURACION DE OBJETOS
// la asignacion desestruturante tambien funiona con objetos
let {name:n,"su amo":amo}=perro;// debemos tener los nombres de las variables del objeto  y si deseamos asignarle un alias (en el coso de la propiedad espaciada si o si tengo q darle un alias)
console.log(n,amo);
//pudo darle valores predeterminados
let {vacunas=false, name:nom="Persa","su amo":duenio}=perro;
console.log(vacunas);// no existe propíedad usa valor predeterminado
console.log(nom);//existe NO usa valor predeterminado
console.log(duenio);
//tambien podemos solo extraer lo que queremos no todas las propiedades
let {name:nombreMascota}=perro;
console.log(nombreMascota);
//podemos usar el patron rest ... para almacenar el resto de las propiedades 
let {"su amo":Amo,...resto}=perro;
console.log(resto);// deberia estar el resto de las propiedades que no sea su amo q ya esta asigna a una variable
// si tenemos un ibjeto que tiene otro objeto anidado,debera tener la misma estructura que los valores q deseamos extraer
let complejo={
    tam:{
        alto:100,
        largo:200,
    },
    colores:['rojo','verde'],
};
let {tam:{alto,largo},colores:[item1,item2]}=complejo;
// console.log(tam);//no se encuentra
console.log(alto,largo);
//  console.log(colores); //no se encuentra
console.log(item1,item2)
// si tenemos una funcion con muchos argumebto podemos pasar los arguemntos como un objeto y la funcion inmediatamente los desestrurara
function show({title,alto,largo,anio})
{
    console.log(title);
    console.log(alto);
    console.log(largo);
    console.log(anio);

}
let muchos={
    title:"Mi titulo",
    alto:400,
    largo:1000,
    anio:2024
}
show(muchos);


//DESCRIPTORES DE ACCESO
// hay 2 tipos de prpiedades de objetos:
//- propiedades de datos
//-propiedades de acceso o accesors. son funciones q se jecutan para obtener(get) y asignar(set)
//un valor, pero que para codigo externo se vea normales

let obj={
    nombre:"Gisele",
    apellido:"Medina",
    //desde fuera una propiedad de acceso se parece normal, la llamamos como una propiedad normal sin ()
    get nombreCompleto()
    {
        return this.nombre+", "+this.apellido;
    },
    set nombreCompleto(value)
    {
        [this.nombre,this.apellido]=value.split(", ")
    }
}

console.log(obj.nombreCompleto);// get
obj.nombreCompleto="Rosa, Leal";// set 
console.log(obj.nombreCompleto);

//PROTOTIPOS Y HERENCIA
/*la herencia de prototipos permite a tomar un objeto con sus propiedades y métodos
y extenderlo con ligeras variantes  
PROTOTIPO
en js los objetos tiene un propiedad oculta PROTOTYPE que puede ser null o hacer referencia 
a otro objeto llamado prototipo
Cuando leemos una propiedad de object, si Js no la encuentra alli la toma del prptotipo.
Esto se llama herencia prototípica. 
la propiedad Prototype podemos configuararla con:
- usar __proto__ NO se recomienda usar

*/
let animal={
    come:true,
};
let conejo={
    salta:true,
};
conejo.__proto__=animal;// establecemos q animal es el prtotypo de conejo, de esta forma las propiedades y metodos de animal estan automaticamente dispinible para conejo. Esto se llama cadena prototipal(no puede ser circular y solo puede haber 1)
console.log(conejo.come);//propiedad del prototypo si  NO la encuentra inmediatamente en el OBjeto , la busca en el prototipo
// THIS ,no importa donde se encuentre el método o propiedad(en el objeto o prototipo), la llamada a un metodo this siempre es el obejto antes del punto
//Si llamamos a obj.method(), y method se toma del prototipo, this todavía hace referencia a obj. Por lo tanto, los métodos siempre funcionan con el objeto actual, incluso si se heredan.
//FOR IN , el metodo for in tambien itera sobre las propiedades heredadas
for (const key in conejo) {
    console.log(key);// salta y come
    
};
//PRMITIVOS, no son objetos pero si tratamos de acceder a suss propiedades , se cream los objetos contenedores temporlaes q proporcionan metodos 

/*
- usar la funcion OBject-getPrototypeof y OBject.setPrototypeof
*/

//CONTRUCTOR NEW, si necesitamos crear varioas objetos similares podemos hacerlo con el contructor de funciones y el operador new
/*Una funcion constructora es una funcion normal que debe ejecutarse con el operador new y su nombre comienza con Mayuscula */
function Planta(nombre)
{
    this.nombre=nombre;
    this.color="";
}
let plantita=new Planta("Palmera");//cuando una funcion es ejecutada con new :
// 1 se crea un objeto vacio en memoria y se asigna a this
//2 se ejecuta el cuerpo de la funcion q puede modifiucar el this y agregar propiedades
//3 se devuelve el valor de this POR ESO NO USAMOS return , si lo colocamos y devuelve algo esto anula this al devolver algo
console.log(plantita.nombre);
console.log(new Planta("Rosa").nombre);
//el principal proposito del cosntructor es implementar codigo de creacio de objetos reutilizables
