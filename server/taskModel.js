const mongoose = require('mongoose')
const Schema = mongoose.Schema

const TaskSchema = new Schema({
    task: String,
    done: {
        type:Boolean,
        default: false
    }
})

const TaskModel = mongoose.model('Task', TaskSchema)

module.exports = TaskModel