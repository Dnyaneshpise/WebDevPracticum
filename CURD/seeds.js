const mongoose = require('mongoose');
const path = require('path');
const Product = require(path.join(__dirname,'/models/product'))

mongoose.connect('mongodb://127.0.0.1:27017/farmStand')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB", err);
    });

const p = new Product({
  name:"Ruby Grapefruit",
  price:1.99,
  category:'fruit'
})

p.save()
.then((p)=> console.log(p))
.catch((e)=> console.log(e))

Product.insertMany();