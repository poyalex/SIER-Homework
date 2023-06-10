const express = require('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

router.get('/', toDoController.listTodo)
router.post('/', toDoController.createToDo)
router.get('/:id', userController.getToDo)
router.put('/:id', userController.updateToDo)
router.delete('/:id', userController.deleteToDo)

module.exports = router