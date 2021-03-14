const { body, param, checkSchema, check } = require('express-validator')
const taskSchema = require('./schema.validation')

exports.validate = (method) => {
  switch (method) {
    case 'getTask': {
        return [ 
            param('id').exists()
            ]   
        }
    case 'deleteTask':{
        return [ 
            param('id').exists()
           ]   
        }
    break;
    case 'createTask' : {
        return checkSchema(taskSchema);
    }
    case 'updateTask':{
        return[
            param('id').exists(),
            param('status').exists()
        ]
    }
  }
}
