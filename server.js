// libs
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;

// create sever
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// temp DB
let db;
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
/* GET */
app.get('/', function(req, res) {
	res.send('Hello, bitches!');
})


app.get('/artists', function(req, res) {
	res.send(artists);
})

app.get('/artists/:id', function(req, res) {
	var artist = artists.find(function(artist) {
		return artist.id === parseInt(req.params.id);
	});
	res.send(artist);
})

/* POST */
app.post('/artists', function(req, res) {
	var artist = {
		id: Date.now(),
		name: req.body.name
	};
	artists.push(artist);
	res.send(artist);
})

/* PUT */
app.put('/artists/:id', function(req, res) {
	var artist = artists.find(function(artist) {
		return artist.id === parseInt(req.params.id);
	});
	artist.name = req.body.name;
	res.sendStatus(200);
})

/* DELETE */
app.delete('/artists/:id', function(req, res) {
	artists.filter(function(artist) {
		return artist.id !== parseInt(req.params.id);
	})
	res.sendStatus(200);
})


// Runserver
MongoClient.connect('mongodb://localhost:27017/myapi', function (err, database) {
	if (err) {return console.log(err);}
	db = database;
	app.listen(3012, function() {
		console.log('Server is running');
	})

})


