
const taskSchema = {
    id: {
        notEmpty: true,
        errorMessage:'id field cannot be empty'
    },
    name: {
        notEmpty: true,
        errorMessage: 'name field cannot be empty'
    }
}

module.exports = taskSchema