const mongoose = require('mongoose')

const partSchema = new mongoose.Schema({
   part: String,
    cost: Number,
    warranty:String,
    
   })
   
   const Part = mongoose.model('Part', partSchema)
   
   module.exports = Part