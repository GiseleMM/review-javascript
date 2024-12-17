if (true) {
    console.log("if true");
} else {
    console.log("else false");
}
let letra = 'b';
switch (1) {
    case "B":
        console.log("B");
        break;

    case "b":
        console.log("b");
        break;
    case "1":
        console.log("1 letra");
        break;
    case 1:
        console.log(1, "numero");//es estricto compara por valor y tipo
        break;

    default:
        break;
}

let letras=['a','b','c','d'];
for (let index = 0; index < letras.length; index++) {
    const element = letras[index];
    console.log(index,element);
    if(element=='b')break;//rompo el bucle
   

}
let index=10;
//se ejecuta si cumple la comdicion
while(index>0)
{

    if(index==5)
    {
        index-=1;
        continue;

    }
    console.log(index);
    index-=1;

}

//se ejecuta al menos una vez
do {
    console.log(index);
    index+=1;
    
} while (index<=10);//se evalua la condicion

//for in itera una variable especifica sobre las propiedades de un objeto
let objeto={
    nombre:"rosa",
    edad:33,
    nacionalidad:"argentina"
};
//Itera sobre los nombres de la propiedades de un objeto
for (const key in objeto) {
    if (Object.prototype.hasOwnProperty.call(objeto, key)) {
        const element = objeto[key];
        console.log(key,element);
        
    }
}
let array=[1,2,3,4,5];
array.hola="Mundo";
//for of itera sobre los valores de las propiedades y ademas itera sobre cualquier objeto iterable (array,set,map)
for (const element in array) { //me dice los key 0,1,2,3,4,hola
    console.log(element);
}
for (const element of array) {//me dice los valores 1,2,3,4,5 NO dice MUNDO por que solo itera en las propiedades iterables
    console.log(element);
}