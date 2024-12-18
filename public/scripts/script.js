$(document).ready(function() {
    // Configuración del carrusel de cursos destacados en index.html
    $('.cursos-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
        prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
        nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>',
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });

    // Efecto de hover en los beneficios
    $('.beneficio').hover(function(){
        $(this).addClass('hovered');
    }, function(){
        $(this).removeClass('hovered');
    });

    // Inicialización de AOS
    AOS.init({
        duration: 1200, // Duración de la animación en milisegundos
    });

    // Eventos de clic para mostrar y cerrar la ventana emergente de iniciar sesión
    document.getElementById('btn-iniciar-sesion').addEventListener('click', function() {
        document.getElementById('ventana-emergente').style.display = 'block';
    });

    document.getElementById('btn-cerrar').addEventListener('click', function() {
        document.getElementById('ventana-emergente').style.display = 'none';
    });
});
