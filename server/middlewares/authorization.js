const { Report } = require('./../models')

function authorization(req, res, next) {
	const reportId = req.params.id
	const idLogin = req.decoded.id
	console.log('masuk auth')
	Report.findByPk(reportId)
		.then(result => {
			if (!result) {
				const error = {
					name: 'report not found'
				}
				throw error
			} else {
				if(result.UserId === idLogin) {
					next()
				} else {
					const error = {
						name: 'You are not authorized'
					}
					throw error
				}
			}
		})
		.catch(err => {
			next(err)
		})
}

module.exports = authorization