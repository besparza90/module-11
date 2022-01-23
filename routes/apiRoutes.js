const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
const note = require('../db/db.json');

app.use(express.json());
app.get('/notes', (req, res) => {
    if (note.length > 0) {
        for (let i = 0; i < note.length; i++) {
            note[i].id = i + 1;
        }
    }
    res.json(note);
});

app.post('/notes', (req, res) => {
    const newNote = req.body;
    let noteID = note.length + 1;
    newNote.id = noteID;
    note.push(newNote);
    
    fs.writeFile(path.join(__dirname, '../db/db.json'),
    JSON.stringify(note),
    err => {
        if (err) throw err;
    }
    );
    res.json(newNote);
});

module.exports = app;