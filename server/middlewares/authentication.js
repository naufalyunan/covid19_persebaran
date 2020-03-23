const { decode } = require('./../helper/jwt')
const { User } = require('./../models')

function authentication(req, res, next) {
	try {
		const token = req.headers.token
		const decoded = decode(token)
		User.findOne({
			where: {
				username: decoded.username
			}
		})
			.then(result => {
				if (result) {
					req.decoded = decoded
					next()
				} else {
					const error = {
						name: 'authentication error'
					}
					throw error
				}
			})
			.catch(err => {
				next(err)
			})
	} catch(err) {
		// res.status(400).json(err)
		next(err)
	}
}

module.exports = authentication