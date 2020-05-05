const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const notes = require("./db/db.json");

// port
const port = process.env.port || 3000;

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes

app.listen(port, function () {
  console.log(`App is listening at ${port}`);
});

// Serve the homepage to the server
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/notes", function (req, res) {
  res.sendFile(path.join(__dirname, "notes.html"));
});

app.get("/assets/style.css", function (req, res) {
  res.sendFile(path.join(__dirname, "assets/style.css"));
});

app.get("/assets/app.js", function (req, res) {
  res.sendFile(path.join(__dirname, "assets/app.js"));
});
//API routes

app.get("/api/notes", function (req, res) {
  res.json(notes);
});

//Post
app.post("/api/notes", (req, res) => {
  req.body.id = notes.length;
  const newNote = req.body;
  notes.push(newNote);
  fs.writeFileSync(
    path.join(__dirname, "/db/db.json"),
    JSON.stringify(notes, null, 2)
  );
  res.json(newNote);
});

// Delete

app.delete("/api/notes/:id", (req, res) => {
  const deteteID = req.params.id;
  notes.splice(deteteID, 1);

  // Reasign note ids

  for (let i = 0; i < notes.length; i++) {
    console.log(notes[i]);
    notes[i].id = i;
    console.log(notes[i]);
  }

fs.writeFileSync(
  path.join(__dirname, '/db/db.json'), 
  JSON.stringify(notes, null, 2)
);

res.json(req.body)

}); 
