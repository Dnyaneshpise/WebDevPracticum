import { cart ,removeFromCart ,updateDeliveryOption} from "../../data/cart.js";
import { products , getProduct } from "../../data/products.js";
//above is name export and below is default export
import formatCurrency  from "../utils/money.js";
import { deliveryOptions ,getDeliveryOption} from "../../data/deliveryOptions.js";
//Below is ESM version i.e ecmascript module
import dayjs from "https://unpkg.com/dayjs@1.11.11/esm/index.js";
import { renderPaymentSummary } from "./paymentSummary.js";


export function renderOrderSummary(){

  let cartSummarryHTML ='';

  cart.forEach((cartItem)=>{
    const productId =cartItem.productId;
    //Normalizing or deduplicating data

    const matchingProduct=getProduct(productId)

    const deliveryOptionId = cartItem.deliveryOptionId;

    const deliveryOption =getDeliveryOption(deliveryOptionId)

    const today = dayjs();
    const deliveryDate = today.add(deliveryOption.deliveryDays,"days");
    const dateString = deliveryDate.format("dddd, MMMM D")


    cartSummarryHTML+=
    `
    <div class="cart-item-container js-cart-item-container js-cart-item-container-${matchingProduct.id}">
      <div class="delivery-date">
        Delivery date: ${dateString}
      </div>

      <div class="cart-item-details-grid">
        <img class="product-image"
          src="${matchingProduct.image}">

        <div class="cart-item-details">
          <div class="product-name">
            ${matchingProduct.name}
          </div>
          <div class="product-price">
            ${matchingProduct.getPrice()}
          </div>
          <div class="product-quantity js-product-quantity-${matchingProduct.id}">
            <span>
              Quantity: <span class="quantity-label">${cartItem.quantity}</span>
            </span>
            <span class="update-quantity-link link-primary">
              Update
            </span>
            <span class="delete-quantity-link link-primary js-delete-link-${matchingProduct.id} js-delete-link" 
            data-product-id='${matchingProduct.id}'>
              Delete
            </span>
          </div>
        </div>

        <div class="delivery-options">
          <div class="delivery-options-title">
            Choose a delivery option:
          </div>
          ${deliveryOptionsHTML(matchingProduct,cartItem)}
        </div>
      </div>
    </div>
    `;
  });

  function deliveryOptionsHTML(matchingProduct,cartItem){
  let HTML='';

    deliveryOptions.forEach((option)=>{
      const today = dayjs();
      const deliveryDate = today.add(option.deliveryDays,"days");
      const dateString = deliveryDate.format("dddd, MMMM D")
      const priceString  = option.priceCents ===0 ? "FREE" : `$${formatCurrency(option.priceCents)} - `;

      const isChecked = option.id === cartItem.deliveryOptionId;
      HTML+=
      `<div class="delivery-option js-delivery-option"
      data-product-id="${matchingProduct.id}" data-delivery-option-id="${option.id}">
          <input type="radio" ${isChecked?"checked":''}
            class="delivery-option-input"
            name="delivery-option-${matchingProduct.id}">
          <div>
            <div class="delivery-option-date">
              ${dateString}
            </div>
            <div class="delivery-option-price">
              ${priceString} Shipping
            </div>
          </div>
      </div>`;
    })

    return HTML;
  }

  document.querySelector(".js-order-summary")
    .innerHTML = cartSummarryHTML;



  document.querySelectorAll(".js-delete-link")
    .forEach((link)=>{
      link.addEventListener("click",()=>{
        const productId = link.dataset.productId;
        removeFromCart(productId);

        const container = document.querySelector(`.js-cart-item-container-${productId}`)
        container.remove();
        renderPaymentSummary();
      });
    });

  document.querySelectorAll(".js-delivery-option")
    .forEach((element) => {
      element.addEventListener("click",()=>{
        const {productId,deliveryOptionId}=element.dataset;
        console.log(productId,deliveryOptionId);
        updateDeliveryOption(productId,deliveryOptionId)
        renderOrderSummary();
        renderPaymentSummary()
      });
    });

}
