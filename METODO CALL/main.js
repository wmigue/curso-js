
//le paso a un objeto una propiedas de otro objeto.


persona={
 tomarCerveza: function(argumento){
        console.log("la persona " + this.nombre + " toma " + argumento + " litros de cerveza.")
    }
}


persona2={
    nombre: "migue"
}


// persona.tomarCerveza.call(persona2, 3)
// consola: "la persona migue toma 3 litros de cerveza." 