let productname = document.getElementById("product-name");
let productprice = document.getElementById("product-price");
let productqty = document.getElementById("product-qty");
let productImg = document.getElementById("product-img")
let cartbtn = document.getElementById("cart");

cartbtn.addEventListener('click', function () {
    let addedProductName = localStorage.getItem('product_name');
    let addedProductprice = localStorage.getItem('product_price');

    productname.textContent = addedProductName;
    productprice.textContent = addedProductprice;
    productqty.setAttribute('im', addedProductqty); 

    window.location.href = './cart.html';
});
