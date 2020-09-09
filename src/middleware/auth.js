const dotenv = require('dotenv');
const jwt = require('jsonwebtoken');
const model = require('./model/users');

dotenv.config();

const SECRET = process.env.JWT_SECRET;

function verifyUser(req, res, next) {
	//we're requesting the authorisation header that comes with the request.
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		const error = new Error('Authorization header is required');
		error.status = 400;
		next(error); // passes the error to the error handling middleware
	}
	const token = authHeader.replace('Bearer ', ''); // getting token out of the header

	// if verification fails JWT throws an error, hence the try/catch
	try {
		const data = jwt.verify(token, SECRET);
		model
			.getUser(data.username)
			.then((username) => {
				// attach the authenticated user to the request object
				// so other handlers can access it without doing all this nonsense
				req.user = username;
				next();
			})
			.catch(next);
	} catch (error) {
		// catch statements have to capture an error variable, even if you don't need it
		// we don't use the caught error, since we know it came from jwt.verify
		const error = new Error('Invalid token!!!');
		error.status = 401;
		next(error);
	}
}

module.exports = verifyUser;
