nombre_jugador1=localStorage.getItem("nombrejugador1");
nombre_jugador2=localStorage.getItem("nombrejugador2");
puntajej1=0;
puntajej2=0;


document.getElementById("nombrejugador1").innerHTML=nombre_jugador1 + " : ";
document.getElementById("nombrejugador2").innerHTML=nombre_jugador2 + " : ";
document.getElementById("puntajej1").innerHTML=puntajej1;
document.getElementById("puntajej2").innerHTML=puntajej2;

document.getElementById("pregunta_jugador").innerHTML="Turno para preguntar " + nombre_jugador1;
document.getElementById("respuesta_jugador").innerHTML="Turno para responder " + nombre_jugador2;
function mandar() {
    palabrasecreta=document.getElementById("words").value;
    palabraTransformer=palabrasecreta.toLowerCase();
    console.log("palabra en minusculas " + palabraTransformer);
    caracter1=palabraTransformer.charAt(1);
    longitud_div=Math.floor(palabraTransformer.length/2);
    caracter2=palabraTransformer.charAt(longitud_div);
    console.log (caracter1)
    console.log (caracter2)
    longitud_menos1 = palabraTransformer.length-1;
    caracter3 = palabraTransformer.charAt(longitud_menos1);
    console.log (caracter3);
    console.log (palabraTransformer.length)
    caracter4 = palabraTransformer.charAt(5);
    console.log (caracter4);
    removecaracter1 = palabraTransformer.replace(caracter1,"$");
    removecaracter2 = removecaracter1.replace(caracter2, "#");
    removecaracter3 = removecaracter2.replace(caracter3, "%");
    removecaracter4 = removecaracter3.replace(caracter4, "&");
    console.log (removecaracter4);

    palabrapregunta = "<h4 id='word_display'> P. " + removecaracter4 + "</h4>";
    inputboxs = "<br> respuesta: <input type='text' id='input_check_box'>";
    checkButon = "<br> <br> <button class='btn btn-info' onclick='check()'>revisar</button>";
    renglon = palabrapregunta + inputboxs + checkButon;
    document.getElementById("Salida").innerHTML=renglon;
    document.getElementById("words").value = "";
}
turno_pregunta = "jugador1";
turno_respuesta = "jugador2";
function check() {
    get_awnser = document.getElementById("input_check_box").value;
    awnser = get_awnser.toLowerCase();
    console.log (awnser)
    if (awnser == palabraTransformer) {
        if (turno_respuesta == "jugador1") {
            puntajej1 = puntajej1 + 1;
            document.getElementById("puntajej1");
        }else{
            puntajej2 = puntajej2 + 1;
            document.getElementById("puntajej2");
        }
    }
}