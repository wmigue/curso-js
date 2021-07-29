
const miArray = [
    {
        id: 1, name: 'migue', edad: 40
    },
    {
        id: 2, name: 'miguelo angelo', edad: 20
    },
    {
        id: 3, name: 'norberto', edad: 10
    },
    {
        id: 4, name: 'migue', edad: 8
    }
]





console.log("METODO FIND") //busco coincidencias=select where x=x
miArray.find((elemento) => elemento.edad > 40 ? console.log(elemento.name, elemento.edad) : console.log("No hay > de 40"))

console.log("METODO SOME")// alguno cumple la condicion???
let resultado = miArray.some((el) => el.id === 2)
console.log(resultado) //true

console.log("METODO INCLUDE")// se incluye el termino en alguno???
miArray.some((el) => el.name.includes('mig') ? console.log(el.name) : null)

console.log("METODO EVERY")// se incluye este termino en todos???
resultado = miArray.every((el) => el.name.includes('mig'))
console.log(resultado) //false.

console.log("METODO FILTER")// TRAEME EL OBJETO COMPLETO CUANDO CUMPLE LA CONDICION.
resultado = miArray.filter((el) => el.name.includes('nor'))
console.log(resultado)

console.log("METODO REDUCE")// ultil para acumular, crear copias de por ej. de todos las propiedades name.
resultado = miArray.reduce((elemento, iterador) => {
    return [...elemento, iterador.name]
}, [])
console.log(resultado)



console.log("OBJETO SET") //El objeto Set permite almacenar valores únicos de cualquier tipo. entonces crea array sin duplicados. Array.from: crea un array con lo que le pasamos.

resultado = miArray.reduce((elemento, iterador) => {
    return Array.from(new Set([...elemento, iterador.name]))
}, [])
console.log(resultado)


//:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

let numeros = [5, 2, 8, 1]
let fruits = ["Banana", "Orange", "Apple", "Mango"]

console.log("METODO SORT")
console.log(numeros.sort()) //ordenar numeros de menor a mayor.

console.log(
    numeros.sort((a, b) => b > a) //mayor a menor.
)


console.log("METODO SPLICE") //borrar elementos, splice(posicion, cantidad)
resultado = fruits.splice(2, 2) //Apple,Mango
console.log(resultado)



console.log("METODO CONCAT") //une dos arrays
resultado = miArray.concat(numeros)
console.log(resultado)


console.log("METODO indexOf") //busca posicion de un elemento.
fruits = ["Banana", "Orange", "Apple", "Mango"]
console.log(fruits.indexOf("Apple")) // 2


console.log("METODO JOIN") // Une elementos, indicando un separador ej. ; , - . etc.
console.log(fruits.join('---'));

console.log("METODO POP") // elimina el último elemento de un array y lo devuelve
console.log(fruits.pop())
console.log(fruits)


console.log("METODO PUSH") // AGREGO ELEMENTO AL ARRAY
console.log(fruits.push("Migue"))
console.log(fruits)


console.log("METODO REVERSE") //Invierte el orden de los elementos del array
console.log(fruits.reverse())

//shift() elimina el primer elemento y lo devuelve.
//slice()  frutas.slice(1,3)  Selecciona parte de un array y devuelve su contenido


console.log("METODO toString") //  Convierte un array en string o Convertir un número en una cadena.
let array = ["lunes", "martes", "domingo"]
console.log(array.toString())

console.log("METODO SPLIT")//Convierte un string en un array. el segundo argumento es la cantidad de elementos,
let string = "Hoy, es un gran dia"
console.log(string.split(" ", 4))

