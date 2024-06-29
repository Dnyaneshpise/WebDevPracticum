import { cart } from "../../data/cart.js"
import { getProduct} from "../../data/products.js"
import { getDeliveryOption } from "../../data/deliveryOptions.js";


export function renderPaymentSummary(){
  //I have two property from cart i.e id and quantity NOW to get all other properties form these two we use normalization methode
  let productPriceCents =0;
  let shippingPriceCents =0;
  cart.forEach((item)=>{
    const product = getProduct(item.productId);

    productPriceCents+=product.priceCents * item.quantity;

    const deliveryOption =getDeliveryOption(item.deliveryOptionId);
    shippingPriceCents+=deliveryOption.priceCents;
  });

  const totalBeforeTaxCents = productPriceCents + shippingPriceCents;
  const taxCents = totalBeforeTaxCents * 0.1;
  const totalCents = totalBeforeTaxCents + taxCents;
  
}