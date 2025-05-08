var express = require('express');
var router = express.Router();


// BANCO DE DADOS
students = [
    {
        nome: "Pedro",
        matricula: 123456,
        sexo: "m",
        id: 1
    },
    {
        nome: "Lari",
        matricula: 789456,
        sexo: "m",
        id: 2
    },
    {
        nome: "Cris",
        matricula: 545656,
        sexo: "m",
        id: 3
    }
]

/* GET all students listing. */
router.get('/', function (req, res, next) {
    listStudents = students.map(s => {
        return {
            id: s.id,
            nome: s.nome,
            matricula: s.matricula,
            sexo: s.sexo
        }
    })
    res.send(listStudents);
});

/* GET by id students listing. */
router.get('/:id', function (req, res, next) {
    // pegar dados na requisição
    // params -> parâmentros Ex: /1
    // body ->  corpo { objetos }
    
    id =  req.params.id
    result = students.filter(s => s.id == id)
    res.send(result[0]);
});

// Salvar estudante
router.post('/', function (req, res, next) {
    student = req.body
    student.id = students.length + 1
    students.push(student)
    res.send(student)
})

// Atualizar estudante
router.patch('/:id',function(req, res, next){
    id = req.params.id
    student = req.body

    students[id].nome = student.nome
    students[id].matricula = student.matricula
    students[id].sexo = student.sexo

    res.send(students[id])
})

// Deletar Estudante
router.delete('/:id', function(req, res, next){
    id = req.params.id

    students.splice(id, 1)

    res.send('Estudante deletado')
})

module.exports = router;
