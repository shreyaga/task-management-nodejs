
const taskSchema = {
    id: {
        in : ['body'],
        notEmpty: true,
        errorMessage:'id field cannot be empty'
    },
    name: {
        in : ['body'],
        notEmpty: true,
        errorMessage: 'name field cannot be empty'
    },
    description: {
        in : ['body'],
        optional: { options: { nullable: true } }
    },
    owner: {
        in : ['body'],
        notEmpty: true,
        errorMessage: 'owner field cannot be empty'
    },
    assignee: {
        in : ['body'],
        notEmpty: true,
        errorMessage: 'assignee field cannot be empty'
    },
    status: {
        in : ['body'],
        notEmpty: true,
        errorMessage: 'body field cannot be empty'
    },
    dueDate: {
        in : ['body'],
        notEmpty: true,
        errorMessage: 'dueDate field cannot be empty'
    }

};

module.exports = taskSchema;