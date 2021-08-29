

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
  const fetchData = async (url) => {
    const r = await fetch(url)
    const d = r.json()
    return {
      datosInternet: async () => d, //lo mismo a decir: {return d}
      mensaje: 'despues de los datos, digo esto...'
    }
  }
  
  fetchData('https://jsonplaceholder.typicode.com/todos/1')
    .then((r) => {
      r.datosInternet().then(x => {
        console.log(x)
        console.log(r.mensaje)
      })
    })
  
  
  










