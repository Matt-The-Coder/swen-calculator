const express = require('express')
const routes = express.Router()
const services = require('../services/cars/retrieve')
const {getVehicles} = services()
routes.get('/vehicles', async (req, res)=>{
    const {q} = req.query
    const data = await getVehicles(q)
    res.json(data)


})

module.exports = routes