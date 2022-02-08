const express = require("express")

require("dotenv").config() // require("dotenv/config")

const app = express();

// Build the server here

app.use(express.static("public"))  //method to configure the application 
//static directive and indicate the name of the "public" folder


//this responds to all HTTP verbs

app.all("/", (request,response)=>{
    response.sendFile(__dirname+ "/views/index.html")
})


app.all("/home", (request,response)=>{
    response.sendFile(__dirname+ "/views/home.html")
})



app.listen(3000,()=>console.log("App listening on port 3000"))