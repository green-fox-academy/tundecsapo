'use strict';

const app = require('./routes');
const PORT = 8080;

app.listen(PORT, () => {
  console.log(`App is up and running on port ${PORT}`);  
})
