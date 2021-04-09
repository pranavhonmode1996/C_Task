const cors = require('cors');
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const { MONGO_RUI } = require("./Key");
require('./model/Order');
require('./model/AddItems');
require('./model/SaveItem');
const Router = require('./routes/Router');
const PORT = 4000;

app.use(cors());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(express.json());
app.use(Router);

// mongoDB atlas connection
mongoose.connect(MONGO_RUI, {useNewUrlParser: true, useUnifiedTopology: true});

mongoose.connection.on('connected', () => {
    console.log('successfully connected to mongodb database');
})

mongoose.connection.on('error', () => {
    console.log('Error while connecting to the mongodb database');
})

app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
