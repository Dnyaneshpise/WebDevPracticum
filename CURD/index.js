const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')
require('dotenv').config();

const Product = require(path.join(__dirname,'/models/product'))
const Farm =require(path.join(__dirname,'/models/farms'))

mongoose.connect(process.env.MONGO_URI)
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

app.get('/farms',async(req,res)=>{
  const farms = await Farm.find({});
  res.render('farms/index',{ farms })
})

app.get('/farms/new', (req , res ) => {
  res.render('farms/new')
})

app.delete('/farms/:id',async (req,res)=>{
  try{
    // console.log('deleting')
    const farm = await Farm.findByIdAndDelete(req.params.id);

    res.redirect('/farms')
  }catch(e){
    console.log(e)
  }
})

//show route for farms
app.get('/farms/:id',async (req,res)=>{
  try{
    const farm = await Farm.findById(req.params.id).populate('products');
    res.render('farms/show',{ farm })
  }catch(e){
    console.log(e)
  }
})

app.post('/farms' , async (req , res)=>{
  try{

    const farm = new Farm(req.body)
    await farm.save();
    res.redirect('/farms')
  }catch(err){
    console.log(err)
  }
})


app.get('/farms/:id/products/new', async (req,res)=>{
  const { id } = req.params;
  const farm= await Farm.findById(id);
  const farmName = farm.name;
  // console.log(farmName);
  res.render('farms/newFarmProduct',{ categories ,id ,farmName})
})

app.post('/farms/:id/products',async (req,res)=>{
  try{
    const { id } = req.params;
    const farm = await Farm.findById(id);
    const { name, price, category } = req.body;
    const product = new Product({ name ,price , category});
    farm.products.push(product);
    product.farm=farm;
    await farm.save();
    await product.save();
    res.redirect(`/farms/${farm._id}`)
  }catch(e){
    console.log(e);
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
app.get('/',(req,res)=>{
res.redirect('/products')
})
app.get('/products/:id', async (req,res)=>{
  const { id } = req.params;
  const product = await Product.findById(id).populate('farm','name');
  // console.log({...product});
  // console.log(product)
  res.render('products/show',{ product })
  // console.log(product);

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

const port = process.env.PORT || 3000;
app.listen(port, ()=>{
  console.log("APP IS LISTENING ON PORT 3000!")
})


// /categories/DOMMatrixReadOnly

// /products?category=dairy