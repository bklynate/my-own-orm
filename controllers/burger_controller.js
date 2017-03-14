const express = require('express');
const burger = require('../models/burger');
const router = express.Router();

router.get('/', function(request, response) {
  burger.findAllBurgers(function(results) {
    response.render('index',{results})
  })
})

router.post('/createBurger', function(request, response) {
  let name = request.body.burger_name
  burger.createNewBurger(name, function() {
    response.redirect('/');
  })
})

router.put('/updateBurgerStatus/:id', function(request, response) {
  let id = request.params.id
  let foodStatus = request.body.devoured
  burger.updateBurgerStatus(foodStatus,id,function(){
    response.redirect('/')
  })
})

module.exports = router;
