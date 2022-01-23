const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
const routes = require('./routes/htmlRoutes');
const api = require('./routes/apiRoutes');

app.use('/', routes);
app.use('/api/', api);

app.listen(PORT, () => console.log('App listening on PORT ' + PORT));