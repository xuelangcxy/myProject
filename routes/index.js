var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home', { title: '博厚至诚 | 首页' });
});

router.get('/home', function(req, res, next) {
	res.redirect('/');
})

router.get('/profile', function(req, res, next) {
  res.render('profile', { title: '博厚至诚 | 公司简介' });
});

router.get('/team', function(req, res, next) {
  res.render('team', { title: '博厚至诚 | 至诚团队' });
});

router.get('/about', function(req, res, next) {
  res.render('about', { title: '博厚至诚 | 关于我们' });
});

router.get('/recruitment', function(req, res, next) {
  res.render('recruitment', { title: '博厚至诚 | 招贤纳士' });
});

router.get('/contact', function(req, res, next) {
  res.render('contact', { title: '博厚至诚 | 联系我们' });
});

module.exports = router;
