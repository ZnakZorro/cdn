const express = require('express');
const cors = require('cors');
const app = express();

 
app.use(cors());
app.use(express.static('public'));


app.get('/', function (req, res, next) {
  res.send('HI mini 8080');
})
app.get('/radio/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'});
})
 
app.listen(8080, function () {
  console.log('CORS-enabled web server listening on port 8080');
})
