// Import libraries 
const express = require('express');
const app = express();
const cors = require('cors');
const { join } = require("path");
const fileUpload = require('express-fileupload');
require('./src/db/database')

const morgan = require('morgan'); //Pependencia Desarollo

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(morgan('dev'))
app.use(fileUpload({createParentPath : true}));

// Static files
app.use(express.static(join(__dirname, "public"))); 

// Routes
app.use('/api', require("./src/routes/usersRouter"));

// 404 not found
app.use((req, res, next) => {
  res.status(404).send("404");
});

// Start server 
let port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`🌐 Servidor escuchando en http://localhost:` + port);
});




