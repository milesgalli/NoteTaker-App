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



//Show Data 

app.get("/api/notes", function (req, res ){
 res.json()
})

