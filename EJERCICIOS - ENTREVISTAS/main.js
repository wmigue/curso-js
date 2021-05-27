

//crear objeto con método decir mi nombre.
console.log("ejercicio 1 ***************")

const objeto = {
    nombre: "miguel",
    decir: () => console.log("mi nombre es: " + objeto.nombre)
}

objeto.decir();

//freezar el nombre del objeto:
Object.freeze(objeto);
objeto.nombre = "nuevo";
objeto.decir();















//ordenar los "X" ciudades que mas se repiten:
console.log("ejercicio 2 ***************")

const ciudades = [
    "formosa",
    "clorinda",
    "chaco",
    "formosa",
    "formosa",
    "formosa"
];

function masRepetidas(x) {

    const objetoMatch = {};

    ciudades.forEach(c => {
        objetoMatch[c] = !objetoMatch[c] ? 1 : objetoMatch[c] += 1
    })

    return Object.keys(objetoMatch)
        .map(city => ({ name: city, times: objetoMatch[city] }))
        .sort((a, b) => { b.times - a.times }) //ordena mayor a menor
        .slice(0, x) //solo 5 primeros paises
        .map(city => console.log(city.name + ":" + city.times)) //muestra solo los nombres.
}


masRepetidas(2);











//contar la cantidad de veces que se repite cada palabra.
//uso un diccionario, para hacer mas eficiente la busqueda.
console.log("ejercicio 3 ***************")

cadena = `Un planeta es un objeto astronómico que orbita 
una estrella y que es lo suficientemente masivo como para ser redondeado por su propia
 gravedad, pero no lo suficientemente masivo como para causar fusión termonuclear, y que 
 ha despejado su región vecina de de planetesimales!.`;



const Procesado = (cade) => {
    let dic = {}
    const cad = cade.toLocaleLowerCase().replace(/[,.!\n'']/g, "").split(" ") //formateo las palabras del string.

    for (let c of cad) {
        if (c in dic) {
            ++dic[c]
        } else {
            dic[c] = 1
        }
    }
    console.log(dic)
    console.log(cad)
}

Procesado(cadena)