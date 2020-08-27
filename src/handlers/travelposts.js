const travelpostModel = require('../model/travelposts');

function getAllPosts(req, res, next) {
	travelpostModel
		.getAllPosts() // To be updated with actual function name
		.then((posts) => {
			res.send(posts);
		})
		.catch(next);
}

// function getLocation(req, res, next) {
// 	const location = req.params.location;
// 	// console.log(location);
// 	travelpostModel
// 		.getLocation(location)
// 		.then((posts) => {
// 			res.status(200).send(posts);
// 		})
// 		.catch(next);
// }

function getId(req, res, next) {
	const id = req.params.id;
	console.log(id);
	travelpostModel
		.getId(id)
		.then((posts) => {
			res.status(200).send(posts);
		})
		.catch(next);
}

module.exports = {
	getAllPosts,
	getId,
};
