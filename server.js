var express = require('express')
var app = express()
var pug = require('pug');
var multer = require('multer')
var upload = multer({dest: 'uploads/'}) //ops go here?

app.use('/public', express.static(process.cwd() + '/public'));

app.post('/upload', upload.single('upload'), function(req, res, next){
  console.log(req.file);
  f = req.file;
  res.send(JSON.stringify({"size": f.size}));


});

app.get('/', function (req, res) {
  //How to serve html?
  var cf = pug.compileFile('public/template.pug');
  res.send(cf({name: 'Tim'}))
})

app.listen(process.env.PORT || 5000);
