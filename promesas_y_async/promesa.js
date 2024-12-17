//PROMESA es un objeto especial enJS que permite manejar la asincronia
//SINTAXIS para la construccion de un objeto promesa es
let promesa=new Promise(function(resolve,reject)
{
    //la funcion psada en new Promise(ejecutor) se llama EJECUTOR, cuando se crea la promeas el ejecutor corre 
    //automaticamente intentado realizar una tarea(este contiene el codigoq deberia producir un resultado)
    //resolve,reject son callback. Cuando el ejecutor obtiene el resultado, debe llamar a:
    // - resolve(valor) si el trabajo finalizo
    // -reject(error) si ocurrio un error
    setTimeout(()=>resolve("Resolve promesa"),5000);
});
// el objeto promesa devuelto por el constructor tiene las propiedades:
//-state 
//result que incialmente es undefined pero despues puede ser el valor de resolve o el eeror de reject

//CONSUMIDORES then, y catch 
// unobjeto promesa sirve como enlace entre el ejecutor y las funciones consumidoras (q resiven el resultado o un erro)
promesa.then(console.log);// maneja el resultado de resolve
let promesaError=new Promise(function(resolve,reject){
    setTimeout(()=>reject(new Error("ERROR en promesa")),2000);
});
promesaError.catch(console.log).//maneja el error
 finally(()=>console.log("Finally"));
//FINALLY , tambien podemos poner la clausula finally que se ejecuat SIEMPRE ya sea se resulva o rechaze la promesa, la idea es menejar la limpieza y finalizacion 
// finally NO tiene argumentos , no esta destinado a procesar el resulatdo de una promesa, si no hacer un limpieza cuando se haya resulto

//ENCADENAMIENTO DE PROMESAS
//cuando tenemos una secuencia de tareas asincronas podemos usar el enacdenamiento de promesas
// let promesaEncadenada=new Promise(function(resolve,reject){
//     setTimeout(()=>resolve(1),6000);
// }).then(function(result){//se llama al manejador que a si vez crea una nueva promesa 
//     console.log(result);//1
//     return result*2;
// }).then(function(result){ //cada llamada a promise.then devuelve una nueva promesa por lo que se llama al siguiente then
//     //todos los THEN en la misma promesa obtienen el mismo resultado

//     console.log(result);//2
//     return result*3;
// }).then(function(result){
//     console.log(result);//6
//     return result;
// });
// promesaEncadenada.then(console.log);
// //FETCH , en programacion fronted las promesas a menudo se usan para solicitudes de red
// //let promise=fetch(url) esto hace una solicitud de red a la URL y devuelve una promesa
// //la promesa se resulve con un objeto RESPONSE  canetes de que de descague la respuesta completa
// // si queremos la respuesta complte debemos llamr al metodo response.text() que devuelve una promesa 
// fetch("https://jsonplaceholder.typicode.com/todos").
// then(function(response){//se ejecuta cuando el servidor remoto responde
// return response.text();//retorna una nueva promesa q se resuelve cuando se obtiene el resultado completo
// }).
// then(function(text){
//     //aca tengo el contenido del la lectura
//     console.log(text);
// });

// fetch("https://jsonplaceholder.typicode.com/todos").
// then(function(response){//se ejecuta cuando el servidor remoto responde
// return response.json();//retorna una nueva promesa q se resuelve cuando se obtiene el resultado completo con el json ya hecho
// }).
// then(function(json){
//     //aca tengo el contenido del la lectura como objeto
//     console.log(json);
// });
let promiseFetch=fetch("https://jsonplaceholder.typicode.com/todas/1").then((response)=>response.json());
promiseFetch.then(console.log);

//MANEJO DE ERROR CON PROMESAS, cuando una promesa es rechazada y esta encadenada, el control salta al manejador de rechazo mas cercano, el cath no tiene por q escribirse inmediatamente despues de la promesa 
//puede aparecer despues de uno o varios then,
// si una respuesta fue correcta pero la respuesta no es un json valido la forma mas facil es agregando un catch al final de la promesa
fetch("https://jsonplaceholder.typicode.com/todas/a")
.then(response=>{
    //if(!response.ok) throw new Error(response.status)
    //response.ok: Es una propiedad de Response que devuelve true si el status code está entre 200 y 299. Si el servidor devuelve 404, response.ok será false.

    if(!response.ok)return Promise.reject("URL NO Valida"); // PROMISE.reject crea una promesa rechazada Promise.resolve(value) CRea una promesa resuelta con el resultado en value

        return response.json();
})
.then(texto=>console.log(texto))
.catch(error=>console.log("ERRRRRRORRRRR",error)); // el catch captura tanto el reject como algun ERROR ocurrido en los then
//NOTA si no verifico el stado la api retorna {} tengo q verificar q  tirar un error para q lo capture el catch

