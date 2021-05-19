"strict mode";

//con clausuras
//Es decir, tenemos una función que utiliza un valor que fue declarado fuera de su contexto: 
//un closure.
const cambiarTamaño = tamaño => {
    return () => (
        document.querySelector(".texto").style.fontSize = `${tamaño}px`
    )

}

px12 = cambiarTamaño(12)
px16 = cambiarTamaño(16)
px20 = cambiarTamaño(20)

document.querySelector(".p12").addEventListener("click", px12)
document.querySelector(".p16").addEventListener("click", px16)
document.querySelector(".p20").addEventListener("click", px20)





//sin clausuras
/* const cambiarTamaño = tamaño => {
    document.querySelector(".texto").style.fontSize = `${tamaño}px`;
}

document.querySelector(".p12").addEventListener("click", () => cambiarTamaño(12));
document.querySelector(".p16").addEventListener("click", () => cambiarTamaño(16));
document.querySelector(".p20").addEventListener("click", () => cambiarTamaño(20)); */

