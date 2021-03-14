const express = require('express')
const config = require('./config')
const routes = require('./routes')
const bodyParser = require('body-parser')
const http =require('./utils/http');
const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

app.get("*", (req, res) => { 
    res.send(http.response.notFound(res, 'Page not Found for the request')); 
}); 

app.listen(config.port, ()=>{
    console.log(`Server running on port ${config.port}`)
})

exports = module.exports = app;