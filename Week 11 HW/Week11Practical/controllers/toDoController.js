const ToDo = require('../models/toDo')

// //Get all
// router.get('/', toDoController.getAllToDo)
exports.getAllToDo = async (req, res) => {
    try {
        const toDo = await ToDo.find({})
        res.json(toDo)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
// //Get specific
// router.get('/:id', toDoController.getToDo)
exports.getToDo = async (req, res) => {
    try{
        const toDo = await ToDo.findOne({_id: req.params.id})
        res.json(toDo)
    }catch(error){
        res.status(400).json
    }
}
// //Create New
// router.post('/', toDoController.createToDo)
exports.createToDo = async (req, res) => {
    try{
        const toDo = new ToDo(req.body)
        await toDo.save()
        res.json(toDo)
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
// //Update
// router.put('/:id', toDoController.updateToDo)
exports.updateToDo = async (req, res) => {
    try{
        const updates = Object.keys(req.body)
        const toDo = await ToDo.findOne({_id: req.params.id})
        updates.forEach(update => toDo[update] = req.body[update])
        await toDo.save()
        res.json({message: 'Item Updated'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}
// //Delete
// router.delete('/:id', toDoController.deleteToDo)
exports.deleteToDo = async (req, res) => {
    try{
        const toDo = await ToDo.findOne({_id: req.params.id})
        const deletiton = await ToDo.deleteOne()
        res.json({message: 'Todo Deleted'})
    }catch(error){
        res.status(400).json({message: error.message})
    }
}