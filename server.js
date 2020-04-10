const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = 3000;
const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});

//Add the routes here

app.listen(port, function(){
    return console.log("App is running!")
});