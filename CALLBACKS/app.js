

console.log("************* ejemplo 1 ***************");

function Sumar(a, b, sume) {
    sume(a + b);
}

Sumar(1, 4, r => console.log('El resultado es: ' + r))




console.log("************* ejemplo 2 ***************");


class Persona {
    constructor(nombre, email) {
        this.nombre = nombre;
        this.email = email;
    }
};

const data = [
    ["Miguel", "wmigue@gmail.com"],
    ["Jobs", "Jobs@jobs.com"],
    ["Stevens", "stevens@stevens.com"]
];

const personas = [];

for (let i = 0; i < data.length; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

//console.log(personas);
//console.log(personas[0].nombre); 



const obtenerPersona = (id, callback) => {
    if (personas[id] == undefined) {
        callback("no se encontró la personita.");
    }
    else {
        callback(null, personas[id].nombre); //inicializo la funcion: "elerror" es null, y " lapersona"=nombre
    }
}

//CALLBACK: función pasada como argumento de otra función. fueron reemplazadas por las promesas en javascript.
//con "lapersona" nos referimos al callback definido en la otra función.
obtenerPersona(14, (elerror, lapersona) => {
    if (elerror) {
        console.log(elerror);
    } else {
        console.log(lapersona);
    }
})




console.log("************* ejemplo 3 ***************");
//ejecutamos primero la funcion1, luego la funcion 2 llamando a una funcion dentro de otra, sino se ejecutaria primero la funcion2 luego la funcion1.
// En la actualidad se utilizan promesas javascript para resolver este problema.
//enfocado en la reutilizaciòn de còdigo, ya que si solo ejecutaramos una funcion dentro de otra que no tiene argumentos, no podemos cambiar el argumento "callback1" que refiere a otra función: function funcion1(){.......funcion2();}

function funcion1(callback1) {
    setTimeout(function () {
        console.log("mensaje 1");
        callback1();
    }, 1000)
   
}

function funcion2() {
    console.log("mensaje 2");
}

funcion1(funcion2);

