const express = require('express');
const users = require('./handlers/users');
const travelposts = require('./handlers/travelposts');
const handleError = require('./middleware/error');
const verifyUser = require('./middleware/auth');
const cors = require('cors');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());

const corsOptions = {
	origin: 'https://travel-jar.netlify.app/',
	optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

server.use(cors());

// routes below

// 1. GET home page - see all posts
server.get('/', travelposts.getAllPosts);
// 2. POST user login details
server.post('/login', users.login);
// 3. POST sign up
server.post('/signup', users.signUp);
// 4. POST travel post
server.post('/posts', verifyUser, travelposts.createPost);
// 5. PUT (update) travel post

// 6. DEL travel post

// 7. GET all posts of one place /posts:place
// server.get('/posts/:location', travelposts.getLocation);

// 8. GET all posts from one user
server.get('/posts/:id', travelposts.getId);

// error handling

// server.use(handleErrors);
server.use(handleError);

// listening to server
server.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = server;
