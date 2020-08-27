const db = require('../database/connection');

function createUser(userObject) {
	const username = userObject.username;
	const password = userObject.password;
	console.log(userObject);
	return db
		.query(
			'INSERT INTO users(username, password) VALUES($1,$2) RETURNING username',
			[username, password]
		)
		.then((result) => {
			return result.rows[0];
		})
		.catch((error) => error);
}

function getUser(username) {
	console.log(username);
	return db
		.query('SELECT * FROM users WHERE username=($1)', [username])
		.then((user) => user.rows[0])
		.catch((error) => error);
}

module.exports = {
	getUser,
	createUser,
};
