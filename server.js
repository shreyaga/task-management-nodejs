const express = require('express')
const config = require('./config')
const routes = require('./routes')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(routes)

app.listen(config.port, ()=>{
    console.log(`Server running on port ${config.port}`)
})