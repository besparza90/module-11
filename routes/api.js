const express = require('express');
const fs = require('fs');
const path = require('path');
const app = express();
const notesDB = require('../db/db.json');

app.use(express.json());

app.get('/notes', (req, res) => {
    if (notesDB.length > 0) {
        for (let i = 0; i < notesDB.length; i++) {
            notesDB[i].id = i + 1;
        }
    }
  res.json(notesDB);
  });

  app.post('/notes', (req, res) => {
      const newNote = req.body;
      let noteID = notesDB.length + 1;
      
      newNote.id = noteID;
      notesDB.push(newNote);
      
      fs.writeFile(
      path.join(__dirname, '../db/db.json'),
      JSON.stringify(notesDB),
      err => {
          if (err) throw err;
        }
    );
  
    res.json(newNote);
  });

module.exports = app;