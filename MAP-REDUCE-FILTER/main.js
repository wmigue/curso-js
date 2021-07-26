
const Arreglo = [1, 2, 5, 8]


const Arreglo2 = [{
    nombre: "migue",
    cel: 12345679
},
{
    nombre: "eugim",
    cel: 987654321
}]


//iteramos algun arreglo.
console.log("EJEMPLO DE MAP")
Arreglo.map((a) => { console.log(a) })
Arreglo2.map((a) => { console.log(`el nombre es:  ${a.nombre} `) })

//opero con cada elemento del arreglo, acumulamos un total.
console.log("EJEMPLO DE REDUCE")
const reduce = Arreglo.reduce((acum, num) => { return acum * num })
console.log(reduce)

//filtro algun dato en un json. "select where dato = dato"
console.log("EJEMPLO DE FILTER")
const filter = Arreglo2.filter((arr) => { return arr.nombre === "migue" })
console.log(filter)



