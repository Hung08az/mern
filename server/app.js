const express = require('express');
const cors = require("cors");
require('dotenv').config();
//create out express

const app = express();

const crudRoute = require('./routes/crud');
app.use(cors());
app.use(express.json(), express.urlencoded({ extended: true }));
app.use('/crud', crudRoute);

// start server
app.listen(process.env.PORT, () => {
    console.log("Listening at port " + process.env.PORT);
})