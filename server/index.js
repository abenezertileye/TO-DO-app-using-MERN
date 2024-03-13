const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const TodoModel = require('./taskModel')
const TaskModel = require('./taskModel')
const port = 3001

//middlewares
app.use(cors())
app.use(express.json())

//data base connection
mongoose.connect('mongodb://localhost:27017/todo')
    .then(() => {console.log('connected to mongodb')})
    .catch(err => console.log(err.message))

//routes
app.post('/add', (req, res) => {
    const task = req.body.task
    TaskModel.create({
        task: task
    })
        // .then(result => console.log(result))
        // .catch(err => console.log(err.message))
})

app.get('/get', (req,res) => {
    TaskModel.find()
        .then(result => res.json(result))
        .catch(err => console.log(err))
})

app.delete('/delete/:id', (req,res) => {
    TaskModel.findByIdAndDelete({_id: req.params.id})
    .then(result => res.json(result))
    .catch(err => console.log(err.message))
})

app.put('/update/:id', (req,res)=>{
    TaskModel.findByIdAndUpdate(req.params.id, {done: true})
    // .then(result => console.log(result))
    .catch(err => console.log(err))
})

app.listen(port, () => {
    console.log('listening to port 3001')
})