const express =require('express');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const methodOverride = require('method-override')


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

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(methodOverride('_method'))
app.use(express.urlencoded({ extended: true }))

app.get('/products',async (req,res)=>{
  const products = await Product.find({});
  // console.log(prod)
  res.render('products/index',{ products })  //will render from view folder no need to give .ejs explicitly here second argument is passign data into this ejs file
  // res.send("hello there!!")
})

app.get('/products/new',(req,res)=>{
  res.render('products/new')
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
    res.render('products/edit',{ product })
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

app.listen(3000, ()=>{
  console.log("APP IS LISTENING ON PORT 3000!")
})