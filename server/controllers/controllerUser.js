const { User } = require('./../models')
const { comparePass } = require('./../helper/bcrypt')
const { makeToken } = require('./../helper/jwt')
class ControllerUser {
	static login (req,res,next) {
		const { username, password } = req.body
		User.findOne({
			where: {
				username
			}
		})
			.then(result => {
				if (!result) {
					const error = {
						name: 'invalid username/password'
					}
					throw error
				} else {
					const condition = comparePass(password, result.password)
					if (condition) {
						const payload = {
							id: result.id,
							username: result.username
						}
						const token = makeToken(payload)
						req.headers.token = token
						const response = {
							token,
							id: result.id,
							username: result.username
						}
						res.status(200).json( response )
					} else {
						const error = {
							name: 'invalid username/password'
						}
						throw error
					}
				}
			})
			.catch(err => {
				next(err)
			})
	}
}

module.exports = ControllerUser
