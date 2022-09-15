const Part = require('..//models/Part')
const part = require('../models/Part')


const index = (req, res) => {
    Part.find({}, (err, parts)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(parts)

    })
}

const createNewPart = async (req, res) => {
    console.log(req.body);

    req.body.inStock = req.body.quantity === 0 ? false: true
    
    let newPart = await Part.create(req.body)

    res.json(newPart)

}

const deletePart = (req, res) => {
   let { id } =  req.params
   console.log(id)

   Part.findByIdAndDelete(id, (err, deletedPart) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deletedPart)
   })
}

const getOnePart = (req, res) => {
    Part.findById(req.params.id, (err, Part) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(Part)
    })
}

const updatePart = (req, res) => {
    Part.findByIdAndUpdate(req.params.id, req.body, (err, Part) => {
        if(err){
            res.status(400).json(err)
            return
        }

        Part.find({}, (error, Parts ) =>{
            res.json(Parts)
        })
    })
}


module.exports = {
    index,
    createNewPart,
    deletePart,
    getOnePart,
    updatePart
}