const path = require('path');
const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));
app.get('/notes', (req, res) =>
res.sendFile(path.join(__dirname, '../public/notes.html'))
);

module.exports = app;