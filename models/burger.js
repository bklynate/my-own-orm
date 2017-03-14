const orm = require('../config/orm');

const burger = {
  findAllBurgers: function(callback) {
    orm.selectAll(function(results){
      callback(results);
    });
  },

  createNewBurger: function(burger_name, callback) {
    orm.insertOne(burger_name, function(results) {
      callback(results);
    })
  },

  updateBurgerStatus: function(devoured,id, callback) {
    orm.updateOne(devoured,id,function(results) {
      callback(results)
    })
  }

}

module.exports = burger;
