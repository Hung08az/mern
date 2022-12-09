const express = require('express')
const router = express.Router()
const Todo = require('../models/Todos')


router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.json(todos);
})
//create new todo
router.post('/new', async (req, res) => {
    const newTodo = new Todo(
        // req.body
        {
            author: "hunhun",
            todo: "Go to School"
        }
    );
    const saveTodo = await newTodo.save();
    res.json(saveTodo);

})
//get by id
router.get('/get/:id', async (req, res) => {
    const t = await Todo.findById({ _id: req.params.id });
    res.json(t);

})
//delete by id
router.delete('/delete/:id', async (req, res) => {
    const tDelete = await Todo.findByIdAndDelete({ _id: req.params.id });
    res.json(tDelete);

})
//update by id
router.put('/update/:id', async (req, res) => {
    const tUpdate = await Todo.updateOne({
        // {_id:req.params.id},{ $set: req.body}
        author: "hung08az",
        todo: "Go to net game"
    });
    res.json(tUpdate);

})
module.exports = router