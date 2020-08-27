const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');
const usersModel = require('../model/users');

const SECRET = process.env.JWT_SECRET;

function login(req, res, next) {
	const username = req.body.username;
	const password = req.body.password;
	usersModel.getUser(username).then();
}

function signUp(req, res, next) {
	// take information from sign up form
	const body = req.body;
	const username = body.username;
	const password = body.password;
	//bcrypt the password
	bcrypt
		.genSalt(18) //returns salt
		.then((salt) => bcrypt.hash(password, salt))
		.then((hashedPwd) => {
			return usersModel.createUser({ username: username, password: hashedPwd }); // inserts new data into database
		})
		.then((user) => {
			console.log(user);
			const token = jwt.sign(user, SECRET, {
				expiresIn: '1h',
			});
			console.log(token);
			const response = {
				username: username,
				access_token: token,
			};
			res.status(201).send(response);
		})
		.catch(next);

	// get information from users database

	// compare sign up user name and password with database username and password
}

module.exports = {
	login,
	signUp,
};
