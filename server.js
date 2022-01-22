const apiRoutes = require('./routes/api');
const htmlRoutes = require('./routes/Index');
const PORT = process.env.PORT || 3000;
const express = require('express');
const app = express();

app.use('/api', apiRoutes);
app.use('/', htmlRoutes);

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.listen(PORT, () => {
  console.log(`API server is ready on port ${PORT}!`);
});