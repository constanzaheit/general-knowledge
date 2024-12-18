document.addEventListener('DOMContentLoaded', function() {
    fetch('/api/courses')
        .then(response => response.json())
        .then(courses => {
            const coursesContainer = document.querySelector('.cursos-container');
            coursesContainer.innerHTML = ''; // Limpiar contenido existente

            courses.forEach(course => {
                const courseElement = document.createElement('div');
                courseElement.classList.add('curso');
                courseElement.innerHTML = `
                    <img src="${course.image}" alt="${course.name}">
                    <h3>${course.name}</h3>
                    <p>${course.description}</p>
                `;
                coursesContainer.appendChild(courseElement);
            });

            // Aplicar estilo especial al curso del medio
            const middleCourseIndex = Math.floor(courses.length / 2);
            const middleCourse = coursesContainer.children[middleCourseIndex];
            middleCourse.style.width = '400px';
            middleCourse.style.height = '400px';
            middleCourse.style.fontSize = '20px';
        });
});
