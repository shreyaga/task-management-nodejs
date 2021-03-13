const { body, query, checkSchema } = require('express-validator')
const taskSchema = require('../routes/api/schema')
exports.validate = (method) => {
  switch (method) {
    case 'getTask': {
        return [ 
            query('id').exists()
            ]   
        }
    case 'deleteTask':{
        return [ 
            query('id').exists()
           ]   
        }
    break;
    case 'createTask' : {
        return checkSchema(taskSchema);
    }
  }
}