const Car = require('..//models/Car')
const car = require('..//models/Car')

const index = (req, res) => {
    car.find({}, (err, cars)=>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(cars)

    })
}

const createNewCar = async (req, res) => {
    console.log(req.body);

    req.body.inStock = req.body.quantity === 0 ? false: true
    
    let newCar = await Car.create(req.body)

    res.json(newCar)

}

const deleteCar = (req, res) => {
   let { id } =  req.params
   console.log(id)

   Car.findByIdAndDelete(id, (err, deletedCar) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(deletedCar)
   })
}

const getOneCar = (req, res) => {
    Car.findById(req.params.id, (err, car) =>{
        if(err){
            res.status(400).json(err)
            return
        }

        res.json(car)
    })
}

const updateCar = (req, res) => {
    Car.findByIdAndUpdate(req.params.id, req.body, (err, car) => {
        if(err){
            res.status(400).json(err)
            return
        }

        car.find({}, (error, cars ) =>{
            res.json(cars)
        })
    })
}


module.exports = {
    index,
    createNewCar,
    deleteCar,
    getOneCar,
    updateCar
}