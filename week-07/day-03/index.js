'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

app.get('/test', (req, res) => {
  res.json({
    message: 'OK',  
  });  
});

app.listen(PORT, () => {
  console.log(`The server is app and running on port ${PORT}`);  
})