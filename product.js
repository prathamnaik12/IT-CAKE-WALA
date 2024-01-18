
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
    let productImgSrc = productData.src;
    let productImg = document.getElementById("product-img");
    productImg.src = productImgSrc;}
})

let CakeData = [
    {id:"rich-chocolate-splash-cake-half-kg-eggless",
    prize:599,
    size:"1/2 kg",
    description:"chocolate cake",
    src:"./images/rich-chocolate-splash-cake-half-kg-eggless_1.webp",
    },
  {
    id: "butterscotch-cake-half-kg-eggless",
    price: 550,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/butterscotch-cake-half-kg-eggless_1.webp"
  },
  {
    id: "chocolate-caramel-fudge-cake-half-kg-eggless",
    price: 599,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/chocolate-caramel-fudge-cake-half-kg-eggless_1 (1).webp"
  },
  {
    id: "dripping-chocolate-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/dripping-chocolate-cake-half-kg-eggless_1.webp"
  },
  {
    id: "football-theme-chocolate-cake-eggless-1-kg",
    price: 899,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/football-theme-chocolate-cake-eggless-1-kg_1.webp"
  },
  {
    id: "red-velvet-fresh-cream-cake-half-kg_1",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/red-velvet-fresh-cream-cake-half-kg_1.webp"
  },
  {
    id: "rose-paradise-chocolate-cake-eggless-half-kg",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/rose-paradise-chocolate-cake-eggless-half-kg_1 P5.webp"
  },
  {
    id: "tropical-bliss-eggless-pineapple-bento-cake",
    price: 599,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/tropical-bliss-eggless-pineapple-bento-cake_1.webp"
  },
  {
    id: "truffle-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/truffle-cake-half-kg-eggless_1.webp"
  },
  {
    id: "fudge-brownie-cake-half-kg",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/fudge-brownie-cake-half-kg_1.webp"
  },
  {
    id: "decorated-chocolate-truffle-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/decorated-chocolate-truffle-cake-half-kg-eggless_1 (1) P3.webp"
  },
  {
    id: "heavenly-chocolate-sensation-eggless-cake",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/heavenly-chocolate-sensation-eggless-cake_2.webp"
  },
  {
    id: "heavenly-butterscotch-cream-cake-half-kg-eggless",
    price: 500,
    size: "", // You can fill this value
    description: "", // You can fill this value
    src: "./images/heavenly-butterscotch-cream-cake-half-kg-eggless_2.webp"
  }
];
