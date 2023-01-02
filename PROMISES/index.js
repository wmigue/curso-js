//PROMESAS EN JS

const getDatos = async (ubicacion) => {
  const response = await fetch(ubicacion);
  const json = response.json();
  return json;
};

const url = 'https://jsonplaceholder.typicode.com/users';


const resolver = (res, rej) => {
  getDatos(url).then(d => {
    if (d.length > 0) {
      res(d)
    } else {
      rej("ERROR: sin datos")
    }
  })
}

let myPromise = new Promise(resolver)

//funcion que maneja si resuelve correctamente.
const handleResolve = (data)=>{
  console.log(data)
}

//funcion que maneja si no se resuelve o hay algun error.
const handleReject = (data)=>{
    console.log(data)
}

myPromise.then(handleResolve, handleReject)




