let link_switch = document.getElementById("link_switch");
let arrow_down = document.getElementById("arrow_down");
let categori_name = document.querySelectorAll(".categori_name");

link_switch.addEventListener("click",function(e){
    e.preventDefault();
});

categori_name.forEach(categori => { // cambio de imagen
    categori.addEventListener("click", function(e) {
        categori.style.transition = "background-image 100ms ease";
        categori.style.backgroundImage = "url('/Assets/img/abajo.png')"; // Envuélvelo en url("")
        //EVENTO TOGGLE
    });
});