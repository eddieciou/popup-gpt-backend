const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@cluster0.yn7dxra.mongodb.net/popupGPT?retryWrites=true&w=majority`).then(()=>{
  console.log('connected to mongodb')
})