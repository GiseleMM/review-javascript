
console.dir(document.body);
console.log(document.getElementById("getElement"));//traigo por el id
console.log(document.querySelectorAll("h2"));//coleccion que coincida con el selector

console.log(document.querySelector("h2"));//el primer elemento que coincida con el selector css
for (const element of document.body.children) {
    if(element.matches("h3"))// devuelve true si el elemnto coincide con el css dado
    {
        console.log(element);
    }
    
}
console.log(document.getElementsByTagName("li")); //devuelve los elementos con la etiqueta dada

console.log(document.body.firstChild.tagName);// undefined por que solo funciona con nodos elemento  no los otros nodos
console.log(document.body.firstChild.nodeName);
document.getElementById("innerHtml").innerHTML="Cambio el innerHtml";
//pero en realidad no agrega si no que hace una sobreescritura completa(elimina el contenido anterio y escribe el nuevo con la concatenacion)
document.getElementById("innerHtml").innerHTML+=" agrego el innerHtml";

console.log(document.getElementById("innerHtml").outerHTML);// contiene el elemnto en si
console.log(document.getElementById("innerHtml").outerHTML='<p>outerHtml:)</p>')// si cambio no cambio el contenido si no remplazo el elemento en el dom
console.log(document.getElementById("textContent").textContent);// me devuelve solo el texto dentro del nodo (incluyendo lo que tiene otros nodos hijos)
document.getElementById("hidden").hidden=true;
//puedo agregar propiedades
document.body.miData={
    titulo:"Boca Juniors"
};
console.log(document.body.miData.titulo);
//puedo agregar métodos
document.body.queSoy=function(){ console.log(this.tagName)};
document.body.queSoy();//llamada a la funcion

//atributos que no se convirtieron en propiedades al no ser estandar
console.log(document.getElementById("attributes").attributes);//collecion
console.log(document.getElementById("getAttribute").getAttribute("get"));
console.log(document.getElementById("setAttribute").setAttribute("set","nuevo"));
console.log(document.getElementById("setAttribute").getAttribute("set"));
console.log(document.getElementById("hasAttribute").hasAttribute("has"));

console.log(document.getElementById("removeAttribute").removeAttribute("remove"));
console.log(document.getElementById("removeAttribute").hasAttribute("remove"));
//Dataset 
console.log(document.querySelector("[data-num]").dataset.num); // obtener valor
document.querySelector("[data-num]").dataset.nuevo="nuevo"; // agregar dataset
console.log(document.querySelector("[data-num]").dataset.nuevo); // obtener valor
document.querySelector("[data-num]").dataset.nuevo="nuevo2"; // modificar
console.log(document.querySelector("[data-num]").dataset.nuevo); // obtener valor

//crear
const div=document.createElement("DIV");
div.innerHTML="<p> Creo elemento</P>"
//inserto
// document.body.after(div);//despues del nodo
// document.body.before(div);//antes del nodo
// document.body.append(div);// al final 
// document.body.prepend(div);//al incio

//eliminando nodo
document.body.append(div);
setTimeout(()=>{
    div.remove();
},3000);

//clonando nodo
let clonado=document.getElementById("clone").cloneNode(true);// clono el nodo entero
clonado.querySelector("h5").innerHTML="Titulo clonado";// selecciono el titulo 
document.getElementById("clone").after(clonado);// inserto el clonado despues del original

// documentFrangment

let ol= document.createElement("OL");
let frag=new DocumentFragment();
for (let index = 0; index < 4; index++) {
    const element = document.createElement("LI");
    element.innerHTML=index+" creado con fragment";
    frag.append(element);
}
ol.append(frag);
document.body.append(ol);

let table=document.createElement("TABLE");
let fragmentoTable=new DocumentFragment();
let thead=document.createElement("THEAD");
let tbody=document.createElement("TBODY");
let fecha=new Date(2024,11,12);
console.log(fecha);
//tengo que poner 0 para que comienze a contar desde el dia ultimo del mes anterior
//Aquí estás creando una fecha con el mes 11 (diciembre) y el día 0. Esto significa:
//"Dame el último día del mes anterior a diciembre."
// el resultado de getDate() será 30, que es el número de días en noviembre.
let diasMes=new Date(2024,11,0).getDate();
console.log(diasMes);
let diasSemana=['D','L','M','M','J','V','S'];

let tr=document.createElement("TR");
diasSemana.forEach(element => {
let th=document.createElement("TH");
th.innerHTML=element;
tr.append(th);
    
});
thead.append(tr);//cargo los dias de la semana
fragmentoTable.append(thead);// cargo en el fragmento la cabecera


//creo filas del calendario
let dia=1;
let primeraSemana=true;
while(dia<=diasMes)
{
    let trBody=document.createElement("TR");
    for (let index = 0; index < 7; index++) {
        let td=document.createElement("TD");
        //estás pidiendo el primer día del mes que quieres  y con día de la semana (getDay())
        if(primeraSemana && index<new Date(2024,11-1,1).getDay())
        {
            td.innerHTML="🐶​";

        }else if(dia <=diasMes)
        {
            td.innerHTML=dia;
            dia++;
        }
        trBody.append(td);

        
    }
    primeraSemana=false;
    tbody.appendChild(trBody);

}
fragmentoTable.append(tbody);
table.append(fragmentoTable);
document.body.append(table);
for (let index = 1; index <= diasMes; index++) {
    //12 -1 por q los meses en la new Date estan ordenasdos desde 0 :enero
    let f=new Date(2024,11-1,index).getDay();//obtengo el dia
    console.log(`el dia numero ${index} del mes 12 del año 2024 es ${diasSemana[f]}`)
    let trBody=document.createElement("TR");
    let td=document.createElement("TD");

    
}


document.getElementById("clases").classList.add("miClase");// agrega clase
console.log(document.getElementById("clases").classList.contains("miClase"));
setTimeout(()=>{
document.getElementById("clases").classList.toggle("miClase");// quitar si tiene , agregar si no
document.getElementById("clases").classList.add("otraClase");


},5000);
document.getElementById("style").style.display="none";
document.getElementById("style").style.color="blue";
document.getElementById("style").style.fontSize="2rem";

setTimeout(()=>document.getElementById("style").style.display="",5000);


document.forms[0].addEventListener("click",event=>{
    console.log("TARGET:",event.target.tagName);//el objetivo
    console.log("this:",event.currentTarget.tagName);//el manejador
    if(event.target.matches("button")) event.preventDefault();// si es el boton submit no ejecuto la accion prederterminada del navegador

})

console.log(document.forms[1]);//accedo por en numero de formulario q hay en la pag ,empezando en cero
let miForm=document.forms.miForm;//acceso a formulario por el name
console.log(miForm);
console.log(miForm.elements);
console.log(miForm.elements.direccion);//accedo a un elemento del form desde el form
let club=miForm.elements.club;
console.log(club.form);// redireccion inversa