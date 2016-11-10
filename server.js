var express = require('express')
var app = express()
var pug = require('pug');
var multer = require('multer')
var upload = multer({dest: 'uploads/'}) //ops go here?

app.post('/upload', upload.single('f'), function(req, res, next){
  
  f = req.file;
  res.send(JSON.stringify({"size": f.size}));


});

app.get('/', function (req, res) {
  //How to serve html?
  var cf = pug.compileFile('template.pug');
  res.send(cf({name: 'Tim'}))
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
