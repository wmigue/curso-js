### Promise.allSettled 

```javascript
//tengo varias promesas
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 600, 'hola'))
const promise2 = new Promise((resolve, reject) => setTimeout(reject, 400, 'errores de api'))
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, 'error en DB'))
//paso todas las promas en forma de array, se ejecuta cada una y se retorna si fue resuelta o rechazada, a diferencia de promises.all() en la que si una falla, las siguientes en cola no se ejecutan.
Promise.allSettled([promise1, promise2, promise3])
  .then((results) => results.forEach((result) => console.log(result)))

```

### Promise.all 

```javascript

//si una de las promesas falla, la primera que termine su ejecucion, en este caso la de 100ms, hace un break y retorna el error. si hubiera mas promesas en cola directamente NO las ejecuta porque ya encontro un error.
Promise.all([promise1, promise2, promise3])
  .then((results) => console.log(result)).catch(error=>console.log(error))

```