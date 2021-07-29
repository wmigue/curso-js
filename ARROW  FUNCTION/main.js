/* Funciones Flecha

Una expresión de función flecha es una alternativa compacta a una expresión de función tradicional, pero es limitada y no se puede utilizar en todas las situaciones.

Diferencias y limitaciones:

    No tiene sus propios enlaces a this o super y no se debe usar como métodos.
    No tiene argumentos o palabras clave new.target.
    No apta para los métodos call, apply y bind, que generalmente se basan en establecer un ámbito o alcance
    No se puede utilizar como constructor.
    No se puede utilizar yield dentro de su cuerpo.
 */


const miFuncion = (a) => console.log(`funcion flecha. ${a}`)
miFuncion(123456)