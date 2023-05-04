var express = require('express');
var router = express.Router();
const multer = require('multer');

const storage = multer.diskStorage({
  destination: function(req, file, cb) {
      cb(null, 'public/images/');
  }, 
  filename: function(req, file, cb) {
      cb(null, file.originalname);
  }
});
 
var upload = multer({ storage: storage })

/* GET home page. */

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/',upload.single('multi-files') ,function(req, res, next) {
  console.log(req.file);
  res.redirect('/');
});

module.exports = router;
