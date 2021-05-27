
//recursividad: consiste en funciones que se llaman a sí mismas, evitando el uso de bucles y otros iteradores. 

//calcular el factorial de un nùmero
//ejemplo factorial de 5 = 5*4*3*2*1

function factorial(num) {
    if (num == 0 || num == 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
        //5 * 4
        //20 * 3
        //60 * 2
        //sale del ciclo porque num=1
    }
}
console.log(factorial(5));






//sin usar recursividad:
function factorialSinRecursividad(num) {
    let total = 1;
    for (let i = 0; i < num; i++) {
        total = total * (num - i);
    }
    return total;
}
console.log(factorialSinRecursividad(5));
