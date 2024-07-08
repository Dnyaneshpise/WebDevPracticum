const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB", err);
    });


app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')


app.get('/dog',(req,res)=>{
  res.send("hello there")
})

app.listen(3000, ()=>{
  console.log("APP IS LISTENING ON PORT 3000!")
})