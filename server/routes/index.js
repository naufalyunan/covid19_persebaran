const router = require('express').Router()
const ControllerUser = require('./../controllers/controllerUser')
const countryRoutes = require('./country')
const reportRoutes = require('./report')
const authentication = require('./../middlewares/authentication')

router.post('/login', ControllerUser.login)
router.use(authentication)
router.use('/countries', countryRoutes)
router.use('/reports', reportRoutes)

module.exports = router