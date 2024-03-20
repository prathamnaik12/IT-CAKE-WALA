let productContainer = document.getElementById("container")
let cartArray = JSON.parse(localStorage.getItem('cart')) || []

async function fetchOrderStatuses(orderIds) {
    try {
        const response = await fetch('http://localhost:8000/api/get_order_statuses', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ order_ids: orderIds }),
            credentials: 'include',
        });

        if (response.ok) {
            const data = await response.json()
            return data.order_statuses
        } else {
            console.error('Failed to fetch order statuses')
            return []
        }
    } catch (error) {
        console.error('Error fetching order statuses:', error)
        return []
    }
}
function getStatusText(statusInfo) {
    if (!statusInfo) {
        return 'Status unknown'
    }

    switch (statusInfo.status) {
        case 'ordered':
            return 'Order Placed'
        case 'processed':
            return 'Order is being processed'
        case 'dispatched':
            return 'Order has been dispatched'
        case 'fulfilled':
            return 'Order has been fulfilled'
        default:
            return `ERROR occurred: ${statusInfo.status}`
    }
}
document.addEventListener('DOMContentLoaded', function () {

    if (!productContainer) {
        console.error("Cart container not found")
        return
    }

    if (cartArray.length > 0) {
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
    if (addedProductId !== '' && addedProductName !== '' && addedProductPrice !== '' && addedProductImg !== '' && addedProductQty !== '') {
        addToCart({
            id: addedProductId,
            name: addedProductName,
            price: addedProductPrice,
            img: addedProductImg,
            qty: addedProductQty,
        })
    } else {
        return
    }

    renderCartItem()

})

let addedProductId = localStorage.getItem("PID")
let addedProductName = localStorage.getItem('product_name')
let addedProductPrice = localStorage.getItem('product_price')
let addedProductImg = localStorage.getItem('product_img')
let addedProductQty = localStorage.getItem('product_qty')


async function renderCartItem(cartItem) {
    const orderIds = cartArray.map(order => order.id)
    const orderStatuses = await fetchOrderStatuses(orderIds)

    if (cartArray.length < 1 && cartItem.name === null || cartItem.price === null || cartItem.img === null || cartItem.qty === null ||
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

    const status = document.createElement('p')
    status.classList.add('font-bold')
    status.innerHTML = `Status > ${getStatusText(orderStatuses.find(status => status.id === cartItem.id))}`

    productDiv.appendChild(productImg)
    productDiv.appendChild(productName)
    productDiv.appendChild(productQty)
    productDiv.appendChild(productPrice)
    productDiv.appendChild(status)
    productDiv.appendChild(removeButton)

    productContainer.appendChild(productDiv)
}

function addToCart(item) {
    const isItemAlreadyInCart = cartArray.some(existingItem => existingItem.name === item.name)
    if (!isItemAlreadyInCart) {
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
    localStorage.setItem('PID', '')
    localStorage.setItem('product_name', '')
    localStorage.setItem('product_price', '')
    localStorage.setItem('product_img', '')
    localStorage.setItem('product_qty', '')
}



console.log(cartArray)

function emptyCart() {
    cartArray = [];
    localStorage.setItem('cart', JSON.stringify(cartArray))
    productContainer.innerHTML = ""
    console.log("Cart is now empty")
}



