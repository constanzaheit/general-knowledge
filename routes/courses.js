const express = require('express');
const router = express.Router();

const courses = [
    { id: 1, name: "Nombre del Curso 1", description: "Breve descripción del curso 1...", image: "curso1.jpg" },
    { id: 2, name: "Nombre del Curso 2", description: "Breve descripción del curso 2...", image: "imagenes/finance.jpg" },
    { id: 3, name: "Nombre del Curso 3", description: "Breve descripción del curso 3...", image: "imagenes/maths.png" },
    { id: 4, name: "Nombre del Curso 4", description: "Breve descripción del curso 4...", image: "imagenes/informatics.webp" },
    { id: 5, name: "Nombre del Curso 5", description: "Breve descripción del curso 5...", image: "imagenes/renaissance.jpg" },
    { id: 6, name: "Nombre del Curso 6", description: "Breve descripción del curso 6...", image: "curso6.jpg" },
    { id: 7, name: "Nombre del Curso 7", description: "Breve descripción del curso 7...", image: "imagenes/translate1.jpg" }
];

router.get('/', (req, res) => {
    res.json(courses);
});

module.exports = router;
