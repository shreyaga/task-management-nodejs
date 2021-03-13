  
var router = require('express').Router();

router.use('/api', require('./api/tasks'));

module.exports = router;