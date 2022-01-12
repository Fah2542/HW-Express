const express = require("express");
const app = express.Router();

app.get("/", (req ,res)=>{
    res.send("Page Root");
});

app.get("/login", (req ,res)=>{
    res.send("Page Login");
});

app.post("/ragister", (req ,res)=>{
    res.send("Page admin register")
});

module.exports = app;

