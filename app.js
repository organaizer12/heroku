var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
var nodemailer = require('nodemailer');


let transporter=nodemailer.createTransport({
	service:'Gmail',
	auth:{
		user:'ivanpopovne@gmail.com',
		pass:'ivanpopovne1987'
	}
})
app.post('/user', jsonParser, function(req, res){
	if(!req.body) return res.sendStatus(400);
	console.log(req.body);
	res.json('');
	const output = `Новое сообщение с сайта "Экспертиза в Москве"<p>Имя: ${req.body.userName}</p><p>Телефон:${req.body.userPhone}</p>
	<p>E-mail:${req.body.userEmail}</p><p>Комментарий: ${req.body.userComm}</p>`

	let mailOptions = {
		from:'ivanpopovne@gmail.com',
		to:'ivan_popovne@mail.ru',
		subject:'form on expSite',
		text:'hello',
		html:output
	};

	transporter.sendMail(mailOptions, (error, info)=>{
		if(error){
			return console.log(error);
		};
		console.log('message sent');

	});


});

app.use(express.static(__dirname + '/public'))
var server = app.listen(3000, function(){
	console.log('Listening on port 3000');
});