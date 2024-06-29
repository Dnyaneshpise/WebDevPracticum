export let cart=[{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:3
},{
  productId:"54e0eccd-8f36-462b-b68a-8182611d9add",
  quantity:5
}];


function saveToStorage(){
  localStorage.setItem('cart',JSON.stringify(cart))
}

export function addToCart(productId,productQuantity){
  console.log(productQuantity);
  let matchingIteam;
  cart.forEach((item)=>{
    if(productId===item.productId){
      matchingIteam = item;
      }
    });
    if(matchingIteam){
      matchingIteam.quantity+=productQuantity;
    }else{
      cart.push({
        productId:productId,
        quantity:productQuantity
      })
    }
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    })
    return cartQuantity;
}


export function removeFromCart(productId){
  const newCart = [];
  cart.forEach((item)=>{
    if(item.productId!==productId){
      newCart.push(item);
    }
  })
  cart = newCart;
}