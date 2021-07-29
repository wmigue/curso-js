"strict mode";


//clousures: Para crear una CLAUSURA (Closure) EN JAVASCRIPT necesitamos 3 ingredientes: una función anidada, una referencia a una variable de un scope superior y una invocación a esta función pero desde otro scope distinto al que fue creada.

//CADA VEZ QUE SE EJECUTA UNA FUNCION EN JAVASCRIPT , SE CREA UN NUEVO ENTORNO DE EJECUCION CON UN NUEVO ENTORNO LEXICO.

//las clousures son funciones que acceden a una variable que esta en un scope de funcion superior.


function crearContador() {
    let contador = 0
    return function incrementar() {
        contador = contador+1
        return contador
    }
}

const contador1=crearContador()  //se crea un entorno lexico.
console.log(contador1()) //1
console.log(contador1()) //2
console.log(contador1()) //3
const contador2=crearContador() //se crea otro entorno lexico.
console.log(contador2()) //1

//como cada contador fue creado en un entorno distinto, solo puede ser modificado por las funciones que pueden acceder a cada uno de esos entornos.





//::::::::::::::::::::::::::::::::::::::::::::::::::::::::: otro ejemplo

function crearImpresoraDeMensajes(tipo, estilos){
    return function(msj){
        console.log(`%c ${tipo}: ${msj} `, estilos)
    }
}

const error=crearImpresoraDeMensajes("ERRORES", 'background:red; color:white;')

//en consola escribir: error("hubo un error")





//::::::::::::::::::::::::::::::::::::::::::::::::::::::::: otro ejemplo




//con clausuras
//Es decir, tenemos una función que utiliza un valor que fue declarado fuera de su contexto: 
//un closure.
const cambiarTamaño = tamaño => {
    return () => (
        document.querySelector(".texto").style.fontSize = `${tamaño}px`
    )

}

px12 = cambiarTamaño(12)
px16 = cambiarTamaño(16)
px20 = cambiarTamaño(20)

document.querySelector(".p12").addEventListener("click", px12)
document.querySelector(".p16").addEventListener("click", px16)
document.querySelector(".p20").addEventListener("click", px20)





//sin clausuras
/* const cambiarTamaño = tamaño => {
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}

document.querySelector(".p12").addEventListener("click", () => cambiarTamaño(12));
document.querySelector(".p16").addEventListener("click", () => cambiarTamaño(16));
document.querySelector(".p20").addEventListener("click", () => cambiarTamaño(20)); */

