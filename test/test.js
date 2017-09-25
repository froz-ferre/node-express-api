const request = require('supertest');

var app = require('../server').app;

it("return Hello, bitches!", function (done) {
	request(app)
			.get('/')
			.expect('Hello, bitches!')
			.end(done)
});