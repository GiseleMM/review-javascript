//Async/awiat es uyna sintaxix especial para trabajr con promesas de una forma mas confortable
//la palabra clave  ASYNC puede ser ubicada delate de una funcion .Cuando ese es el caso , indica que la funcion devolvera una promesa
async function f()
{
    return 1;// es funcion devuelve una promesa con el resultado 1

    // return Promise.resolve(1); es lo mismo solo que EXPLICITO
}
f().then(console.log);
console.log(f());
//ASYNC se asegura q la funcion devuelva una promesa y las no promesas las transforma en una

//AWIAT solo trabaja dentro de funciones async , hace q js espera hasta q la promesa responda y devuelva su resultado. Pero no detiene el floju de la apliacion si no q lo cede a quien invoco la funcion async
async function f2(){
    let promesa=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("BOCAAA"),2000);
    });
let resultado=await promesa;// espera 
// a que termine esta promesa para seguir ejecutando esta funcion y mientras sigue desde donde se llamo a la funcion asyncrona
// la ejecucion de la funcion es pausada y se reanuda cuando la promsa tenga el resultado
console.log(resultado);
}
console.log("ANTES DE F2");
f2();
console.log("DESPUES DE F2");
// los navegadores modernos aceptan el await a nivel superior si es un modulo.
// let response=await fetch(...);
//let user=await respose.json();

//si no usamos modulos o lo uasmos en navegadores antiguos podemos envolver el codigo en una funcion async anonima
(async()=>{
    let promesa=new Promise((resolve,reject)=>{
        setTimeout(()=>resolve("ASYNC ANONIMA"),3000);
       
    });
    let r=await promesa;
    console.log(r);
})(); // ejecuto la direccion de memoria que contiene la funcion anonima

//METOD DE CLASE  ASYNCRONO
class EjemploAsync{
    async esperar()
    {
        let p=new Promise((resolve,reject)=>{
            setTimeout(()=>resolve("METODO ASYNC"),4000);
        })
        return await p; //o podria hacer return await Promise.resolve("METODO ASYNC")
    }
}
let cEjemplo=new EjemploAsync();
cEjemplo.esperar().then(console.log);//llamo a metodo q retorna promesa y lo manejo con then
(async()=>{
    let r=await cEjemplo.esperar();
    console.log(r);

})();//llamo a metodo de clase que retorna promesa y manejo con async anonimo


//MANEJO DE ERROR , si una promsa se rechaza ,dispara un error  como si ubiera una throw
async function  f3() {
    await Promise.reject(new Error("Error F3"));
    //es lo mismo que
    // throw new Error("Error F3");
    
}
// f3(); si no lo manejamos nos detiene el codigo, para ello usamos TRY CATHC
async function  f4() {
    try {
        let r=await fetch("https://jsonplaceholder.typicode.com/todas/a");
    //   if(!r.ok) await Promise.reject("Error url invalida"); NO FUncion con return Promise.resolve si pones await Promise.resolve... si funciona pero se recomienda throw
if(!r.ok) throw new Error("URL INVALIDA");
        let u=await r.json();
        console.log(u);
    } catch (error) {
        console.log(error);
        
    }
    
}
f4();
