let productname = document.getElementById("product-name")
let productprice = document.getElementById("product-price")
let productqty = document.getElementById("product-qty")

document.addEventListener('DOMContentLoaded',function(){
    addedProductName = localStorage.getItem(product_name)
    addedProductprice = localStorage.getItem(product_price)
    addedProductqty = localStorage.getItem(product_qty)

    productname.textContent = addedProductName
    productprice.textContent = addedProductprice
    productqty.setAttribute = addedProductqty
})