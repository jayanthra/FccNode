
var express = require('express');
var bodyParser = require('body-parser')
var app = express();


// --> 7)  Mount the Logger middleware here


// --> 11)  Mount the body-parser middleware  here


/** 1) Meet the node console. 


/** 2) A first working Express Server */
//app.get("/", (req, res) => {
 // res.send('Hello Express');
//})
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: false}))

app.use(function(req, res, next) {
console.log(req.method + " "+req.path +" - "+ req.ip);
next();
})

/** 3) Serve an HTML file */
app.get("/", (request, response) => {
  response.sendFile(__dirname + '/views/index.html')
})


/** 4) Serve static assets  */


/** 5) serve JSON on a specific route */
app.get("/json", (request, response) => {
  
  var msg = "Hello json";
  
  if(process.env.MESSAGE_STYLE ==="uppercase")
    msg = msg.toUpperCase();
    
  response.json({"message": msg})
})


/** 6) Use the .env file to configure the app */
 
 
/** 7) Root-level Middleware - A logger */
//  place it before all the routes !


/** 8) Chaining middleware. A Time server */
app.get("/now", function(req, res, next) {
 req.time = new Date().toString()
  next();
},
  function(req, res) {
  res.json({"time": req.time})
});

/** 9)  Get input from client - Route parameters */
app.get("/:word/echo", function(req, res) {
   res.json({"echo": req.params.word})
});

/** 10) Get input from client - Query parameters */
// /name?first=<firstname>&last=<lastname>
var getname = function(req, res) {
   console.log("asking"+req.body.first)
   res.json({"name":  req.body.first +" "+req.body.last})  
};

var postname = function(req, res) {
   console.log("what ?")
};

app.route("/name").get(getname).post(getname);
  
/** 11) Get ready for POST Requests - the `body-parser` */
// place it before all the routes !


/** 12) Get data form POST  */



// This would be part of the basic setup of an Express app
// but to allow FCC to run tests, the server is already active
/** app.listen(process.env.PORT || 3000 ); */

//---------- DO NOT EDIT BELOW THIS LINE --------------------

 module.exports = app;
