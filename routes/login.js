var express = require('express');
var router = express.Router();
var passport = require('passport');

/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login',{'viewAlt':true});
});

router.get('/loginAlt', function(req, res, next) {
  res.render('login',{'viewAlt':false});
});

//Login Handle
router.post('/login',(req,res,next) => {
	passport.authenticate('local', {
		successRedirect: '../users/home',
		failureRedirect: 'login',
		failureFlash: true
	})(req,res,next);
});

module.exports = router;