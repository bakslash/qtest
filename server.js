const express = require('express')
const cors = require('cors')
const app =express()
const personnelRoutes = require('./routes/personnel')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors({'origin':'*'}))
app.use('/personnel',personnelRoutes)


const PORT = process.env.PORT || 5000
app.listen(PORT,()=>{console.log(`magic happens at ${PORT}`);})