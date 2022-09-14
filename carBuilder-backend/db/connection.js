const { default: mongoose } = require('mongoose')
const mongose = require('mongoose')

const mongoURI = 'mongodb://localhost:27017/carbuilder'

mongoose.connect(mongoURI,{
    useNewUrlParser:true
})
.then(instance=>{
    console.log(`connected on ${instance.connections[0].name } `)
})
.catch(err => console.log(`got an error see details , ${err}`))