router = require('express').Router()
carController = require('../controllers/carController')

router.get('/', carController.index)
router.get('/:id', carController.getOneCar)
router.post('/', carController.createNewCar)
router.put('/:id', carController.updateCar)
router.delete('/:id', carController.deleteCar)

module.exports = router