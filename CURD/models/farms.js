const mongoose = require('mongoose');
const { Schema } = mongoose;

const farmSchema = new Schema({
  name:{
    type: String ,
    required: [ true , "Farm must have a name !"]
  },
  city:{
    type:String
  },
  email:{
    type:String,
    required:[ true , "Email required"]
  },
  products:[
    {
      type: Schema.Types.ObjectId,
      ref: 'Product'
    }
  ]
})



//express middleware and mongoose middleware are different 
//they have same principal but different ways of implimentation

// farmSchema.pre('findOneAndDelete', async (data)=>{
//   console.log("pre middleware")
//   console.log(data)
// })

farmSchema.post('findOneAndDelete', async function (farm) {
  try {
    if (farm.products.length) {
      console.log(farm," is deleting")
      const Product = mongoose.model('Product');
      const res = await Product.deleteMany({ _id: { $in: farm.products } });
      console.log(res);
    }
  } catch (error) {
    console.error('Error deleting products associated with the farm:', error);
  }
});

const Farm = mongoose.model('Farm', farmSchema);
 
module.exports = Farm;