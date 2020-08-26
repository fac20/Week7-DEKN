const express = require("express");
const users = require("./handlers/users");
const travelposts = require("./handlers/travelposts");
const handleErrors = require("./middleware/error");

const PORT = process.env.PORT || 3000;

const server = express();

server.use(express.json());

// routes below

// 1. GET home page - see all posts
server.get("/", travelposts.getAllPosts);
// 2. POST user login details
server.post("/login", ))
// 3. POST sign in

// 4. POST travel post

// 5. PUT (update) travel post

// 6. DEL travel post

// 7. GET all posts of one place /posts:place

// 8. GET all posts from one user

// error handling

server.user(handleErrors);

// listening to server
server.listen(PORT, () => {
	console.log(`Listening on http://localhost:${PORT}`);
});
