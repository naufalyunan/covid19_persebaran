const router = require('express').Router()
const ControllerCountry = require('./../controllers/controllerCountry')

router.get('/', ControllerCountry.fetchAll)

module.exports = router