function errorHandler(err, req, res, next) {
	const payload = {
		errors: [],
		message: ''
	}
	switch (err.name) {
		case 'invalid username/password':
			payload.errors.push('invalid username/password')
			payload.message =  payload.errors[0]
			res.status(400).json(payload)
			break;
		case 'authentication error':
			payload.errors.push('You are not authenticated')
			payload.message =  payload.errors[0]
			res.status(400).json(payload)
			break;
		case 'JsonWebTokenError':
			payload.errors.push('You are not authenticated')
			payload.message =  payload.errors[0]
			res.status(400).json(payload)
			break;
		case 'SequelizeValidationError':
			payload.errors = err.errors.map(el => {
				return el.message
			})
			payload.message = payload.errors[0]
			res.status(400).json(payload)
			break;
		case 'report not found':
			payload.errors.push('Report not found')
			payload.message = payload.errors[0]
			res.status(400).json(payload)
			break;
		case 'You are not authorized':
			payload.errors.push('You are not authorized')
			payload.message = payload.errors[0]
			res.status(400).json(payload)
			break;	
		case 'country not found':
			payload.errors.push('You are not authorized')
			payload.message = payload.errors[0]
			res.status(400).json(payload)
			break;		
		default:
			console.log(err)
			payload.errors.push('Database error')
			payload.message =  payload.errors[0]
			res.status(500).json(payload)
			break;
	}
}

module.exports = errorHandler