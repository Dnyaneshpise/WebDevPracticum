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

// const p = new Product({
//   name:"Ruby Grapefruit",
//   price:1.99,
//   category:'fruit'
// })
// p.save()
// .then((p)=> console.log(p))
// .catch((e)=> console.log(e))

const seedProducts =[
  {
    "name": "Ruby Grapefruit",
    "price": 1.99,
    "category": "fruit"
  },
  {
    "name": "Red Apple",
    "price": 0.99,
    "category": "fruit"
  },
  {
    "name": "Banana",
    "price": 0.49,
    "category": "fruit"
  },
  {
    "name": "Strawberries",
    "price": 2.49,
    "category": "fruit"
  },
  {
    "name": "Pineapple",
    "price": 2.99,
    "category": "fruit"
  },
  {
    "name": "Kiwi",
    "price": 1.79,
    "category": "fruit"
  },
  {
    "name": "Orange",
    "price": 1.29,
    "category": "fruit"
  },
  {
    "name": "Mango",
    "price": 2.19,
    "category": "fruit"
  },
  {
    "name": "Pear",
    "price": 1.69,
    "category": "fruit"
  },
  {
    "name": "Grapes",
    "price": 1.49,
    "category": "fruit"
  }
];

Product.insertMany(seedProducts)
.then((msg)=>{
  console.log(msg);
})
.catch((err)=>{
  console.log(err)
});