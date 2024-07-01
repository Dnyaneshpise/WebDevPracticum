export let cart;

loadFromStorage();

export function loadFromStorage(){
    cart =JSON.parse(localStorage.getItem("cart")) || [];
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


export function loadCart(fun){ //THIS FUN IS ALSO KNOW AS CALLBACK
  const xhr = new XMLHttpRequest();
  xhr.addEventListener('load',()=>{
    console.log(xhr.response)
    fun();
  });
  xhr.open('GET','https://supersimplebackend.dev/cart');
  xhr.send();
}