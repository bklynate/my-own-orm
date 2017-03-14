const mysql = require('mysql');
let connection;

if(process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "root",
    database: "burgers_db"
  });
}

connection.connect(error => {
  if(error){
    return console.log('Error Message:', error)
  } else {
    console.log("connected as id " + connection.threadId);
  }
});

module.exports = connection;
