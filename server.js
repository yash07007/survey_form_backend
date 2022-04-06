// Imports
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

// Server config
const app = express();
const port = process.env.PORT || 5000;

// Express middleware config
app.use(cors());
app.use(express.json());

// Connect database
const databaseUri = process.env.ATLAS_URI;
mongoose.connect(databaseUri);

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB database connection established successfully");
});

// Listen to server
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
