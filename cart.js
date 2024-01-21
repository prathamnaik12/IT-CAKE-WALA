let productname = document.getElementById("product-name");
let productprice = document.getElementById("product-price");
let productqty = document.getElementById("product-qty");
let productImg = document.getElementById("product-img")
let cartbtn = document.getElementById("cart");

cartbtn.addEventListener('click', function () {
    let addedProductName = localStorage.getItem('product_name');
    let addedProductprice = localStorage.getItem('product_price');
    let addedProductImg = localStorage.getItem('product_img')
    console.log(addedProductName)
    console.log(addedProductprice)
    console.log(addedProductImg)
    productname.textContent = addedProductName;
    productprice.textContent += addedProductprice;
    productImg.src = addedProductImg

    window.location.href = './cart.html';
});
