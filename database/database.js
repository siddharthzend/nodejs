/*
var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://127.0.0.1:27017/mydb');
mongoose.connection.once('connected', function() {
	console.log("Connected to database")
});

var Schema = mongoose.Schema;
var users = new Schema({
    name: String,
    email: String,
    password:String,
    tel: String
});
*/


var mysql = require('mysql');
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mynodedb'
})

connection.connect(function(err) {
  if (err) throw err
  console.log('You are now connected with mysql')
})

//exports.users = mongoose.model('users', users);
