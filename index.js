const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const PORT = process.env.PORT || 3001;

const app = express();



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooks";
app.use(bodyParser.json());

mongoose.connect(
    MONGODB_URI, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useCreateIndex: true
    }
)
.then(() => console.log("DB Connected"))
.catch(err => {
    console.log("DB CONNECTION ERROR")
});


app.listen(PORT, () => {
    console.log("Server now on Port: " + PORT);
});