var express = require('express');
var router = express.Router();
var bodyParser = require('body-parser');
var app = express();
//var connection = require('../database/database');
var nodemailer = require('nodemailer');
var passport = require('passport');
var expressSession = require('express-session');
var LocalStrategy = require('passport-local').Strategy;
var async = require('async');
var mysql = require('mysql');
var fs = require('fs');
app.use('maka',express.static( __dirname + '/public/youtube_images'));
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'mynodedb'
});

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'bhaksaleharami@gmail.com',
    pass: 'sid1@345'
  }
});

router.post('/fakeall',function(req,res){
	res.json({data:'http://localhost:5000/youtube_images/'+req.body.filename});
});

router.post('/deletephoto',function(req,res){
	fs.exists('public/youtube_images/'+req.body.filename, function(exists) {
		if(exists){
			fs.unlinkSync('public/youtube_images/'+req.body.filename);
			res.json({data:"success"});
		} else {
			res.json({data:"failed"});
		}
	});
});

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Login to website' });
});
/*
router.get('/signup', function(req, res) {
  res.render('signup', { title: 'New User :: Signup' });
});


router.post('/dowork',function(req,res){
	console.log("sssssssssss");
	console.log(req.body.msg);
	
	db.users.find({}, function (err, docs) {
        console.log(docs);
    });
	
	res.json({status:req.body.msg});
});

router.post('/register', function(req, res) {
	var name = req.body.data.name;
	var email = req.body.data.email;
	var password = req.body.data.password;
	var tel = req.body.data.tel;
	
	db.users.count({"email":email}, function (err, docs) {
        if(err) { throw err; } 
        else {
			if(docs==1) {
				res.json({status:"0", error:"user_exist"});
			} else {
				var da = {"name":name,"email":email,"password":password,"tel":tel};
				db.users.create(da);
				var mailOptions = {
									  from: 'nodeJSproject@gmail.com',
									  to: email,
									  cc: "siddharth.mishra85@gmail.com",
									  subject: 'Activate your account',
									  html: '<b>Dear '+name+'</b>, <br /><br /> Welcome to our website. Please activate your account by clicking <a href="http://localhost:5000/verifyuser">here</a>.'
									};
				transporter.sendMail(mailOptions, function(error, info){
				  if (error) {
					throw error; 
				  } else {
					console.log('Email sent: ' + info.response);
					res.json({status:"1", error:"user_inserted"});
				  }
				});
			}
		}
    });
});

*/


router.post('/getuniquevideo',function(req,res){
	var videoid = req.body.id;
	connection.query("SELECT * FROM youtube_videos where id = '"+req.body.id+"' && status='0'", function(err, results) {
		if (err) throw err;
		res.json({data:results});
	});
});



router.post('/getphotos',function(req,res){
	var videoid = req.body.id;
	connection.query("SELECT * FROM thumb_images inner join youtube_videos on youtube_videos.id = thumb_images.youtube_video_id where thumb_images.youtube_video_id = '"+req.body.id+"'", function(err, results) {
		if (err) throw err;
		var finalarr = [];
		for(var i=0; i<results.length; i++){
			var newobj = {src: 'youtube_images/'+results[i].thumb_url, desc: 'Image', my_title: results[i].my_title, my_desc:results[i].my_desc, my_tags: results[i].my_tags};
			finalarr.push(newobj);
		}
		res.json({data:finalarr});
	});
});





router.post('/getallvideos',function(req,res){
	var finalarr = [];
	connection.query("SELECT * FROM youtube_videos where status = '0'", function(err, results) {
		if (err) throw err;
		//console.log(results);
		var i = 0;
		async.forEach(Object.keys(results), function (item, callback){ 
			var itemfinal = [];
			var newitem = results[item];
			var videoid = newitem['id'];
			connection.query("SELECT * FROM thumb_images where youtube_video_id = "+videoid, function(e, r) {
				if (e) throw e;
				itemfinal[0] = results[item];
				itemfinal[1] = r;
				finalarr.push(itemfinal);
				i++;
				if(i==results.length)
				res.json({status:"1", result:finalarr});	
			});
			callback(); 
		}, function(err) {
			console.log(finalarr);
		});  
		
		var videoid = results[0]['id'];
		connection.query("SELECT * FROM thumb_images where youtube_video_id = "+videoid, function(e, r) {
			if (e) throw e;
			results.thumbnail_images = r;
			//console.log(results);
			res.json({status:"1", result:results});	
		});
	});
});


/* Handle Login POST */
router.post('/login', passport.authenticate('login', {
    successRedirect: '/home',
    failureRedirect: '/',
    failureFlash : true 
}));


/* Handle Logout */
router.get('/signout', function(req, res) {
  req.logout();
  res.redirect('/');
});







module.exports = router;
