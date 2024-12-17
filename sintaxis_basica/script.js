//declaracion de variables let 
let nombre="Gisele";
let edad=50;
// let edad=3;no se puede volver a declarar
let leGustaProgramar=true;
console.log(leGustaProgramar);
console.log(edad);
edad=edad+10;
leGustaProgramar=false;
console.log(leGustaProgramar);
console.log(edad);
//declariacion de constante 
 const nombre2="Anya";
 const edad2=70;
//  edad2=33; ERROR
//  nombre2="Pepe"; //ERROR 
 console.log(edad2);
 console.log(nombre2);

 //declaracion de variable var
 var nombre3="Damian";
 var edad3=55;
 var edad3=4;//se puede volver a declarar a dif de LET
 console.log(nombre3);
 console.log(edad3);
 nombre3="Demi";
 edad3="Cambio tipo";
 console.log(nombre3);
 console.log(edad3);

 //tipos de datos
 let numero=1.2;
 let texto='cadena';
 let booleano=false;
 let sinDefinir;
 let nulo=null;

 console.log(typeof(numero));
 console.log(typeof(texto));
 console.log(typeof(booleano));
 console.log(typeof(sinDefinir));//undifined
 console.log(typeof(nulo));//object


 //operadores
 let a=4;
 let b=5;
 console.log(a+b);
 console.log(a-b);
 console.log(a*b);
 console.log(a/b);
 console.log(a%b);
 console.log(a>b);
 console.log(a<b);
 console.log(a=="4");// true por que lo castea a string a a
 console.log(a==="4"); // false por que hace una comparacion por tipo sin transformar ninguno de los operandos

 //concatenacion de string
 let firstName="Clara";
 let lastName="Leal";
 console.log(firstName+" "+lastName); //concatena 
 console.log(`${firstName} ${lastName}`);//template literal con alt+96 ` 

 //operadores logicos

 let esVardad=true;
 let esFalso=false;
 console.log(esVardad && esFalso);//false 
 console.log(esVardad|| esFalso);// true


 //prompt alert con cuadro de texto que retorna lo escrito ahi ,segundo parametro escribe un valor por defecto en el cuadro de texto
 let n1=Number(prompt("n1"));
 let n2=Number(prompt("n2"));
 //is nana me dice si es  NO numerico
 if(isNaN(n1) || isNaN(n2))
 {
    console.log("isNAN");

 }else{

    console.log(n1+n2);
    console.log(n1/n2);
    console.log(n1-n2);
    console.log(n1*n2);
 }


 let primerNumero=Number(prompt("primer numero"));
let segundoNumero=Number(prompt("segundo numero"));
let operacion=prompt("Elige operacion +,-,/,*");
switch (operacion.trim()) {
    case '+':
        console.log(primerNumero+segundoNumero);
        break;
        case '-':
        console.log(primerNumero-segundoNumero);
        break;
        case '/':
        console.log(primerNumero/segundoNumero);
        break;
        case '*':
        console.log(primerNumero*segundoNumero);
        break;
        
    default:
        console.log("operacion invalida:(")
        break;
}
 


 




