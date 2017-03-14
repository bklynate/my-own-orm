const connection = require('./connection');

const orm = {
  selectAll: function(callback) {
    let dbQuery = "SELECT * FROM burgers_db"
    connection.query(dbQuery, function(error,results) {
      if(error) throw error;
      callback(results);
    });
  },

  insertOne: function(burger_name, callback) {
    let dbQuery = "INSERT INTO burgers_db (burger_name) VALUES (?)"
    connection.query(dbQuery,[burger_name],function(error, results) {
      if(error) throw error;
      callback(results);
    });
  },

  updateOne: function(devoured,id,callback) {
    let dbQuery = "UPDATE burgers_db SET devoured=? WHERE id=?";
    connection.query(dbQuery, [devoured,id], function(error, results) {
      if(error) throw error;
      callback(results);
    })
  }
}

module.exports = orm;
