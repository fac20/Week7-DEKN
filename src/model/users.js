const db = require('../database/connection');

function createUser(userObject) {
	const username = userObject.username;
	const password = userObject.password;
	//insert username and password into database
	db.query(
		`INSERT INTO users(username, password) VALUES($1,$2), [${username}, ${password}]`
	);
}

function getUser() {}

module.exports = {
	getUser,
	createUser,
};
