var encriptarButton = document.querySelector(".boton-encriptar");
var desencriptarButton = document.querySelector(".boton-desencriptar");
var imagen1 = document.querySelector(".lugarimagen");
var seccion2 = document.querySelector(".ningunMensaje");
var resultado = document.querySelector(".texto-resultado");
encriptarButton.onclick = encriptar;
desencriptarButton.onclick = desencriptar;

function encriptar(){
    ocultarAdelante();
    var cajadetexto = recuperarTexto()
    resultado.textContent = encriptarTexto(cajadetexto);
}

function desencriptar(){
    ocultarAdelante();
    var cajadetexto = recuperarTexto()
    resultado.textContent = desencriptarTexto(cajadetexto);
}

function recuperarTexto(){
    var cajadetexto = document.querySelector(".cajadetexto")
    return cajadetexto.value
}

function ocultarAdelante(){
    imagen1.classList.add("ocultar");
    seccion2.classList.add("ocultar");
}

function encriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "ai"
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "enter"
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "imes"
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "ober"
        }
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "ufat"
        }
        else{
            textoFinal = textoFinal + texto[i]
        }
}
 return textoFinal;

}

function desencriptarTexto(mensaje){
    var texto = mensaje;
    var textoFinal = "";

    
for(var i = 0; i < texto.length; i++){
        if(texto[i] == "a"){
            textoFinal = textoFinal + "a"
            i = i+1;
        }
        else if(texto[i] == "e"){
            textoFinal = textoFinal + "e"
            i = i+4;
        }
        else if(texto[i] == "i"){
            textoFinal = textoFinal + "i"
            i = i+3;
        }
        else if(texto[i] == "o"){
            textoFinal = textoFinal + "o"
            i = i+3;
        }
        
        else if(texto[i] == "u"){
            textoFinal = textoFinal + "u"
            i = i+3;
        }
        else{
            textoFinal = textoFinal + texto[i];
        }
        
    }

    return textoFinal;

}

const btnCopiar = document.querySelector(".boton-copiar"); 
    btnCopiar.addEventListener("click", copiar = () => {
    var contenido = document.querySelector(".texto-resultado").textContent;
    navigator.clipboard.writeText(contenido);
    console.log("hola"); 
});