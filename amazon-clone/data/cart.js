export let cart;

loadFromStorage();

export function loadFromStorage(){
    cart =JSON.parse(localStorage.getItem("cart")) || [{
    productId:"e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    quantity:3,
    deliveryOptionId :"1"
  },{
    productId:"54e0eccd-8f36-462b-b68a-8182611d9add",
    quantity:5,
    deliveryOptionId :"2"
}];
}

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
        quantity:productQuantity,
        deliveryOptionId :'1'
      })
    }
    let cartQuantity=0;
    cart.forEach((item)=>{
      cartQuantity+=item.quantity;
    })
    saveToStorage();
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
  saveToStorage();
}

export function updateDeliveryOption(productId,deliveryOptionId){
  let matchingIteam;
  cart.forEach((item)=>{
    if(productId===item.productId){
      matchingIteam = item;
      }
    });

    matchingIteam.deliveryOptionId=deliveryOptionId;
    saveToStorage();
}