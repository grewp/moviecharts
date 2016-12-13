var request = require('request');
var cheerio = require('cheerio');
var mysql = require("mysql");

var scrape = function (cb) {
  var title = [];
  var gross = [];

  request('http://www.fandango.com/boxoffice', function (error, response, html) {
    if (!error && response.statusCode == 200) {
      var $ = cheerio.load(html);
      $('.movieTitle').each(function(i, element){
        title[i] = $(this).find('a').text(); //link text
        gross[i] = $(this).next().text();
      });
      return cb(title, gross);
    }
  });
};

var cleanData = function (title, gross) {
  //Clean up requested data
        
  title.splice(0, 1);
  gross.splice(0, 1);
  var newTitle = title.map(titleClean)
  var newGross = gross.map(grossClean);
  var data = { title : newTitle, gross: newGross };
  console.log('about to log')
  logData(data);
};

var titleClean = function (title) {
  //title cleanup
  if (!title) {
    return 'N/A';
  } else {
    return title;
  }
};

var grossClean = function (gross) {
  //weekendGross cleanup
  gross = gross.match(/[\d.]+/);
  return parseFloat(gross[0]);
};

var logData = function (data) {
  //connection credentials
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

  //data entry
  for (var i=0; i < data.title.length; i++) {
    con.query('INSERT INTO 12_12_BO SET ?', { title: data.title[i], gross: data.gross[i] }, function(err,res){
      if(err) throw err;
      console.log('Last insert ID:', res.insertId);
    })
  };

  //terminate connection
  con.end(function(err) {
  });
};


scrape(cleanData)

