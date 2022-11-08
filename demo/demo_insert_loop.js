// include mysql module
var mysql = require('mysql');
 
// create a connection variable with the required details
var con = mysql.createConnection({
  host: "localhost",    // ip address of server running mysql
  user: "root",    // user name to your mysql database
  password: "", // corresponding password
  database: "db_nodejs" // use the specified database
});
 
// make to connection to the database.
con.connect(function(err) {
  if (err) throw err;
  // if connection is successful
  var records = [
    ['Company ABC', 'Highway 31'],
    ['Company ABD', 'Highway 32'],
    ['Company ABE', 'Highway 33']
  ];
  con.query("INSERT INTO customers (name,address) VALUES ?", [records], function (err, result, fields) {
    // if any error while executing above query, throw error
    if (err) throw err;
    // if there is no error, you have the result
    console.log(result);
  });
});