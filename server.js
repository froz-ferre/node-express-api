const express = require('express');

const app = express();

var artists = [
	{
		id: 1,
		name: 'Metallica'
	},
	{
		id: 2,
		name: 'Bon Jovi'
	}
];


// Routes
app.get('/', function(req, res) {
	res.send('Hello, bitches!');
})


app.get('/artists', function(req, res) {
	res.send(artists);
})

app.get('/artists/:id', function(req, res) {
	var artist = artists.find(function(artist) {
		return artist.id === parseInt(req.params.id);
	})
	res.send(artist);
})

// Runserver
app.listen(3012, function() {
	console.log('Server is running');
})
