// required packages and assignments
const express = require("express");
const fs = require("fs");
const path = require("path");
const notesDb = require("./db/db.json");
const PORT = process.env.PORT || 3001;
const app = express();

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// GET routes
app.get("/api/notes", (req, res) => {
  res.json(notesDb);
});

// Get notes.html file
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/notes.html"));
});

// POST routes adds notes to json file
app.post("/api/notes", (req, res) => {
  let saveNote = req.body;
  notesDb.push(saveNote);

  let number = 1;
  notesDb.forEach((note) => {
    note.id = number;
    number++;
    return notesDb;
  });
  console.log(notesDb);
  // Writes to database
  writeToDataBase(notesDb);
  res.json(saveNote);
});





fs.writeFileSync(jsonFilePath, JSON.stringify(notesDb), function (err) {
  if (err) {
    return console.log(err);
  } else {
    console.log("HOO-RAY, YOUR NOTE WAS DELETED!");
  }
});
res.json(notesDb);
});

// Get index.html file. Because of the Asterisk, this Get function must come last.
app.get("*", (req, res) => {
res.sendFile(path.join(__dirname, "./public/index.html"));
});