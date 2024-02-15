const mogoose = require('mongoose');

const TaskSchema = new mogoose.Schema({
    taskName: String
})

module.exports = mogoose.model('Task', TaskSchema)