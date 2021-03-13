const router = require('express').Router();
const { validationResult } = require('express-validator');
const { validate }  = require('../../controllers/tasks');
const sample = require('../../data/sample');
const taskList = sample.fetchData();

router.get('/task',validate('getTask'), (req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const id =req.query.id;
    const taskDetails = taskList.find(task=>task.id === id);
    if(taskDetails){
        return res.status(200).json(taskDetails);
    }else{
        return res.status(200).send('No task with specified id')
    }
})

router.post('/task',validate('createTask'),(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    taskList.push(req.body);
    return res.status(200).json({message: "Task created" , task_details: req.body})
})

router.delete('/task',validate('deleteTask'),(req,res)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const id =req.query.id;
    const taskIndex = taskList.findIndex(task=>task.id === id);
    if(taskIndex!== -1){
        taskList.splice(taskIndex,1);
        return res.status(200).json({message: "Task deleted" , task_list: taskList})
    }
    return res.status(400).json({errors:{id:'Id specified doesnt exist',data: taskList}})
})

router.get('/tasks',(req,res)=>{
    return res.status(200).json(taskList);
})

module.exports = router;