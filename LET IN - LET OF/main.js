
let miArray = []

const Rescatadora = async () => {

    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    data.map(x => miArray.push(x.title))

    for (let a in miArray) { // me tira la posicion dentro del array, o la clave de cada item.
        console.log(a)
     }

     for (let a of miArray) { // me tira el valor, o lo que contiene cada item.
        console.log(a)
     }

}

Rescatadora()

