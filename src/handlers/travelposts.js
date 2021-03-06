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

function createPost(req, res, next) {
	const body = req.body; // we get an object with place, message, and img link
	travelpostModel
		.createNewPost(body)
		.then((posts) => {
			res.status(201).send(posts);
		})
		.catch(next);
}
// function deletePost(req, res, next) {}
// function del(req, res, next) {
// 	const dogId = req.params.id;
// 	const userId = req.user.id;
// 	model
// 	  .getDog(dogId)
// 	  .then((dog) => {
// 		if (dog.owner !== userId) {
// 		  const error = new Error("Unauthorized");
// 		  error.status = 401;
// 		  next(error);
// 		} else {
// 		  model.deleteDog(dogId).then(() => {
// 			res.status(204).send();
// 		  });
// 		}
// 	  })
// 	  .catch(next);
//   }

module.exports = {
	getAllPosts,
	getId,
	createPost,
};
