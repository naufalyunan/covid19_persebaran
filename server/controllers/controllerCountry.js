const { Country } = require('./../models')

class ControllerCountry {
	static fetchAll (req, res, next) {
		Country.findAll({
			order: ['id']
		})
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => {
				next(err)
				// res.status(400).json(err)
			})
	}
}

module.exports = ControllerCountry