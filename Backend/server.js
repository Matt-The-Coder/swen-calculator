const express = require('express')
const port = process.env.PORT || 3500
const app =  express()
const cors = require('cors')
const db = require('./database/connection')
app.use(express.json())
//Routes
const routes = require('./routes/homeRoute')
app.use(cors())
app.use(routes)

app.listen(port, async ()=>{
    console.log(`Server started at port ${port}`)
})