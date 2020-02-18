var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express from server folder' });
});

/* GET 메서드용 로그인 페이지 */
router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Login Page', message: req.flash('loginMessage') });
});

/* GET 메서드용 회원가입 페이지 */
router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Signup Page', message: req.flash('loginMessage') });
});

/* GET 메서드용 프로필 페이지 */
router.get('/profile', function(req, res, next) {
  res.render('profile', {
    title: 'Profile Page', user: req.user,
    avatar: gravatar.url(req.user.email,
    { s: '100', r: 'x', d: 'retro' },
    true)
  });
});

module.exports = router;
