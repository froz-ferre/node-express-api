// libs
const express = require('express');
const bodyParser = require('body-parser');


// myLibs
var db = require('./db');
var artistsController = require('./controllers/artists');

// create sever
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Routes
/* GET */
app.get('/', function(req, res) {
	res.send('Hello, bitches!');
})


app.get('/artists', artistsController.all);

app.get('/artists/:id', artistsController.findById);

/* POST */
app.post('/artists', artistsController.create);

/* PUT */
app.put('/artists/:id', artistsController.update);

/* DELETE */
app.delete('/artists/:id', artistsController.delete);


// Runserver
db.connect('mongodb://localhost:27017/myapi', function (err) {
	if (err) {
		return console.log(err);
	}
	app.listen(8081, function() {
		console.log('Server is running');
	})

})


