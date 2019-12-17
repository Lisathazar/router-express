const express = require('express');
const app = express();
const port = 8000;
const api = require('./routes');



app.use('/api', api);

app.listen(port, (err) => {
  if (err) {
    throw new Error('Something bad happened...');
  }
  console.log(`Server is listening on ${port}`);
});
