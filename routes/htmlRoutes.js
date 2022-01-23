const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = app;