let productContainer = document.getElementById("container1")
let buyedContainer = document.getElementById("container2")
let productIdIncrementer = parseInt(localStorage.getItem('incrementor')) || 1
let cartArray = JSON.parse(localStorage.getItem('cart')) || []


document.addEventListener('DOMContentLoaded', function () {
    if (!productContainer) {
        console.error("Cart container not found")
        return
    }

    if (cartArray.length > 0 ) {
        cartArray.forEach(function (cartItem) {
            renderCartItem(cartItem)
        });
        const emptyCartElement = document.getElementById('Emptycart')
        if (emptyCartElement) {
            emptyCartElement.remove()
        }
    } else {
        let Emptycart = document.createElement('h1')
        Emptycart.textContent = "There Are No Cakes In Your Cart, Add Some delicious Cakes Now!"
        Emptycart.classList.add('font-arial', 'text-2xl', 'text-orange-500', 'flex', 'justify-center', 'items-center')
        Emptycart.id = 'Emptycart'
        productContainer.appendChild(Emptycart)
    }

    let addedProductName = localStorage.getItem('product_name')
    let addedProductPrice = localStorage.getItem('product_price')
    let addedProductImg = localStorage.getItem('product_img')
    let addedProductQty = localStorage.getItem('product_qty')
    let addTo = localStorage.getItem('addedto')

    function renderCartItem(cartItem) {
        if (cartArray.length <1 && cartItem.name === null || cartItem.price === null || cartItem.img === null || cartItem.qty === null ||
        cartItem.name === undefined || cartItem.price === undefined || cartItem.img === undefined || cartItem.qty === undefined) {
        return;
    }
        let productDiv = document.createElement('div');
        productDiv.classList.add('cart-item', 'bg-slate-50', 'mt-5', 'p-10', 'filter', 'drop-shadow-xl')
        
        let productDivCreatedId = cartItem.id
        productDiv.id = productDivCreatedId

        const productImg = document.createElement('img')
        productImg.classList.add('h-14', 'w-14', 'filter', 'drop-shadow-xl')
        productImg.src = cartItem.img
        productImg.alt = cartItem.name

        const productName = document.createElement('h3')
        productName.textContent = cartItem.name
        productName.classList.add('font-thin', 'font-arial')

        const productQty = document.createElement('h3')
        productQty.textContent = "QTY  -  " + cartItem.qty
        productQty.classList.add('font-bold', 'font-arial', 'text-slate-900')

        let productPrice = document.createElement('p')
        productPrice.textContent = '₹' + cartItem.price
        productPrice.classList.add('font-large', 'text-2xl', 'font-arial')

        let removeButton = document.createElement('button')
        removeButton.textContent = 'REMOVE'
        removeButton.classList.add('bg-red-400', 'active:bg-red-600', 'rounded-lg', 'font-pacifico', 'font-bold', 'text-white', 'px-6', 'py-3', 'mr-auto')
        removeButton.addEventListener('click', function () {
            productDiv.remove()
            const indexToRemove = cartArray.findIndex(item => item.id === cartItem.id)
            if (indexToRemove !== -1) {
                cartArray.splice(indexToRemove, 1)
                localStorage.setItem('cart', JSON.stringify(cartArray))
                console.log(`Item with ID ${cartItem.id} removed from the cart`)
            } else {
                console.log(`Item with ID ${cartItem.id} not found in the cart`)
            }
            console.log('Cart after removal:', cartArray)
        })

        let buyButton = document.createElement('button')
        buyButton.textContent = 'BUY NOW';
        buyButton.classList.add('bg-orange-400', 'active:bg-orange-600', 'ml-1', 'rounded-lg', 'font-pacifico', 'font-bold', 'text-white', 'px-6', 'py-3', 'mr-auto')
        buyButton.addEventListener('click', function () {
            buyNow()
        });

        productDiv.appendChild(productImg)
        productDiv.appendChild(productName)
        productDiv.appendChild(productQty)
        productDiv.appendChild(productPrice)
        productDiv.appendChild(removeButton)
        productDiv.appendChild(buyButton)
        if(cartItem.addTo == "cart"){
        productContainer.appendChild(productDiv)
        }else if(cartItem.addTo === "buy"){
            buyedContainer.appendChild(productDiv)
        }else{
            alert("Failed to add your item to cart")
        }
    }

    function addToCart(item) {
        const isItemAlreadyInCart = cartArray.some(existingItem => existingItem.name === item.name)
        if (!isItemAlreadyInCart ) {
            cartArray.push(item)
            localStorage.setItem('cart', JSON.stringify(cartArray))
            renderCartItem(item)
            if (productContainer.children.length > 0) {
                const emptyCartElement = document.getElementById('Emptycart')
                if (emptyCartElement) {
                    emptyCartElement.remove()
                }
            }
        } else {
            console.log(`Item with ID ${item.id} is already in the cart`)
        }
        localStorage.setItem('product_name','')
        localStorage.setItem('product_price','')
        localStorage.setItem('product_img','')
        localStorage.setItem('product_qty','')
    }

    if (addedProductName !== '' && addedProductPrice !== '' && addedProductImg !== '' && addedProductQty !== '') {
        addToCart({
            name: addedProductName,
            price: addedProductPrice,
            img: addedProductImg,
            qty: addedProductQty,
            id: "Itemadded" + productIdIncrementer,
            addTo : addTo
        })
        } else {
            return
        }

    console.log(cartArray)

    function emptyCart() {
        cartArray = [];
        localStorage.setItem('cart', JSON.stringify(cartArray))
        productContainer.innerHTML = ""
        console.log("Cart is now empty")
    }
});






