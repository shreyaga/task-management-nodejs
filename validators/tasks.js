const { body, query, checkSchema, check } = require('express-validator')
const taskSchema = require('../routes/api/schema')
const date = require('../utils/date');
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
    case 'updateTask':{
        return[
            query('id').exists(),
            query('status').exists(),
            check('date').custom(date.isValidDate).withMessage('the date must be a valid date')
        ]
    }
  }
}
