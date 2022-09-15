router = require('express').Router()
partController = require('../controllers/partController')

router.get('/partslist', partController.index)
router.get('/:id', partController.getOnePart)
router.post('/partslist', partController.createNewPart)
router.put('/:id', partController.updatePart)
router.delete('/:id', partController.deletePart)

module.exports = router
