const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/Index');
const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.listen(PORT, () => {
    console.log(`API server now on port ${PORT}!`);
  });