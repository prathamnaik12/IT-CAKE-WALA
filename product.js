

var today = new Date();
var minDate = today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();
var dateInput = document.getElementById("datefield");
dateInput.setAttribute("min", minDate);



document.addEventListener('DOMContentLoaded', function() {
  let clickedProductId = localStorage.getItem('clickedProductId');

  if (clickedProductId) {
    console.log("Clicked Product Id:", clickedProductId);
  } else {
    console.log("No product id found");
  }
  localStorage.removeItem('clickedProductId');
  let productData = CakeData.find(product => product.id === clickedProductId);

  if (productData) {
    let productImgSrc = productData.src
    let productNametxt = productData.name
    let productPricetxt = productData.price
    let productImg = document.getElementById("product-img")
    let productName = document.getElementById("product-name")
    let productPrice = document.getElementById("product-price")

    productImg.src = productImgSrc;
    productName.textContent = productNametxt
    productPrice.textContent += productPricetxt
    }
})

const slider = document.querySelector('.testimonial-slider');
const testimonials = document.querySelectorAll('.testimonial-item');
let index = 0;

function addToCart() {
        saveFormData('cart');
    }

    function buyNow() {
        saveFormData('buy');
    }

    function saveFormData(action) {
        const location = document.getElementById('locationInput').value;
        const date = document.getElementById('datefield').value;
        const withEgg = document.getElementById('withEgg').checked;
        const eggless = document.getElementById('eggless').checked;
        const message = document.getElementById('messageInput').value;

        const formData = { location, date, withEgg, eggless, message, action };
        fetch('http://localhost:5000/submit-form', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(yourFormData),
        })
          .then(response => response.json())
          .then(data => {
              console.log('Success:', data);
          })
          .catch(error => {
              console.error('Error:', error);
          });
}

let CakeData = [
  {
    id: "rich-chocolate-splash-cake-half-kg-eggless",
    price: 599,
    size: "1/2 kg",
    description: "chocolate cake",
    src: "./images/rich-chocolate-splash-cake-half-kg-eggless_1.webp",
    name: "Rich Chocolate Cake Half kg Eggless"
  },
  {
    id: "butterscotch-cake-half-kg-eggless",
    price: 550,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/butterscotch-cake-half-kg-eggless_1.webp",
    name: "Butterscotch Cake Half Kg Eggless"
  },
  {
    id: "chocolate-caramel-fudge-cake-half-kg-eggless",
    price: 599,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/chocolate-caramel-fudge-cake-half-kg-eggless_1 (1).webp",
    name: "Chocolate Caramel Fudge Cake Half Kg Eggless"
  },
  {
    id: "dripping-chocolate-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/dripping-chocolate-cake-half-kg-eggless_1.webp",
    name: "Dripping Chocolate Cake Half Kg Eggless"
  },
  {
    id: "football-theme-chocolate-cake-eggless-1-kg",
    price: 899,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/football-theme-chocolate-cake-eggless-1-kg_1.webp",
    name: "Football Theme Chocolate Cake Eggless 1 kg"
  },
  {
    id: "red-velvet-fresh-cream-cake-half-kg_1",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/red-velvet-fresh-cream-cake-half-kg_1.webp",
    name: "Red Velvet Fresh Cream Cake Half kg"
  },
  {
    id: "rose-paradise-chocolate-cake-eggless-half-kg",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/rose-paradise-chocolate-cake-eggless-half-kg_1 P5.webp",
    name: "Rose Paradise Chocolate Cake Eggless Half Kg"
  },
  {
    id: "tropical-bliss-eggless-pineapple-bento-cake",
    price: 599,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/tropical-bliss-eggless-pineapple-bento-cake_1.webp",
    name: "Tropical Bliss Eggless Pineapple Bento Cake"
  },
  {
    id: "truffle-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/truffle-cake-half-kg-eggless_1.webp",
    name: "Truffle Cake Half kg Eggless"
  },
  {
    id: "fudge-brownie-cake-half-kg",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/fudge-brownie-cake-half-kg_1.webp",
    name: "Fudge Brownie Cake Half kg"
  },
  {
    id: "decorated-chocolate-truffle-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/decorated-chocolate-truffle-cake-half-kg-eggless_1 (1) P3.webp",
    name: "Decorated Chocolate Truffle Cake Half kg Eggless"
  },
  {
    id: "heavenly-chocolate-sensation-eggless-cake",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/heavenly-chocolate-sensation-eggless-cake_2.webp",
    name: "Heavenly Chocolate Sensation Eggless Cake Half kg"
  },
  {
    id: "heavenly-butterscotch-cream-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/heavenly-butterscotch-cream-cake-half-kg-eggless_2.webp",
    name: "Heavenly Butterscotch Cream Cake Half kg"
  }
];