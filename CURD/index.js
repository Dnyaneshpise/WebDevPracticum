const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const Product = require(path.join(__dirname,'/models/product'))

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB", err);
    });


app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')


app.get('/products',async (req,res)=>{
  const products = await Product.find({});
  // console.log(prod)
  res.render('products/index',{ products })  //will render from view folder no need to give .ejs explicitly here second argument is passign data into this ejs file
  // res.send("hello there!!")
})

app.listen(3000, ()=>{
  console.log("APP IS LISTENING ON PORT 3000!")
})