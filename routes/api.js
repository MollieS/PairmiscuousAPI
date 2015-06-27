var express = require('express');  
var router = express.Router();

var users = require('./api/users.js');

/* Posts routes */
router.route('/users')  
    .post(function(req,res) { users.addUser(req,res) })
    .get(function(req,res) { users.getAllUsers(req,res) });

/* Single post routes */
router.route('/users/:user_id')  
    .get(function(req, res) { users.getSingleUser(req, res, req.params.user_id) })
    .put(function(req, res) { users.updateUser(req, res, req.params.user_id) })
    .delete(function(req, res) { users.deleteUser(req, res, req.params.user_id) });

module.exports = router; 
