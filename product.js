
import { CakeData } from './cakeDataArray.js';

let cartbtn = document.getElementById('cart')
let buybtn = document.getElementById('buy')

let productImgSrc = "_"
let productNametxt ="_"
let productPricetxt = "_"

document.addEventListener('DOMContentLoaded', function() {
  let clickedProductId = localStorage.getItem('clickedProductId')

  if (clickedProductId) {
    console.log("Clicked Product Id:", clickedProductId)
  } else {
    console.log("No product id found");
  }
  let productData = CakeData.find(product => product.id === clickedProductId);
  console.log("Clicked Product Id:", clickedProductId);
  console.log("Product Data:", productData);

  if (productData) {
    productImgSrc = productData.src
    productNametxt = productData.name
    productPricetxt = productData.price
    let productImgP = document.getElementById("product-Img")
    let productNameP = document.getElementById("product-Name")
    let productPriceP = document.getElementById("product-Price")
    productImgP.src = productImgSrc
    productNameP.textContent = productNametxt
    productPriceP.textContent += productPricetxt
    }
})

cartbtn.addEventListener('click',function(){
  addToCart()
})

buybtn.addEventListener('click', function(){
  buyNow()
})

function isFormValid() {
    const locationInput = document.getElementById('locationInput');
    const datefield = document.getElementById('datefield');
    const withEgg = document.getElementById('withEgg');
    const eggless = document.getElementById('eggless');
    const messageInput = document.getElementById('messageInput');

    return (
        locationInput.checkValidity() &&
        datefield.checkValidity() &&
        (withEgg.checked || eggless.checked) &&
        messageInput.checkValidity()
    );
}

function addToCart() {
  console.log("addToCart function is being called.");
  if(isFormValid()){
    saveFormData('cart')
    localStorage.setItem('product_name',productNametxt)
    localStorage.setItem('product_price',productPricetxt)
    localStorage.setItem('product_img', productImgSrc)
    localStorage.setItem('product_qty',1)
    window.location.href = './cart.html'
  }else {
    let msg = document.getElementById("msg")
    msg.classList.toggle("hidden")
  }
}

function buyNow() {

  if(isFormValid()){
    saveFormData('buy')
  }else {
    let msg = document.getElementById("msg")
    msg.classList.toggle("hidden")
  }
}

function saveFormData(action) {
  const location = document.getElementById('locationInput').value
  const date = document.getElementById('datefield').value
  const withEgg = document.getElementById('withEgg').checked
  const eggless = document.getElementById('eggless').checked
  const message = document.getElementById('messageInput').value

  const formData = { location, date, withEgg, eggless, message, action }
  console.log(formData)
  localStorage.setItem('formData', JSON.stringify(formData))
}


