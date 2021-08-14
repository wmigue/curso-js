

const traerDatos = async () => {

    const respuesta = await fetch('https://jsonplaceholder.typicode.com/posts')
    const texto = await respuesta.json()
    texto.map(x => { console.log(x.title) }) //traeme todos los titulos del json.

}


const datos = await traerDatos()
console.log(datos)
