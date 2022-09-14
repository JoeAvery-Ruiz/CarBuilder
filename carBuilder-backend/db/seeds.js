require('./connection')
const Car = require('../models/Car')

const Cars = [
    {
        make: 'Chevrolet',
        model: 'Silverado',
        year: 1993,
        cost: 5000,
        warranty: 'none',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTq40usmFHt4Y6cBtz3OkkrOxEvc4-0pQ1ERg&usqp=CAU',
        uniqueIdentifier: '322e',
    },
    {
        make: 'Chevrolet',
        model: 'Impala',
        year: 1960,
        cost: 14000,
        warranty: 'none',
        image: 'https://cdn05.carsforsale.com/52df5e60b75e8fe568678f6bfbffb6ec/1280x960/1960-chevrolet-impala-bubble-top-coupe.jpg',
        uniqueIdentifier: '322f',
    }
]


Car.deleteMany({})
.then(() => {
    return Car.insertMany(Cars)
})
.then((insertedCars) => {
    console.log(insertedCars)
})
.catch(err => console.error(err))
.finally(() => {
    process.exit()
})

 