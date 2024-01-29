
import { CakeData } from './cakeDataArray.js';

let cartbtn = document.getElementById('cart')
let buybtn = document.getElementById('buy')

let productImgSrc = "_"
let productNametxt ="_"
let productPricetxt = "_"
let addedtocart = "cart"
let addedtobuy = "buy"

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
  saveFormData()
  addToCart()
})

buybtn.addEventListener('click', function(){
  saveFormData()
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
    localStorage.setItem('addedto',addedtocart)
    window.location.href = './cart.html'
  }else {
    let msg = document.getElementById("msg")
    msg.classList.toggle("hidden")
  }
}

function buyNow() {

  if(isFormValid()){
    saveFormData('buy')
    localStorage.setItem('product_name',productNametxt)
    localStorage.setItem('product_price',productPricetxt)
    localStorage.setItem('product_img', productImgSrc)
    localStorage.setItem('product_qty',1)
    localStorage.setItem('addedto',addedtobuy)
    window.location.href = './cart.html'

  }else {
    let msg = document.getElementById("msg")
    msg.classList.toggle("hidden")
  }
}

async function saveFormData(action) {
  const location = document.getElementById('locationInput').value
  const contact = document.getElementById('ContactInput').value
  const date = document.getElementById('datefield').value
  const withEgg = document.getElementById('withEgg').checked
  const eggless = document.getElementById('eggless').checked
  const message = document.getElementById('messageInput').value

  const formData = { location, contact, date, withEgg, eggless, message, productNametxt, productPricetxt, action }
  console.log(formData)
  localStorage.setItem('formData', JSON.stringify(formData))

  try {
        const response = await fetch('http://127.0.0.1:5000/api/save_form_data', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            console.log('Form data sent successfully')
        } else {
            console.error('Failed to send form data')
        }
    } catch (error) {
        console.error('Error sending form data:', error)
    }
}


