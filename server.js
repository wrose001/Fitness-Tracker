const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 3000;

const User = require("./models/userModel.js");

const app = express();

app.use(morgan("dev"));

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());

app.use(express.static("public"));
// mongoose.connect("mongodb://localhost/workout", {
//     useNewUrlParser: true,
//     useFindAndModify: false
// });

//code = if deployed use deployed DB or use the local db
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";

//connecting to MongoDB
mongoose.connect(MONGODB_URI, {
    //Removes deprecation warnings
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
});

//Add the routes here
app.use(require("./routes/api.js"));

app.use(require("./routes/view.js"));

app.listen(PORT, function(){
    return console.log("App is running!")
});