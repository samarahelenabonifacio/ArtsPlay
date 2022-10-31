window.onload = function(){
    const pag1 = document.getElementById("pag1");
    const pag2 = document.querySelector("#pag2");
    const pag3 = document.querySelector("#pag3");
    const pag4 = document.querySelector("#pag4");

    pag1.addEventListener('click', function(){
        window.location.replace("menu.html");
    });
    pag2.addEventListener('click', function(){
        window.location.replace("famosos.html");
    });
    pag3.addEventListener('click', function(){
        window.location.replace("favoritos.html");
    });
    pag4.addEventListener('click', function(){
        window.location.replace("perfil.html");
    });
}