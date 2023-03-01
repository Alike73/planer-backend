
const ToDoModel = require('./ToDoModel');

// GET
module.exports.getToDo = async(req, res) => {
    const myToDo = await ToDoModel.find();
    res.send(myToDo)
}

// POST
module.exports.saveToDos = async(req, res) => {
    const { title } = req.body;
    ToDoModel.create({ title })
    .then((data) => {console.log('To-Do is added!')
    res.send(data)
    })
}

// DELETE
module.exports.deleteToDo = async(req, res) => {
    
    // here, we'll delete by "ID"
    const { _id, } = req.body;
    ToDoModel.findByIdAndDelete(_id)
    .then(() => res.send('To-Do is deleted!!!'))
}

// EDIT
module.exports.editToDo = async(req, res) => {
    const { _id, title } = req.body;
    ToDoModel.findByIdAndUpdate(_id, { title })
    .then(() => res.send('To-Do is edited!!!'))
}