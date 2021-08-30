

datos = [{
    "nombre": "migue",
  }]
  
  
  //usando promesas
  const f = async (x) => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(x)
      }, 1500)
    })
  }
  
  f(datos).then((s) => {
    console.log(s)
    console.log("hey")
  }).then(() => {
    console.log("después de hey , digo otra cosa...")
  })
  
  
  
  

  
  //usando fetch
  const fetchData = async (url, msg) => {
    const r = await fetch(url)
    const d = r.json()
    return {
      datosInternet: async () => d, //lo mismo a decir: {return d}
      mensaje: msg
    }
  }
  
  fetchData('https://jsonplaceholder.typicode.com/todos/1', 'despues de los datos que vienen de una API, digo esto...')
    .then((r) => {
      r.datosInternet().then(x => {
        console.log(x)
        console.log(r.mensaje)
      })
    })
  
  
  










