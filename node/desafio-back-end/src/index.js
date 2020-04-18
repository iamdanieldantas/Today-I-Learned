const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

//Usado para receber json post
app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(8000, function () {
  console.log('Example app listening on port 8000!')
});


