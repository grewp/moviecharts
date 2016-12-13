var mysql = require("mysql");

//want to test unpacking data
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

con.query('SELECT * FROM 12_12_BO',function(err,rows){
  if(err) throw err;

  console.log('Data received from Db:\n');
  console.log(rows[0].title);
});



//terminate connection
con.end(function(err) {
});

var chartData = [
  {
    title: "Moana",
    gross: 2.2
  },
  {
    title: "Next Movie",
    gross: 1.0
  },
    {
    title: "Thrid Movie",
    gross: .6
  }

];//insert dummy data

console.log(chartData[0].title)