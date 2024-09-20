let cantidad = document.getElementById("cantidad");
let boton = document.getElementById("generar");
let contrasena = document.getElementById("contrasena");
let boton1 = document.getElementById("limpiar");
const cadenaCaracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()";

function limpiar(){

    contrasena.value = '';
}


function generar() {

    let numeroDigitado = parseInt(cantidad.value);
    
    if(numeroDigitado < 8) {
        alert("La cantidad de caracteres tiene que ser mayor que 8");
        return;
    }

    let password = '';

    for(let i = 0; i < numeroDigitado; i++) {
        let caracterAleatorio = cadenaCaracteres[Math.floor(Math.random() * cadenaCaracteres.length)];
        console.log(caracterAleatorio)

        password+=caracterAleatorio;
    }
    contrasena.value = password;

    clasificarContrasena(password);

}

function clasificarContrasena(password) {
    const tieneMayuscula = /[A-Z]/.test(password);
    const tieneNumero = /[0-9]/.test(password);
    const tieneEspecial = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    if (password.length > 9 && tieneMayuscula && tieneNumero && tieneEspecial) {
        setTimeout(() => alert('Contraseña muy segura'),100);
    } else if (password.length === 8 && /^[a-z0-9]+$/.test(password)) {
        setTimeout(() => alert('Contraseña poco segura'), 100);
    } else {
        setTimeout(() => alert('Contraseña de seguridad media'), 100);
    }
}







