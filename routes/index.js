var express = require('express');
var router = express.Router();
const fs=require('fs');
var rawdata=fs.readFileSync('commands.json');
const instructions=JSON.parse(rawdata);
const { exec } = require('child_process');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/vm/start',function(req,res){
  exec(instructions["startVM"], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.send(`${error}`)
      return
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send(`${stdout}${stderr}`)
  });
})

router.get('/vm/status',function(req,res){
  exec(instructions["statusVM"], (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      res.send(`${error}`)
      return;
    }
    console.log(`stdout: ${stdout}`);
    console.error(`stderr: ${stderr}`);
    res.send(`${stdout}${stderr}`)
  });
})

module.exports = router;
