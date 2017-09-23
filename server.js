// libs
const express = require('express');
const bodyParser = require('body-parser');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

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
	db.collection('artists').find().toArray(function (err, docs) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(docs);
	})
})

app.get('/artists/:id', function(req, res) {
	db.collection('artists').findOne({ _id: ObjectID(req.params.id) }, function(err, doc) {
		if (err) {
			console.log(err);
			return res.sendStatus(500);
		}
		res.send(doc);
	})
})

/* POST */
app.post('/artists', function(req, res) {
	var artist = {
		name: req.body.name
	};
	db.collection('artists').insert(artist, function(err, result) {
		if (err) {
			console.log(err);
			 return res.sendStatus(500);
		}
		res.send(artist);
	})
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
	if (err) {
		return console.log(err);
	}
	db = database;
	app.listen(8081, function() {
		console.log('Server is running');
	})

})


