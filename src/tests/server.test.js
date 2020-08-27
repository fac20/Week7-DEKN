const server = require('../server');
const supertest = require('supertest');
const test = require('tape');

const nock = require('nock');

test('testing route to get all posts', (t) => {
	const mocks = nock('https://travel--jar.herokuapp.com/');
	mocks.get('/').reply(200, { text: 'all the posts are here!' });

	supertest(server)
		.get('/')
		.expect(200)
		.then((res) => {
			t.equal(res.text, 'all the posts are here!');
			t.end();
		});
});
