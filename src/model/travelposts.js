const db = require('../database/connection');

function getAllPost() {
	return;
	db.query('SELECT * FROM travel_posts'), then((result) => result.rows);
}

// users, travel_posts
// function getUsers() {
//     return db.query("SELECT * FROM users").then(result => result.rows);
//   }

// function createUser(data) {
//     const values = [data.username, data.age, data.location];
//     return db.query(
//       "INSERT INTO users(username, age, location) VALUES($1, $2, $3)",
//       values
//     );
//   }
