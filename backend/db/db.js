const mongoose= require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.DB)

mongoose.connection.on('connected', (req,res)=>{
    console.log("DB connected")
})

mongoose.connection.on('err', (req,res)=>{
    console.log("DB  not connected" , err)
})

module.exports = mongoose