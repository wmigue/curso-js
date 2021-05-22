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

for (let i = 0; i < data.length ; i++) {
    personas[i] = new Persona(data[i][0], data[i][1]);
}

//console.log(personas);
//console.log(personas[0].nombre); 



const obtenerPersona = (id, callback)=>{
    if(personas[id]==undefined){
        callback("no se encontró la personita.");
    }
    else{
        callback(null,personas[id].nombre); 
    }
}

//CALLBACK: función pasada como argumento de otra función.
//con "lapersona" nos referimos al callback definido en la otra función.
obtenerPersona(5,(err,lapersona)=>{
  if(err){
      console.log(err);
  } else{
      console.log(lapersona);
  } 
})

