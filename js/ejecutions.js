window.onload = function () {

    // INTRODUCIENDO FECHA EN FOOTER
    var fecha = new Date();
    document.querySelector("#year").innerHTML = fecha.getFullYear();

    // PREPARANDO FUNCION PARA CERRAR MENU RESPONSIVE CUANDO SE TOQUE UNA OPCION
    $('.navbar-nav>li>a').on('click', function(e){
        e.preventDefault();
        $('#main_nav').collapse('hide');
        const target = this.getAttribute('href');
        const position = $(target).offset().top;
        gsap.to(window,{
            scrollTo:position,
            duration:2, 
            ease: Power2.easeInOut
        });

    });
}




var objetos = {
    presentacion: document.querySelector("#presentacion-anim")
}

