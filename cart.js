let productname = document.getElementById("product-name")
let productprice = document.getElementById("product-price")
let productqty = document.getElementById("product-qty")

let cartbtn = document.getElementById("cart")

cartbtn.addEventListener('onclick',function(){
    let addedProductName = localStorage.getItem('product_name')
    let addedProductprice = localStorage.getItem('product_price')
    let addedProductqty = localStorage.getItem('product_qty')

    productname.textContent = addedProductName
    productprice.textContent = addedProductprice
    productqty.setAttribute = addedProductqty
    window.location.href= './cart.html'
})