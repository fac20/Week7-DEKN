const jwt = require('jsonwebtoken');
const dotenv = require('dotenv').config();
const bcrypt = require('bcryptjs');
const usersModel = require('../model/users');

const SECRET = process.env.JWT_SECRET;

function login(req, res, next) {
	const username = req.body.username;
	const password = req.body.password;
	bcrypt
		.genSalt(10) //returns salt
		.then((salt) => bcrypt.hash(password, salt))
		.then((hashedPwd) => {
			usersModel.getUser(username)
				.then((userObject) => {
					const storedPassword = userObject.password;
					if (hashedPwd !== storedPassword) {
						const error = new Error("Unauthorized");
						error.status = 401;
						next(error);
					} else {
						const token = jwt.sign(userObject, SECRET, {
							expiresIn: '1h',
						});
						res.status(200).send({ access_token: token })
					}
				})
				.catch(next);
		})
		.catch(next);
}

function signUp(req, res, next) {
	// take information from sign up form
	const body = req.body;
	const username = body.username;
	const password = body.password;
	bcrypt
		.genSalt(10) //returns salt
		.then((salt) => bcrypt.hash(password, salt))
		.then((hashedPwd) => {
			return usersModel.createUser({
				username: username,
				password: hashedPwd,
			}); // inserts new data into database
		})
		.then((user) => {
			console.log(user);
			const token = jwt.sign(user, SECRET, {
				expiresIn: '1h',
			});
			console.log(token);
			res.status(201).send({ access_token: token });
		})
		.catch(next);

	// get information from users database

	// compare sign up user name and password with database username and password
}

function logout(req, res, next) {
	res.status(200).send({ access_token: 0 })
}

module.exports = {
	login,
	signUp,
	logout,
}