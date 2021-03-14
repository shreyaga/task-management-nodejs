const router = require('express').Router();
const taskController = require('../../controllers/taskController');
const  { validate } = require('../../validations/task.validation')

router.get('/task/:id',validate('getTask'), (req,res)=>{
    return res.send(taskController.getTaskById(req,res));
})

router.post('/task',validate('createTask'),(req,res)=>{
    return res.send(taskController.createTask(req,res));
})

router.delete('/task/:id',validate('deleteTask'),(req,res)=>{
    return res.send(taskController.deleteTaskById(req,res));
})

router.put('/task/:id/:status', validate('updateTask'),(req,res)=>{
    return res.send(taskController.updateTaskById(req,res));
})

router.get('/tasks',(req,res)=>{
    return res.send(taskController.findAll(req,res))
})

module.exports = router;