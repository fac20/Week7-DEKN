const test = require("tape");
const build = require("../database/build");
const db = require("../database/connection");

test("Can get list of users", (t) => {
	build()
		.then(() => db.query("SELECT * FROM users"))
		.then((result) => result.rows)
		.then((users) => {
			const firstUser = users[0];
			t.equal(firstUser.username, "faclover");
			t.equal(firstUser.password, "fac1234");
			t.end();
		})
		.catch((buildError) => {
			t.error(buildError);
			t.end();
		});
});

// otherwise tests will pause for 10s in the terminal
test("Close DB pool (not a real test)", (t) => {
	db.end();
	t.end();
});
