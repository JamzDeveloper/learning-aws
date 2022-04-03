const express = require("express");

const app = express()

app.get("/",(req,res)=>res.send("hello word from express with aws"))
app.listen(3000);
console.log("server on port 3000");
