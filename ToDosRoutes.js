
const { Router } = require('express');
const { getToDo, saveToDos, deleteToDo, editToDo } = require('./ToDoController');
const router = Router();


router.get('/', getToDo);
router.post('/saveToDos', saveToDos);
router.post('/deleteToDo', deleteToDo);
router.post('/editToDo', editToDo);

module.exports = router;