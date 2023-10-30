var express = require('express');
var router = express.Router();

/* GET home page. */

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Mini Messageboard',messages:messages });
});

router.get('/new',function(req,res){
  res.render('forum',{title:'hi'})
})

router.post('/new',function(req,res){
  const a_name = req.body.author_name
  const message = req.body.message
  messages.push({text:message,user:a_name,added: new Date()})
  console.log(a_name  + ' ' + message)
  res.redirect('/')
})
module.exports = router;
