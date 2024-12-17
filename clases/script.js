
/*
CLASES
las clases son plantillas para la creacion de objetos de datops segun un modelo,
Se usan para representar entidades o conceptos, cada clase define un conjunto de variables (el estado) y 
métodos para operar con dichos datos(el comporatmiento)

CLASS, es un constructor que intrudce caracteristicas de la prgramacion orientada a objetos,
usamos el operador new para crear un nuevo objeto con todas sus propiedades y metodos y inmediatament se llama al metodo constructor q inicializa al objeto
*/
class Mascota {

    name="";// campo de calse q estan en los objetos individuales no compartidas en el mascota.prototype como los metodos , los getter y los setter
    constructor() {
        console.log("Constructor mascota");
        this.name="";
        this.edad=0;
    }
    metodo1() {
        console.log(this);
    }
    metodo2()
    {
        console.log("Metodo dos MASCOTAS");
    }
    get Name()
    {return this.name;}
    set Name(value)
    {
        this.name=value;

    }
//GETTER Y SETTER, al igualq los objetos literales , las clases pueden tener propiedades de acceso

}
console.log(new Mascota());// se crea un objeto , se ejecuat el contructor con los argumentos dados e inicliaza el objetos y coloca los metodos en el prototypo
// los metodos de clase no son enumerables, si hacemos un for in NO aparecen
for (const key in new Mascota()) {
   console.log(key);
}
// en mascota.prototipe tendria el contructor, metodo1,metodo2 y los getter y seter
// en la instacia de mascota tendriamos la propiedad name
// en js una clase es un tipo de funcion
console.log(typeof Mascota);
console.log(Mascota.prototype);//{} objet es el prototipo
/*
HERENCIA,es el modo de que una clase extienda de otra , se usa la palabra clave EXTENDS

 */
class Perro extends Mascota{
    peso;
    metodoPerro()
    {
        console.log(this.Name);
    }
    //los metodos q no estan especificados se toman tal cual de la clase heredada
    // pero si especificamos nuestro propio metodo es el q se utilizara, a veces queremos ampliar su funcionalidad, para ello
    // debemos llamar al metodo padre a traves de SUPER super.metod llama al metodo padre super()llama al constructor padre solo dentro del constructor hijo
    metodo2()
    {
        super.metodo2();
        console.log(" metodo sobreescrito PERRO");
    }



}
let perrito=new Perro();
perrito.Name="Gordo";//set de padre
perrito.peso=200;
console.log(perrito);
// extend establece a Perro.prototype a Mascota.prototype , entonces si no encentra un metodo o propiedad en el objeto lo busca en su prototipo
//perro.prototype tendria constructor y metodPerro
//perro instancia tendria peso
// el resto provienen de la propiedad prototype q se establecio como Mascota
perrito.metodo2();

//SOBREESCRIBIR CONSTRUCTOR
// si tenemos un constructor padre que recibe argumentos tenemos q llamar al padre y psarle los argumento para que pueda crearlo

class A{
    constructor(letra)
    {
        this.letra=letra;

    }
}
class B extends A{
    // un constructor derivado debe llamar a super para ejecuar su constructor padre de lo constrario no se creara el objeto para this
    constructor(letra,color)
    {

        super(letra);
        this.color=color;
    }

}
//PROPIEDADES Y METODOS ESTATICOS; si se usa la palabra static estamos declarando como estatico, es decir qe es de la clase y no de una instancia,
//pertenecen a la clase como un todo, no a un objeto particular PERO NO ESTAN DISPONIBLES PARA LOS Objetos indivuales
class User{
    static propiedadEstatica="Propiedad de clase";
    static metodoEstatico()
    {
        console.log("Metodo estatico")

    }

}
//new User().metodoEstatico(); NO es una funcion del objeto
User.metodoEstatico();
console.log(User.propiedadEstatica);
//HERENCIA DE PROPIEDADES Y METODOS ESTATICOS, son heredados
class Admi extends User{


}
Admi.metodoEstatico();
console.log(Admi.propiedadEstatica);

//COMPROBACION DE CLASE INTANCEOF, el operador instanceof permite verificar si un objeto pertence a una clase determinada
//obj instanceof clase
console.log(new User() instanceof Admi);//false
console.log(new Admi() instanceof User);//true
console.log(new Admi() instanceof Admi);//true
console.log(new Admi() instanceof Object);//true


