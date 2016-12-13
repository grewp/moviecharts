var express = require('express');
var path = require('path');
var ejs = require('ejs');
var mysql = require('mysql');

var app = express();
var port = process.env.PORT || 3000;

app.set('port', port);

// Use the EJS rendering engine for HTML located in /views
app.set('views', __dirname + '/views');
app.engine('html', ejs.__express);
app.set('view engine', 'html');

// Host static files on URL path
app.use(express.static(path.join(__dirname, 'public')));

// Use express Router middleware for root path
// app.use(app.router);

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/data', function (req, res) {
	// getData wraps the res in a callback

	//login credentials
  var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "mrspooky6",
    database: "197final"
  });

  //establish connection
  con.connect(function(err){
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });

  //query data
  con.query('SELECT * FROM 12_12_BO',function(err,rows){
    if(err) throw err;

    console.log('Data received from Db:\n');

    res.send(rows);
  });

  //terminate connection
  con.end(function(err) {
  });

  
});

// Start server
app.listen(app.get('port'), function () {
  console.log('Express server listening on port ' + port);
});