

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
  },
  {
    id: "Blue_web",
    price: 500,
    size: "", 
    description: "", 
    src: "./images/Blue_web.webp",
    name: "Blue vanila flaboured 1 kg"
  },
  {
    id: "Flowers-N-Cakes",
    price: 1499,
    size: "", 
    description: "", 
    src: "./images/Flowers-N-Cakes_web.webp",
    name: "Flowers N Cakes"
  },
  {
    id: "fudge-brownie-cake-half-kg",
    price: 675,
    size: "", 
    description: "", 
    src: "./images/fudge-brownie-cake-half-kg_1.webp",
    name: "fudge brownie cake half kg"
  },
  {
    id: "50th-anniversary-fondant-2-tier-cake-chocolate-3kg",
    price: 3499,
    size: "", 
    description: "", 
    src: "./images/anniversary/50th-anniversary-fondant-2-tier-cake-chocolate-3kg_1.webp",
    name: "anniversary fondant 2 tier cake chocolate 3kg"
  },
  {
    id: "anniversary-special-chocolate-cake-half-kg",
    price: 725,
    size: "", 
    description: "", 
    src: "./images/anniversary/anniversary-special-chocolate-cake-half-kg_1.webp",
    name: "anniversary special chocolate cake half kg"
  },
  {
    id: "butterscotch-bliss-eggless-cake",
    price: 1275,
    size: "", 
    description: "", 
    src: "./images/anniversary/butterscotch-bliss-eggless-cake_1.webp",
    name: "butterscotch bliss eggless cake"
  },
  {
    id: "choco-hearts-love-designer-cake-half-kg",
    price: 725,
    size: "", 
    description: "", 
    src: "./images/anniversary/choco-hearts-love-designer-cake-half-kg_5.webp",
    name: "choco hearts love designer cake half kg"
  },
  {
    id: "chocolate-caramel-fudge-cake-half-kg",
    price: 625,
    size: "", 
    description: "", 
    src: "./images/anniversary/chocolate-caramel-fudge-cake-half-kg_1.webp",
    name: "chocolate caramel fudge cake half kg"
  },
  {
    id: "decadent-floral-chocolate-cake-1-kg",
    price: 1699,
    size: "", 
    description: "", 
    src: "./images/anniversary/decadent-floral-chocolate-cake-1-kg_1.webp",
    name: "decadent floral chocolate cake 1 kg"
  },
  {
    id: "delicious-heart-shaped-chocolate-cake-half-kg",
    price: 750,
    size: "", 
    description: "", 
    src: "./images/anniversary/delicious-heart-shaped-chocolate-cake-half-kg_1.webp",
    name: "delicious heart shaped chocolate cake half kg"
  },
  {
    id: "happy-anniversary-heart-shaped-cake-half-kg",
    price: 799,
    size: "", 
    description: "", 
    src: "./images/anniversary/happy-anniversary-heart-shaped-cake-half-kg_1.webp",
    name: "happy anniversary heart shaped cake half kg"
  },
  {
    id: "heart-shaped-cream-chocolate-cake-half-kg",
    price: 675,
    size: "", 
    description: "", 
    src: "./images/anniversary/heart-shaped-cream-chocolate-cake-half-kg_2.webp",
    name: "heart shaped cream chocolate cake half kg"
  },
  {
    id: "heart-shaped-pineapple-cake-half-kg",
    price: 1499,
    size: "", 
    description: "", 
    src: "./images/anniversary/heart-shaped-pineapple-cake-half-kg_1.webp",
    name: "heart shaped pineapple cake half kg"
  },
  {
    id: "joyful-bento-chocolate-temptation",
    price: 1725,
    size: "", 
    description: "", 
    src: "./images/anniversary/joyful-bento-chocolate-temptation_1.webp",
    name: "joyful bento chocolate temptation"
  },
  {
    id: "love-special-chocolate-photo-cake-half-kg",
    price: 1075,
    size: "", 
    description: "", 
    src: "./images/anniversary/love-special-chocolate-photo-cake-half-kg_1.webp",
    name: "love special chocolate photo cake half kg"
  },
  {
    id: "lovely-red-roses-around-chocolate-cake-half-kg",
    price: 925,
    size: "", 
    description: "", 
    src: "./images/anniversary/lovely-red-roses-around-chocolate-cake-half-kg_1.webp",
    name: "lovely red roses around chocolate cake half kg"
  },
  {
    id: "peach-roses-truffle-2-tier-cake-15-kg",
    price: 6250,
    size: "", 
    description: "", 
    src: "./images/anniversary/peach-roses-truffle-2-tier-cake-15-kg_1.webp",
    name: "peachroses truffle 2 tier cake 15 kg"
  },
  {
    id: "red-velvet-heart-cake-half-kg",
    price: 599,
    size: "", 
    description: "", 
    src: "./images/anniversary/red-velvet-heart-cake-half-kg_1.webp",
    name: "red velvet heart cake half kg"
  },
  {
    id: "rose-paradise-chocolate-cake-half-kg",
    price: 925,
    size: "", 
    description: "", 
    src: "./images/anniversary/rose-paradise-chocolate-cake-half-kg_1.webp",
    name: "rose paradise chocolate cake half kg"
  },
  {
    id: "roses-on-heart-designer-cake-half-kg",
    price: 1250,
    size: "", 
    description: "", 
    src: "./images/anniversary/roses-on-heart-designer-cake-half-kg_1.webp",
    name: "roses on heart designer cake half kg"
  },
  {
    id: "special-hearts-truffle-fondant-cake-1-kg",
    price: 999,
    size: "", 
    description: "", 
    src: "./images/anniversary/special-hearts-truffle-fondant-cake-1-kg_1.webp",
    name: "special hearts truffle fondant cake 1 kg"
  },
  {
    id: "sweetheart-chocolate-cream-rose-cake-15-kg",
    price: 2999,
    size: "", 
    description: "", 
    src: "./images/anniversary/sweetheart-chocolate-cream-rose-cake-15-kg_1.webp",
    name: "sweetheart chocolate cream rose cake 5 kg"
  }
];