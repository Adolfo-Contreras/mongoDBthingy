const Task = require('../models/task')

module.exports = {
    createTask: async (req, res) =>{
        console.log('create task');
        try{
            const {taskName} = req.body
            const task = new Task({taskName})
            task.save()
            console.log(task);
            res.json(task);
        }catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Error' });
          }
    },

    // listTasks: async (req, res) => {
    //   try {
    //     const tasks = await Task.find();
    //     res.json(tasks);
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   }
    // },

    // listUser: async (req, res) => {
    //   try {
    //     const { id } = req.params;
    //     const user = await User.findById(id);
    //     res.json(user);
    //   } catch (error) {
    //     console.error(error);
    //     res.status(500).json({ error: 'Internal Server Error' });
    //   }
    // }

}