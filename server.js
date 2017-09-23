import express from 'express';

const app = express();

app.get('/', function(req, res) {
	res.send('Hello, bitches!');
})

app.listen(3012, function() {
	console.log('Server is running');
})