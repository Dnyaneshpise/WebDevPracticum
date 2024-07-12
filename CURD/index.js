const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


const Product = require(path.join(__dirname,'/models/product'))
const Farm =require(path.join(__dirname,'/models/farms'))

mongoose.connect('mongodb://127.0.0.1:27017/farmStand2')
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch(err => {
        console.error("Could not connect to MongoDB", err);
    });


app.set('views',path.join(__dirname,"views"));
app.set('view engine','ejs')

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

//FARM ROUTES

app.get('/farms/new', (req , res ) => {
  res.render('farms/new')
})

app.post('/farms' , async (req , res)=>{
  try{
    
    const farm = new Farm(req.body)
    await farm.save();

  }catch(err){
    console.log(err)
  }
})

//PRODUCT ROUTES

app.get('/products',async (req,res)=>{

  const {category} =req.query;
  if(category){
    const products = await Product.find({category:category});
    res.render('products/index',{ products ,category })  //will render from view folder no need to give .ejs explicitly here second argument is passign data into this ejs file
  // res.send("hello there!!")
    
  }else{
    const products = await Product.find({});
    res.render('products/index',{ products , category:'All'})  //will render from view folder no need to give .ejs explicitly here second argument is passign data into this ejs file
  // res.send("hello there!!")
  }
  // console.log(prod)
  
})

const categories =["fruit","vegetable","dairy"]
app.get('/products/new',(req,res)=>{
  
  res.render('products/new',{ categories })
})

app.post('/products',async (req,res)=>{
  try{
    const newProduct = await new Product(req.body);
    await newProduct.save()
    // res.send('making your product');
    res.redirect(`/products/${newProduct.id}`)
  }catch
  {
    (e)=>{
      console.log(e)
    }
  }
})

app.get('/products/:id', async (req,res)=>{
  const { id } = req.params;
  const product = await Product.findById(id);
  // console.log({...product});
  res.render('products/show',{ product })
  console.log(product);

  // res.send("details page!");
})


app.get('/products/:id/edit', async (req,res)=>{
  try{
    const { id } = req.params;
    const product = await Product.findById(id);
    // console.log({...product});
    res.render('products/edit',{ product , categories})
  }catch(err){

    console.log(err)
  }
})

app.put('/products/:id', async (req,res)=>{
  try{
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id,req.body,{runValidators:true ,new:true});
    // res.send("This is the put request")
    // product.then((msg)=>{
    //   console.log(msg)
    // })
    res.redirect(`/products/${product._id}`)
  }catch(err){
    console.log(err);
  }
})

app.delete('/products/:id',async (req,res)=>{
  
  const { id } = req.params;
  //deleting from DB
  const deletedProduct = await Product.findByIdAndDelete(id)
  res.redirect('/products')
  // res.send("deleted")
})

app.listen(3000, ()=>{
  console.log("APP IS LISTENING ON PORT 3000!")
})


// /categories/DOMMatrixReadOnly

// /products?category=dairy