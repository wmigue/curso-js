
const miFuncion = function (){
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response=>response.json())
      .then(respuesta=>console.log(respuesta[0].body))
}

miFuncion()

