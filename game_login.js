function inicio() {
    nombrejugador1=document.getElementById("nombre_de_jugador_2").value
    nombrejugador2=document.getElementById("nombre_de_jugador_1").value
    localStorage.setItem("nombrejugador1",nombrejugador1)
    localStorage.setItem("nombrejugador2",nombrejugador2)
    window.location="Lula.html"
}