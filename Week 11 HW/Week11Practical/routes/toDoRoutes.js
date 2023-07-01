const express = require ('express')
const router = express.Router()
const toDoController = require('../controllers/toDoController')

//Generally routes + filennames should be all lowercase

//Get all
router.get('/', toDoController.getAllToDo)
//Get specific
router.get('/:id', toDoController.getToDo)
//Create New
router.post('/', toDoController.createToDo)
//Update
router.put('/:id', toDoController.updateToDo)
//Delete
router.delete('/:id', toDoController.deleteToDo)

module.exports = router