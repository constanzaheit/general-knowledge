$(document).ready(function(){
    // Carrusel de cursos destacados en index.html
    $('.cursos-container').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: true,
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

    //  Carrusel de beneficios en index.html
    $('.beneficios-carousel').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        arrows: false,
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

    $('.beneficio').hover(function(){
        $(this).addClass('hovered');
    }, function(){
        $(this).removeClass('hovered');
    });

    document.getElementById('btn-iniciar-sesion').addEventListener('click', function() {
        document.getElementById('ventana-emergente').style.display = 'block';
    });

    document.getElementById('btn-cerrar').addEventListener('click', function() {
        $(document).ready(function(){
            // Carrusel de cursos destacados en index.html
            $('.cursos-container').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: true,
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
        
            // Carrusel de beneficios en index.html
            $('.beneficios-carousel').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
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
        
            $('.beneficio').hover(function(){
                $(this).addClass('hovered');
            }, function(){
                $(this).removeClass('hovered');
            });
        
            document.getElementById('btn-iniciar-sesion').addEventListener('click', function() {
                document.getElementById('ventana-emergente').style.display = 'block';
            });
        
            document.getElementById('btn-cerrar').addEventListener('click', function() {
                document.getElementById('ventana-emergente').style.display = 'none';
            });
        
            // Datos y generación de cursos en catalog.html e informatica.html
            const cursos = [
                {
                    titulo: "Desarrollo Web Full-Stack",
                    duracion: "12 semanas",
                    calificacion: "★★★★☆",
                    progreso: "75%",
                    descripcion: "Este curso abarca desde la creación de sitios web front-end hasta el desarrollo de aplicaciones back-end."
                },
                {
                    titulo: "Introducción a la Ciencia de Datos",
                    duracion: "10 semanas",
                    calificacion: "★★★★☆",
                    progreso: "60%",
                    descripcion: "Aprende los fundamentos de la ciencia de datos y cómo aplicar técnicas de análisis de datos en Python."
                },
                {
                    titulo: "Inteligencia Artificial y Machine Learning",
                    duracion: "15 semanas",
                    calificacion: "★★★★★",
                    progreso: "40%",
                    descripcion: "Descubre cómo los algoritmos de IA y ML están transformando industrias y aprende a implementarlos."
                },
                {
                    titulo: "Ciberseguridad",
                    duracion: "8 semanas",
                    calificacion: "★★★★☆",
                    progreso: "50%",
                    descripcion: "Protege tus sistemas y redes contra amenazas cibernéticas con técnicas avanzadas de ciberseguridad."
                },
                {
                    titulo: "Desarrollo de Aplicaciones Móviles",
                    duracion: "10 semanas",
                    calificacion: "★★★★☆",
                    progreso: "80%",
                    descripcion: "Diseña y desarrolla aplicaciones móviles para Android y iOS con las mejores prácticas de la industria."
                },
                {
                    titulo: "Marketing Digital",
                    duracion: "6 semanas",
                    calificacion: "★★★★☆",
                    progreso: "90%",
                    descripcion: "Domina las estrategias de marketing en línea y cómo aplicarlas en el mundo real."
                }
            ];
        
            const cursosContainer = $('.cursos-container');
        
            cursos.forEach(curso => {
                const cursoElement = $(`
                    <div class="curso">
                        <h2>${curso.titulo}</h2>
                        <p><strong>Duración:</strong> ${curso.duracion}</p>
                        <p><strong>Calificación:</strong> ${curso.calificacion}</p>
                        <p><strong>Progreso:</strong> ${curso.progreso}</p>
                        <p>${curso.descripcion}</p>
                    </div>
                `);
                cursosContainer.append(cursoElement);
            });
        
            $('.curso').hover(function() {
                $(this).addClass('hovered');
            }, function() {
                $(this).removeClass('hovered');
            });
        });
        

    }
}