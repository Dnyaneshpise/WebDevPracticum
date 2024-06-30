
class Cart{
  #localStorageKey;
  cartItems;
  cartQuantity=0;
  constructor(localStorageKey){
    this.#localStorageKey=localStorageKey;
    this.#loadFromStorage()
    //we should not return anything from constructor
  }

  #loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem(this.#localStorageKey)) || [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 3,
      deliveryOptionId: "1"
    }, {
      productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
      quantity: 5,
      deliveryOptionId: "2"
    }];
  };

  saveToStorage(){
    localStorage.setItem(this.#localStorageKey,JSON.stringify(this.cartItems))
  };

  addToCart(productId,productQuantity){
    console.log(productQuantity);
    let matchingIteam;
    this.cartItems.forEach((item)=>{
      if(productId===item.productId){
        matchingIteam = item;
        }
      });
      if(matchingIteam){
        matchingIteam.quantity+=productQuantity;
      }else{
        this.cartItems.push({
          productId:productId,
          quantity:productQuantity,
          deliveryOptionId :'1'
        })
      }
      this.cartItems.forEach((item)=>{
        this.cartQuantity+=item.quantity;
      })
      this.saveToStorage();
      // return cartQuantity;
  };

  removeFromCart(productId){
    const newCart = [];
    this.cartItems.forEach((item)=>{
      if(item.productId!==productId){
        newCart.push(item);
      }
    })
    this.cartItems = newCart;
    this.cartItems.forEach((item)=>{
      this.cartQuantity+=item.quantity;
    })
    this.saveToStorage();
  };

  updateDeliveryOption(productId,deliveryOptionId){
    let matchingIteam;
    this.cartItems.forEach((item)=>{
      if(productId===item.productId){
        matchingIteam = item;
        }
      });

      matchingIteam.deliveryOptionId=deliveryOptionId;
      this.saveToStorage();
  };
}


const cart = new Cart("cart-oop");
const businessCart = new Cart("cart-business");

console.log(cart.cartQuantity)
cart.addToCart("b0f17cc5-8b40-4ca5-9142-b61fe3d98c85");
console.log(cart)
console.log(businessCart)
