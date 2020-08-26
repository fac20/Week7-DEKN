const travelpostModel = require("../model/travelposts");

function getAllPosts(req, res, next) {
	travelpostModel
		.getAllPostsDB() // To be updated with actual function name
		.then((posts) => {
			res.send(posts);
		})
		.catch(next);
}

module.exports = {
	getAllPosts,
};
