const { validationResult } = require('express-validator');
const taskService = require('../services/taskService');
const http = require('../utils/http');

const getTaskById = (req,res)=>{
    const error = validateRequest(req)
    if(error)
        return http.response.badRequest(error, res)
    try {
        return http.response.ok(res, taskService.find(req.params.id));
    }catch(err){
        return http.response[err.statusType](res);
    }
}

const deleteTaskById = (req,res) => {
    const error = validateRequest(req)
    if(error)
        return http.response.badRequest(error, res)
    try{
        return http.response.ok(res, taskService.remove(req.params.id))
    }catch(err){
        return http.response[err.statusType](res);
    }
}

const updateTaskById = (req,res) => {
    const error = validateRequest(req)
    if(error)
        return http.response.badRequest(error, res)
    try{
        return http.response.ok(res,taskService.update(req.params.id, req.params.status));
    }catch(err){
        return http.response[err.statusType](res);
    }
}

const createTask = (req,res) => {
    const error = validateRequest(req)
    if(error)
        return http.response.badRequest(error, res)
    try{
        return http.response.created(res, taskService.create(req.body))
    }catch(err){
        return http.response[err.statusType](res);
    }
}

const validateRequest = (req)=>{
    const errors = validationResult(req);
    if (!errors.isEmpty()){
        return errors.array()
    }
}

module.exports = {
    getTaskById,
    deleteTaskById,
    updateTaskById,
    createTask
}