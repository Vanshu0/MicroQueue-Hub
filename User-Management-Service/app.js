var express=require("express");

var app=express();
var cookieParser=require("cookie-parser");
var path=require("path");
var amqplib=require("amqplib");
var logger=require("morgan");
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

(async()=>{
   const queue='session';
   const conn=await amqplib.connect('amqp://localhost');
   const ch1 = await conn.createChannel();
   await ch1.assertQueue(queue);
   app.locals.channel = ch1;
   app.locals.queue = queue; 
})()
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/users',usersRouter);

app.use(function(req,res,next){
    next(createError(404));
});

app.use(function(err,req,res,next){
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
})
module.exports = app;