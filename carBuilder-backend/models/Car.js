const mongoose = require('mongoose')

const carSchema = new mongoose.Schema({
 make:String,
 model: String,
 year:Number,
 cost: Number,
 warranty:String,
 image:String,
 uniqueIdentifier:String,
})

const Car = mongoose.model('Car', carSchema)

module.exports = Car