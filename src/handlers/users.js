const jwt = require("jsonwebtoken");
const dotenv = require("dotenv").config();
const bcrypt = require("bcryptjs");
const usersModel = require("../model/users");

const SECRET = process.env.JWT_SECRET;

function login(req, res, next) {
	const username = req.body.username;
	const password = req.body.password;
	usersModel.getUser(username).then();
}

module.exports = {
	login,
};
