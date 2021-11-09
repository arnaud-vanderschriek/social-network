const express = require('express');
const userRoutes = require('./routes/user.routes.js')
require('dotenv').config({path: './config/.env'})
require('./config/db')
const app = express();


app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

//routes
app.use('/api/user', userRoutes)

// server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`)
})


function generate_token(length){
  //edit the token allowed characters
  var a = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890".split("");
  var b = [];  
  for (var i=0; i<length; i++) {
      var j = (Math.random() * (a.length-1)).toFixed(0);
      b[i] = a[j];
  }
  return b.join("");
}

console.log(generate_token(64));