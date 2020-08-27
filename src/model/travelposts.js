const db = require('../database/connection');

function getAllPosts() {
	return db.query('SELECT * FROM travel_posts').then((result) => result.rows);
}

function createNewPost(data) {
	const userValues = [data.location, data.message, data.image];
	console.log(userValues);
	return db
		.query(
			'INSERT INTO travel_posts (location,message,image) VALUES ($1,$2,$3) RETURNING id',
			userValues
		)
		.then((result) => result.rows);
}

// const userValues = [data.username, data.location, data.password];
// //  Place the new user data into the table with a db.query
// return db
//   .query(
// 	"INSERT INTO users(username, location, password) VALUES($1, $2, $3) RETURNING id",
// 	userValues
//   )
//   .then(result => result.rows);

// function getPostsBylocation() {
// 	return db.query('SELECT * FROM travel_posts WHERE location = finsbury park');
// }

function getId(input) {
	console.log(input);
	return db
		.query(`SELECT * FROM travel_posts  WHERE user_id = '${input}'`)
		.then((result) => result.rows);
}

// function getLocation(input) {
// 	return db
// 		.query(`SE

// LECT * FROM travel_posts WHERE location = '${input}'`)
// 		.then((result) => result.rows);
// }s

// function createUser(data) {
//     const values = [data.username, data.age, data.location];
//     return db.query(
//       "INSERT INTO users(username, age, location) VALUES($1, $2, $3)",
//       values
//     );
//   }

module.exports = { getAllPosts, getId, createNewPost };
