const express = require("express"); 
const app = express(); 
const path = require("path")
const fs = require("fs")
const notes = require("./db/db.json")

// port
const port = process.env.port || 3000; 

//Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// HTML Routes 

app.listen(port, function (){
 console.log(`App is listening at ${port}`);
})

// Serve the homepage to the server 
app.get("/", function (req, res){
 res.sendFile(path.join(__dirname,"index.html"));

})

app.get("/notes", function (req, res ){
 res.sendFile(path.join(__dirname, "notes.html"))
})

app.get("/assets/style.css", function (req, res ){
 res.sendFile(path.join(__dirname, "assets/style.css"))
})

app.get("/assets/app.js", function (req, res ){
 res.sendFile(path.join(__dirname, "assets/app.js"))
})
// clg this route to see if it is getting hit



//API routes 

//Show Data 
//App.Get
// get api/notes should read the db.json and return all saved notes as JSON 

app.get("/api/notes", function (req, res ){
 res.json(notes); 

})

// Post 
// should recieve a a new note and save the on request body. 
// add to db. JSON 
//return the new note to the client 

// app.post("/api/notes/", function(req, res){


//  const newNote = req.body

//  notes.push(newNote)



// })

// Delete 
// 

// app.post()




