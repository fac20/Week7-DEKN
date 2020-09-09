const pg = require('pg');
const dotenv = require('dotenv');

// load the environment variables from the ".env" file
dotenv.config();

// grab the URL for our local database
let connectionString = process.env.DATABASE_URL;

const options = {
	connectionString: connectionString,
	// ssl: { rejectUnauthorized: false },
};

// test string
if (process.env.NODE_ENV === 'test') {
	connectionString = process.env.TEST_DATABASE_URL;
}

// create a pool of available connections
// to use this to query our database
const db = new pg.Pool(options);

module.exports = db;
