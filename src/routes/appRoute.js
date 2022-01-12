const express = require('express');
const appController = require('../controllers/appController');
const app = express.Router();

app.get("/",(req,res)=>{
    res.send("Page Root");
});

app.get("/login",appController.login);

app.get("/product/:id/:type",appController.getProduct);

app.post("/register",appController.register);

module.exports = app;