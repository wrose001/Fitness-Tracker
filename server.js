const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const port = process.env.PORT || 3000;

const User = require("./models/userModel.js");

const app = express();

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));
mongoose.connect("mongodb://localhost/workout", {
    useNewUrlParser: true,
    useFindAndModify: false
});


//Add the routes here
app.use(require("./routes/api.js"));

app.use(require("./routes/view.js"));

app.listen(port, function(){
    return console.log("App is running!")
});