"strict mode";

//con rest
//Las sintaxis de los parámetros rest nos permiten representar un número indefinido de argumentos como un array.
//siempre los parametros rest van al final de todo.

const suma = ( frase, ...otros) => {
    let resultado=0
    for (let i = 0; i < otros.length; i++) {
        resultado += otros[i]
    }

    console.log( `${frase} ${resultado}` )
}

suma("la suma es: ",4, 2, 1, 1,100)







//sin parametro rest
//se limita a no poder agregar mas numeros en la suma.
/* const suma = (a, b) => {
    console.log(a + b)
}

suma(4, 15)
 */