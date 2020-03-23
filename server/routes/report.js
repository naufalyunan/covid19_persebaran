const router = require('express').Router()
const ControllerReport = require('./../controllers/controllerReport')
const authorization = require('./../middlewares/authorization')

router.get('/', ControllerReport.fetchReports)
router.post('/', ControllerReport.addReport)
router.delete('/:id', authorization, ControllerReport.deleteReport)

module.exports = router