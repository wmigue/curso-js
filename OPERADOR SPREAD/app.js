"strict mode";
//spread operator: para pasar un array a una lista de argumentos.

let arr1 = ["elemnto 1", "elemento 2"];
let arr2 = [...arr1, "elemento 3", "elemento 4"];

console.log(arr2)

let arr3 = [...arr1, ...arr2]

console.log(arr3)


///////////////////////////////////////

let arr4 = [2, 1, 1, 1]
let reductor = arr4.reduce((acumula, num) => acumula + num)

const sumar = (frase, ...numeros) => {
    console.log(frase)
    console.log(reductor)
}

sumar("la suma da: ", ...arr4)