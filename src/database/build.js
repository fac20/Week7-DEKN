const fs = require("fs");
const path = require("path");
const db = require("./connection");

const initPath = path.join(__dirname, "test.sql");
console.log(initPath);
const initSQL = fs.readFileSync(initPath, "utf-8");

function build() {
	return db.query(initSQL);
}

if (require.main === module) {
	build().then(() => db.end());
}

module.exports = build;
