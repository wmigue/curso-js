//el prototypo object es el padre de todos los objetos, todos heredan de él.
//todos los datos heredan 2 prototipos, el tipo de dato: "string", "number", "objay", "function" etc...etc... y del prototipo object.

//me dice que es de tipo string y los metodos que heredo y puedo utilizar.
let variable = "cadena de caracteres"
console.log(variable.__proto__) // hereda prototipo string  

let variable2 = ["hola", 3, 1234]
console.log(variable2)// objay de 3 elementos
console.log(variable2.__proto__) // hereda prototipo objay
//si pongo variable = 10, me dice que es de tipo número, lo mismo pasa si a variable le asigno un objay, me va a decir que es del tipo objay y los metodos que hereda por ser de tal tipo.


//cuando queremos acceder a un prototipo creado por nosotros lo hacemos a travez de "prototype"
//las functions que creamos por ej, son prototipos propios.
Hablar = function () {
    this.__proto__.decir = (frase) => { //agregando metodo decir
        frase = prompt("ingrese frase")
        frase ? frase : frase = "no definida"
        console.log(frase)
        return this
    }

}


//agregando metodos al prototipo propio Hablar:
Hablar.prototype.decir2 = function () {
    console.log("decir 2 acá...")
}
//agregando metodos al prototipo propio Hablar:
Hablar.prototype.decir3 = function () {
    console.log("decir 3 acá...")
}


console.log(Hablar.prototype) //4to console.log



hablar = new Hablar()
hablar.decir()
hablar.decir2()
hablar.decir3()





obj = { "numero": 15 }
obj.__proto__ = hablar.__proto__ //el objeto "obj" hereda el objeto hablar con sus metodos.
console.log(obj)
obj.decir()
console.log(obj.numero) //15

