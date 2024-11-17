let link_switch = document.getElementById("link_switch");
let arrow_down = document.getElementById("arrow_down");
let categori_name = document.querySelectorAll(".categori_name");
let subcategoriesbox =  document.getElementById("subcategories_box");
let subcategoriesboxall = document.querySelectorAll("subcategories_box");

link_switch.addEventListener("click",function(e){
    e.preventDefault();
});

categori_name.forEach(categori => { // cambio de imagen
    categori.addEventListener("click", function(e) {
        categori.style.transition = "background-image 100ms ease";
        if (categori.style.backgroundImage === 'url("/Assets/img/abajo.png")') {
            categori.style.backgroundImage = 'url("/Assets/img/arriba.png")';
            subcategoriesbox.style.display = "none";
        } else {
            categori.style.backgroundImage = 'url("/Assets/img/abajo.png")';
            subcategoriesbox.style.display = "block";
        }
    });
});