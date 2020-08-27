const express = require('express');
const users = require('./handlers/users');
// const travelposts = require('./handlers/travelposts');
const handleErrors = require('./middleware/error');

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());

// routes below

// 1. GET home page - see all posts
<<<<<<< HEAD
server.get('/', travelposts.getAllPosts);
// 2. POST user login details
// server.post("/login", express.urlencoded(),users.login);
// 3. POST sign up
server.post('/signup', express.urlencoded(), users.signUp);
// 4. POST travel post
// server.get('/posts/:', )
// 5. PUT (update) travel post
=======
// ver.get('/', travelposts.getAllPosts);
// 2. POST - user login details
// server.post('/login', express.urlencoded());
// 3. POST - sign up
server.post('/signup', express.urlencoded(), users.signUp);

// 4. POST - travel post
// server.post('/travels', express.urlencoded());

// 5. PUT - (update) travel post
>>>>>>> 4cf3ac6e196dd0d1170be3c020e58c168c53ecca

// 6. DEL travel post

// 7. GET all posts of one place /posts:place
// server.get('/posts/:location', travelposts.getLocation);

// 8. GET all posts from one user
server.get('/posts/:id', travelposts.getId);

// error handling

// server.use(handleErrors);

// listening to server
server.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});

module.exports = server;
