const express =require('express')
const router = express.Router()

router.use(require('../middlewares/auth'))
module.exports = router