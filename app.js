const express = require('express');
const app = express();
const cors = require('cors');

const bodyParser = require('body-parser');

app.set('view engine', 'ejs');
const routes = require('./routes');
app.use(cors());


// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
 
// parse application/json
app.use(bodyParser.json());


// Add headers
// app.use(function(req, res, next) {
//     res.header("Access-Control-Allow-Origin", "YOUR-DOMAIN.TLD"); // update to match the domain you will make the request from
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     next();
//   });
  

routes(app);
app.listen(5000);