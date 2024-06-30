const cart={
  cartItems:undefined,
  
  cartQuantity: 0,

  loadFromStorage(){
    this.cartItems = JSON.parse(localStorage.getItem("cart-oop")) || [{
      productId: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
      quantity: 3,
      deliveryOptionId: "1"
    }, {
      productId: "54e0eccd-8f36-462b-b68a-8182611d9add",
      quantity: 5,
      deliveryOptionId: "2"
    }];
  },

  //below function is shortcut for  saveToStorage : function(){};

  saveToStorage(){
    localStorage.setItem('cart-oop',JSON.stringify(this.cartItems))
  },

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
  },

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
  },

  
  updateDeliveryOption(productId,deliveryOptionId){
    let matchingIteam;
    this.cartItems.forEach((item)=>{
      if(productId===item.productId){
        matchingIteam = item;
        }
      });

      matchingIteam.deliveryOptionId=deliveryOptionId;
      this.saveToStorage();
  }

};

cart.loadFromStorage();

cart.addToCart("b0f17cc5-8b40-4ca5-9142-b61fe3d98c85");
console.log(cart)

