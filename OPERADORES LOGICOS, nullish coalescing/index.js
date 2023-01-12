
const a =null
const b = 100
const c = a ?? b // if a !== null or a !== undefined, c=a else c=b
console.log(c) //100


//Caso False: Si el valor es null/undefined/false/””/0, la primera negación convierte este valor a true. La segunda negación convierte el valor a falso.
//Caso True: Si el valor es object/true/”Value”/1, entonces la primera negación convierte el valor a falso. La segunda cambia el valor a verdadero.
//La primera negación convierte cualquier dato a booleano. La segunda cambia el valor otra vez al resultado deseado:
d=20
!d//false, porque existe, si fuera undefined o null, seria true.
!!d //true, porque estoy negando el booleano primero que es false.


