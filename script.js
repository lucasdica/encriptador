const textoOriginal = document.querySelector(".texto-original");
const mensaje = document.querySelector(".texto-encriptado");
let fondoMensaje = mensaje.style.backgroundImage;
let codigoEncriptador = [["e" , "enter"], ["i" , "imes"], ["a" , "ai"], ["o" , "ober"], ["u" , "ufat"]];

function btnEncriptar(){
    const textoEncriptado = encriptar(textoOriginal.value);
    mensaje.value = textoEncriptado;
    textoOriginal.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(mensajeOriginal) {
    
    mensajeOriginal = mensajeOriginal.toLowerCase();

    for( i = 0; i < codigoEncriptador.length; i++) {
        if(mensajeOriginal.includes(codigoEncriptador[i][0])){
            mensajeOriginal = mensajeOriginal.replaceAll(codigoEncriptador[i][0], codigoEncriptador[i][1]);
        }
    }
    return mensajeOriginal;
}

function btnDesencriptar(){

    const desencriptarMensaje = desencriptar(textoOriginal.value);
    mensaje.value = desencriptarMensaje;
    textoOriginal.value = "";
    mensaje.style.backgroundImage = "none";
}

function desencriptar(mensajeEncriptado){

    for( i = 0; i < codigoEncriptador.length; i++){
        if(mensajeEncriptado.includes(codigoEncriptador[i][1])){
            mensajeEncriptado = mensajeEncriptado.replaceAll(codigoEncriptador[i][1], codigoEncriptador[i][0]);
        }
    }
    return mensajeEncriptado;
}

function btnCopiar(){
    
    mensaje.select();
    document.execCommand("copy");
    mensaje.value = "";
    mensaje.style.backgroundImage = fondoMensaje;
}