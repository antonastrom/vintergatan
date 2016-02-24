var express = require('express');
var router = express.Router();
var _ = require('lodash');


//a list of information, this would normally come from a database but we list it here instead.

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Home Page' });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Menu' });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign Up Menu' });
});

router.get('/changepassword', function(req, res, next) {
  res.render('changepassword', { title: 'Change Password' });
});

router.get('/shoppingcart', function(req, res, next) {
  res.render('shoppingcart', { title: 'Shopping Cart' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: 'About' });
});

router.get('/payment', function(req, res, next) {
  res.render('payment', { title: 'Payment' });
});

router.get('/trackorder', function(req, res, next) {
  res.render('trackorder', { title: 'Track Order' });
});

router.get('/orderhistory', function(req, res, next) {
  res.render('orderhistory', { title: 'Order History' });
});

router.get('/myaccount', function(req, res, next) {
  res.render('myaccount', { title: 'My Account' });
});

router.get('/watches', function(req, res, next) {
  res.render('watches', { title: 'Watches' });
});

router.get('/jackets', function(req, res, next) {
  res.render('jackets', { title: 'Jackets' });
});

router.get('/costumes', function(req, res, next) {
  res.render('costumes', { title: 'Costumes' });
});

router.get('/shirts', function(req, res, next) {
  res.render('shirts', { title: 'Shirts' });
});

router.get('/underwear', function(req, res, next) {
  res.render('underwear', { title: 'Underwear' });
});

router.get('/t-shirts', function(req, res, next) {
  res.render('t-shirts', { title: 'T-shirts' });
});

router.get('/sweatshirts', function(req, res, next) {
  res.render('sweatshirts', { title: 'Sweatshirts' });
});

router.get('/shoes', function(req, res, next) {
  res.render('shoes', { title: 'Shoes' });
});

router.get('/joggers', function(req, res, next) {
  res.render('joggers', { title: 'Joggers' });
});

router.get('/accessories', function(req, res, next) {
  res.render('accessories', { title: 'Accessories' });
});
module.exports = router;
