
const Arreglo = [1, 2, 2, 2]


const Arreglo2 = [{
    nombre: "migue",
    cel: 12345679
},
{
    nombre: "eugim",
    cel: 987654321
}]


//iteramos cada elemento de algun arreglo.
console.log("EJEMPLO DE MAP")
Arreglo.map((a) => { console.log(a) })
Arreglo2.map((a) => { console.log(`el nombre es:  ${a.nombre} `) })


//acumulamos una iteracion.
console.log("EJEMPLO DE REDUCE")
const reduce = Arreglo.reduce((acum, num) => { return acum * num })
console.log(reduce)

const reduce2 = Arreglo2.reduce((acumulado, texto) => {
    return [...acumulado, texto.nombre]
}, []) //inicializo a acumulado como un [], genero una copia de lo que se va acumulando.
console.log(reduce2) // ["migue", "eugim"]


//filtro algun dato en un json. select where dato = dato"
console.log("EJEMPLO DE FILTER")
const filter = Arreglo2.filter((arr) => { return arr.nombre === "migue" })
console.log(filter)



