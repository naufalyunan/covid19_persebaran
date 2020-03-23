const { Report, Country } = require('./../models')

class ControllerReport {
	static fetchReports (req, res, next) {
		Report.findAll({
			where: {
				UserId: req.decoded.id
			},
			include: [Country]
		})
			.then(result => {
				res.status(200).json(result)
			})
			.catch(err => {
				next(err)
			})
	}
	static addReport (req, res, next) {
		let { CountryId, report } = req.body
		CountryId = Number(CountryId)
		report = Number(report)
		console.log(req.body)
		const UserId = req.decoded.id
		let country = null
		let caseId = null
		let response 
		Report.create({
			report,
			CountryId,
			UserId
		})
			.then(result => {
				caseId = result.dataValues.id
				return Country.findByPk(CountryId)
			})
			.then(result => {
				if (!result) {
					const error = {
						name: 'country not found'
					}
					throw error
				} else {
					country = result.dataValues
					let newCases = country.cases + report
					return Country.update({
						name: country.name,
						cases: newCases,
						deaths: country.deaths,
						recovered: country.recovered
					}, {
						where: {
							id: CountryId
						}
					})
				}
			})
			.then(result => {
				return Report.findOne({
					where: {
						id: caseId
					}
				})
			})
			.then(result => {
				response = {
					report: result
				}
				return Country.findByPk(CountryId)
			})
			.then(result => {
				if (!result) {
					const error = {
						name: 'country not found'
					}
					throw error
				} else {
					console.log('MASOK')
					console.log(response)
					response.report.dataValues.Country = result.dataValues
					res.status(201).json(response)
				}
			})
			.catch(err => {
				// next(err)
				// console.log(err)
				res.status(400).json(err)
			})
	}

	static deleteReport (req, res, next) {
		const id = req.params.id
		let report
		let country
		let response
		console.log('masuk controller')
		Report.findByPk(id)
			.then(result => {
				if (!result) {
					const error = {
						name: 'report not found'
					}
					throw error
				} else {
					report = result.dataValues
					console.log('<<<<<')
					console.log(report)
					return Country.findByPk(report.CountryId)
				}
			})
			.then(result => {
				country = result.dataValues
				console.log(country)
				let newCases = country.cases - report.report
				return Country.update({
					name: country.name,
					cases: newCases,
					deaths: country.deaths,
					recovered: country.recovered
				}, {
					where: {
						id: report.CountryId
					}
				})
			})
			.then(result => {
				return Country.findByPk(report.CountryId)
			})
			.then(result => {
				response = {
					country: result.dataValues,
					report: 'Succesfully delete'
				}
				return Report.destroy({
					where: {
						id
					}
				})
			})
			.then(result => {
				res.status(200).json(response)
				console.log(response)
			})
			.catch(err => {
				res.status(400).json(err)
			})
	}
}

module.exports = ControllerReport