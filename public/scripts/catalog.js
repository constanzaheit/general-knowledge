$(document).ready(function() {
    const cursos = [
        // Cursos de ejemplo. Añade más cursos según sea necesario.
        // Informática y Tecnología
        {
            titulo: "Desarrollo Web Full-Stack",
            duracion: "12 semanas",
            calificacion: "★★★★☆",
            progreso: "75%",
            descripcion: "Este curso abarca desde la creación de sitios web front-end hasta el desarrollo de aplicaciones back-end.",
            categoria: "Informática y Tecnología",
            dificultad: "Intermedio"
        },
        {
            titulo: "Introducción a la Ciencia de Datos",
            duracion: "10 semanas",
            calificacion: "★★★★☆",
            progreso: "60%",
            descripcion: "Aprende los fundamentos de la ciencia de datos y cómo aplicar técnicas de análisis de datos en Python.",
            categoria: "Informática y Tecnología",
            dificultad: "Intermedio"
        },
        {
            titulo: "Inteligencia Artificial y Machine Learning",
            duracion: "15 semanas",
            calificacion: "★★★★★",
            progreso: "40%",
            descripcion: "Descubre cómo los algoritmos de IA y ML están transformando industrias y aprende a implementarlos.",
            categoria: "Informática y Tecnología",
            dificultad: "Avanzado"
        },
        {
            titulo: "Ciberseguridad",
            duracion: "8 semanas",
            calificacion: "★★★★☆",
            progreso: "50%",
            descripcion: "Protege tus sistemas y redes contra amenazas cibernéticas con técnicas avanzadas de ciberseguridad.",
            categoria: "Informática y Tecnología",
            dificultad: "Intermedio"
        },
        {
            titulo: "Desarrollo de Aplicaciones Móviles",
            duracion: "10 semanas",
            calificacion: "★★★★☆",
            progreso: "80%",
            descripcion: "Diseña y desarrolla aplicaciones móviles para Android y iOS con las mejores prácticas de la industria.",
            categoria: "Informática y Tecnología",
            dificultad: "Intermedio"
        },
        // Diseño
        {
            titulo: "Marketing Digital",
            duracion: "6 semanas",
            calificacion: "★★★★☆",
            progreso: "90%",
            descripcion: "Domina las estrategias de marketing en línea y cómo aplicarlas en el mundo real.",
            categoria: "Diseño",
            dificultad: "Básico"
        },
        {
            titulo: "Diseño Gráfico y Multimedia",
            duracion: "8 semanas",
            calificacion: "★★★★★",
            progreso: "70%",
            descripcion: "Aprende las técnicas de diseño gráfico y multimedia utilizando las herramientas más populares.",
            categoria: "Diseño",
            dificultad: "Intermedio"
        },
        // Finanzas
        {
            titulo: "Finanzas Personales",
            duracion: "6 semanas",
            calificacion: "★★★★☆",
            progreso: "90%",
            descripcion: "Aprende a gestionar tus finanzas personales de manera efectiva.",
            categoria: "Finanzas",
            dificultad: "Básico"
        },
        {
            titulo: "Análisis Financiero",
            duracion: "12 semanas",
            calificacion: "★★★★★",
            progreso: "50%",
            descripcion: "Desarrolla habilidades de análisis financiero y toma de decisiones estratégicas.",
            categoria: "Finanzas",
            dificultad: "Avanzado"
        },
        // Cálculo y Matemáticas
        {
            titulo: "Álgebra y Geometría",
            duracion: "8 semanas",
            calificacion: "★★★★☆",
            progreso: "80%",
            descripcion: "Fundamentos de álgebra y geometría para estudiantes de nivel medio y superior.",
            categoria: "Cálculo y Matemáticas",
            dificultad: "Intermedio"
        },
        {
            titulo: "Cálculo Diferencial e Integral",
            duracion: "12 semanas",
            calificacion: "★★★★★",
            progreso: "60%",
            descripcion: "Curso completo de cálculo diferencial e integral para estudiantes universitarios.",
            categoria: "Cálculo y Matemáticas",
            dificultad: "Avanzado"
        },
        // Idiomas
        {
            titulo: "Inglés para Principiantes",
            duracion: "8 semanas",
            calificacion: "★★★★☆",
            progreso: "70%",
            descripcion: "Curso básico de inglés para principiantes.",
            categoria: "Idiomas",
            dificultad: "Básico"
        },
        {
            titulo: "Español para Extranjeros",
            duracion: "10 semanas",
            calificacion: "★★★★★",
            progreso: "50%",
            descripcion: "Curso de español diseñado para hablantes no nativos.",
            categoria: "Idiomas",
            dificultad: "Intermedio"
        }
    ];

    const cursosContainer = $('.cursos-container');

    function renderCursos(cursos) {
        cursosContainer.empty();
        cursos.forEach(curso => {
            const cursoElement = $(`
                <div class="curso">
                    <h3>${curso.titulo}</h3>
                    <p><strong>Duración:</strong> ${curso.duracion}</p>
                    <p><strong>Calificación:</strong> ${curso.calificacion}</p>
                    <p><strong>Progreso:</strong> ${curso.progreso}</p>
                    <p>${curso.descripcion}</p>
                </div>
            `);
            cursosContainer.append(cursoElement);
        });

        // Verifica si el carrusel ya está inicializado antes de destruirlo y recrearlo
        if (cursosContainer.hasClass('slick-initialized')) {
            cursosContainer.slick('unslick');
        }

        // Inicializa Slick Carousel
        cursosContainer.slick({
            infinite: true,
            slidesToShow: 5,
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
                        slidesToShow: 3,
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
    }

    renderCursos(cursos);

    $('#search').on('input', function() {
        const searchTerm = $(this).val().toLowerCase();
        const filteredCursos = cursos.filter(curso => curso.titulo.toLowerCase().includes(searchTerm));
        renderCursos(filteredCursos);
    });

    $('#filter-category').on('change', function() {
        const category = $(this).val();
        const filteredCursos = category ? cursos.filter(curso => curso.categoria === category) : cursos;
        renderCursos(filteredCursos);
    });

    $('#filter-difficulty').on('change', function() {
        const difficulty = $(this).val();
        const filteredCursos = difficulty ? cursos.filter(curso => curso.dificultad === difficulty) : cursos;
        renderCursos(filteredCursos);
    });

    $('#filter-duration').on('change', function() {
        const duration = $(this).val();
        let filteredCursos;
        if (duration === "Corta") {
            filteredCursos = cursos.filter(curso => parseInt(curso.duracion) < 8);
        } else if (duration === "Media") {
            filteredCursos = cursos.filter(curso => parseInt(curso.duracion) >= 8 && parseInt(curso.duracion) <= 12);
        } else if (duration === "Larga") {
            filteredCursos = cursos.filter(curso => parseInt(curso.duracion) > 12);
        } else {
            filteredCursos = cursos;
        }
        renderCursos(filteredCursos);
    });
});
