const taskList = require('../data/sample.json');
const TaskError = require('../error/TaskError');
const date = require('../utils/date');

const find = (id) => {
    const taskDetails = taskList.find(task=>task.id === id);
    if(taskDetails){
        return taskDetails;
    }
    throw new TaskError('notFound', 'Task with provided id does not exist')
};

const remove = (id) => {
    const taskIndex = taskList.findIndex(task=>task.id === id);
    if(taskIndex!== -1){
        taskList.splice(taskIndex,1);
        return taskList;
    }
    
    throw new TaskError('notFound', 'Task with provided id does not exist')
   
};

const update = (id, status) => {
    const taskDetails = find(id);
    if(date.crossedDueDate(taskDetails.dueDate)){
        taskDetails.status = status;
        return taskDetails;
    }
    throw new TaskError('internalServerError','Due date has already passed')
    
};

const create = (task )=>{
    taskList.push(task);
    return taskList;
};

module.exports = { find, remove, update, create };