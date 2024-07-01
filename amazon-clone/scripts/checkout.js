import { renderOrderSummary } from "./checkout/orderSummary.js";
import { renderPaymentSummary } from "./checkout/paymentSummary.js";
import { loadProductsFetch } from "../data/products.js";
// import '../data/cart-class.js'
// import '../data/backend-practice.js'
import { loadCart } from "../data/cart.js";


Promise.all([
  loadProductsFetch(),
  new Promise((resolve)=>{
    loadCart(()=>{
      resolve();
    });
  })
]).then(()=>{
  renderOrderSummary();
  renderPaymentSummary();
})




// new Promise((resolve)=>{
//   loadProducts(()=>{
//     resolve("value 1");
//   });

// }).then((value)=>{
//   return new Promise((resolve)=>{
//     loadCart(()=>{
//       resolve();
//     });
//   })

// }).then(()=>{
//   renderOrderSummary();
//   renderPaymentSummary();
// })



// loadProducts(()=>{
//   loadCart(()=>{
    
//   renderOrderSummary();
//   renderPaymentSummary();
//   })
// }) 