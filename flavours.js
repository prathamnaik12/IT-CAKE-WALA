import { CakeData } from "./cakeDataArray.js"


const productContainer = document.getElementById("cakes")

if (!productContainer) {
    console.error("Product container not found")
} else {
  console.log("Product container found:", productContainer)

  document.addEventListener("DOMContentLoaded", function () {
  let flavour = localStorage.getItem('selectedFlavourId')
  console.log('Retrieved Flavor Id from localStorage:', flavour)
  generateProductCards(flavour)
});
}
function generateProductCards(selectedFlavourId) {
  const selectedCakes = CakeData.filter(cake => cake.flavourId === selectedFlavourId)

  for (let i = 0; i < 6; i++) {
    var currentDiv = document.getElementById(`cake${i + 1}`)
    
    if (i < selectedCakes.length) {
      var selectedCake = selectedCakes[i]

      var aTag = currentDiv.querySelector("a")
      var h3Tag = currentDiv.querySelector("h3")
      var h1Tag = currentDiv.querySelector("h1")
      var img = currentDiv.querySelector("img")

      img.src = selectedCake.src
      aTag.id = selectedCake.id
      h3Tag.textContent = selectedCake.name
      h1Tag.textContent += selectedCake.price
    }
  }

  document.body.removeAttribute('loading');
}

// const flavourCakedata=[
//       { //butterscotch
//         id:"Heavenly-Butterscotch-Cake-Half-Kg",
//         name:"Heavenly Butterscotch Cake- Half Kg",
//         price:725,
//         src: "./images/butterscotch/heavenly-butterscotch-cake-half-kg_1.webp",
//         Flavour:"Butterscotch",
//         flavourId:"butterscotch",
//         TypeofCake:"Cream",
//         Weight: "Half Kg",
//         Shape:"Round",
//         Serves:"4-6 People",
//         Size:"6 inches in Diameter"
//       },
//       {
//         id:"Butterscotch-Cake-With-Rasmalai-1-kg",
//         name:"Butterscotch Cake With Rasmalai 1kg", 
//         price:1375,
//         src: "./images/butterscotch/butterscotch-cake-with-rasmalai-1kg_1.webp",
//         Flavour:"Butterscotch With Rasmalai",
//         flavourId:"butterscotch",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       {
//         id:"Crunchy-Butterscotch-Cake-Half-Kg",
//         name:"Crunchy Butterscotch Cake Half Kg",
//         price:575,
//         src: "./images/butterscotch/crunchy-butterscotch-cream-cake-half-kg_1.webp",
//         Flavour:"Butterscotch",
//         flavourId:"butterscotch",
//         TypeofCake:"Cream",
//         Weight:"Half Kg",
//         Shape:"Round",
//         Serves:"4-6 People",
//         Size:"6 inches in Diameter"
//       },
//       {
//         id:"Heart-Shaped-Butterscotch-Cake-Half-Kg",
//         name:"Heart Shaped Butterscotch Cake Half Kg",
//         price:725,
//         src: "./images/butterscotch/heart-shaped-butterscotch-cake-half-kg_1.webp",
//         Flavour:"Butterscotch",
//         flavourId:"butterscotch",
//         TypeofCake:"Cream",
//         Weight:"Half Kg",
//         Shape:"Heart Shaped",
//         Serves:"4-6 People",
//         Size:"6 inches in diameter"
//       },
//       {
//         id:"Butterscotch-Bento-Cake-250-Gram",
//         name:"Butterscotch Bento Cake 250 Gram",
//         price:449,
//         src:"./images/butterscotch/butterscotch-symphony-cream-cake_1.webp" ,
//         Flavour:"Butterscotch",
//         flavourId:"butterscotch",
//         Weight:"250 gms",
//         TypeofCake:"Cream Cake",
//         Shape:"Round",
//         CakesVersion:"Contains Egg",
//         Serves:"2-3 people"
//       },
//       {
//         id:"Honey-Bee-Butterscotch-Cake-1-Kg",
//         name:"Honey Bee Butterscotch Cake 1 Kg",
//         price:1375,
//         src: "./images/butterscotch/honey-bee-butterscotch-cake-half-kg_1.webp",
//         Flavour:"Butterscotch",
//         flavourId:"butterscotch",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },//chocolate
//       {
//         id:"Fudge-Brownie-Cake-1-kg",
//         name:"Fudge Brownie Cake 1 kg",
//         price:1275,
//         src: "./images/chocolate/fudge-brownie-cake-half-kg_1.webp",
//         Flavour:"Truffle",
//         flavourId:"chocolate",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       {
//         id:"Kit-Kat-Crunch-Cream-Cake-Half-Kg",
//         name:"Kit Kat Crunch Cream Cake Half Kg",
//         price:675,
//         src: "./images/chocolate/kit-kat-crunch-cream-cake-half-kg_1.webp",
//         Weight:"Half Kg",
//         Flavour:"Kit Kat",
//         flavourId:"chocolate",
//         CakesVersion:"Contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"4:6 people",
//         Size:"6 inches (approx)"
//       },
//       {
//         id:"Dark-Chocolate-Cream-Delight-1-Kg",
//         name:"Dark Chocolate Cream Delight 1 Kg",
//         price:1275,
//         src: "./images/chocolate/dark-chocolate-cream-delight-half-kg_1.webp",
//         Weight:"1 Kg",
//         Flavour:"Chocolate Cream",
//         flavourId:"chocolate",
//         CakesVersion:"Contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"10:12 people",
//         Size:"9 inches (approx)"
//       },
//       {
//         id:"Chocolate-Caramel-Fudge-Cake-2-Kg",
//         name:"Chocolate Caramel Fudge Cake 2 Kg",
//         price:2325,
//         src: "./images/chocolate/chocolate-caramel-fudge-cake-half-kg_2.webp",
//         Flavour:"Caramel",
//         flavourId:"chocolate", 
//         TypeofCake:"Cream Cake",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Serves:"20-24 People",
//         Size:"12 Inches in Diameter"
//       },
//       {
//         id:"Creamy-Chocolate-Dream-Cake-Half-Kg",
//         name:"Creamy Chocolate Dream Cake Half Kg",
//         price:675,
//         src: "./images/chocolate/creamy-chocolate-dream-cake-half-kg_1.webp",
//         Weight:"Half Kg",
//         Flavour:"Chocolate Cream",
//         flavourId:"chocolate",
//         CakesVersion:"Contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"4:6 people",
//         Size:"6 inches (approx)"
//       },
//       {
//         id:"Delicious-Heart-Shaped-Chocolate-Cake-1-Kg",
//         name:"Delicious Heart Shaped Chocolate Cake 1 Kg",
//         price:1375,
//         src: "./images/chocolate/delicious-heart-shaped-chocolate-cake-half-kg_1.webp",
//         Flavour:"Chocola",
//         flavourId:"chocolate",
//         TypeOfCake:"Cream",
//         Weight:"1 Kg",
//         CakeShape:"Heart Shaped",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },//pineapple
//       {
//         id:"Happy-Emoji-Pineapple-Cake-Eggless-Half-Kg",
//         name:"Happy Emoji Pineapple Cake Eggless Half Kg",
//         price:625,
//         src: "./images/pineapple/happy-emoji-pineapple-cake-eggless-half-kg_1.webp",
//         Flavour:"Pineapple",
//         flavourId:"pineapple",
//         Version:"Eggless",
//         Typeofcake:"Cream",
//         Weight:"Half Kg",
//         Shape:"Round",
//         Serves:"4-6 People",
//         Size:"6 Inches in Diameter"
//       },
//       {
//         id:"Tropical-Bliss-Pineapple-Bento-250-Gram",
//         name:"Tropical Bliss Pineapple Bento 250 Gram",
//         price:449,
//         src: "./images/pineapple/delicious-pineapple-cream-cake-eggless-half-kg_1.webp",
//         Flavour:"Pineapple",
//         flavourId:"pineapple",
//         Weight:"250 gms",
//         TypeofCake:"Cream Cake",
//         Shape:"Round",
//         CakesVersion:"Contains Egg",
//         Serves:"2-3 people"
//       },
//       {
//         id:"Roses-On-Top-Pineapple-Designer-Cake-Half-Kg-Eggless",
//         name:"Roses On Top Pineapple Designer Cake Half Kg Eggless",
//         price:725,
//         src: "./images/pineapple/roses-on-top-pineapple-designer-cake-half-kg-eggless_1.webp",
//         Flavour:"Pineapple",
//         flavourId:"pineapple",
//         Version:"Eggless",
//         TypeofCake:"Cream",
//         Shape:"Round",
//         Weight:"Half Kg",
//         Serves:"4-6 People",
//         Size:"6 Inches In Diameter"
//       },
//       {
//         id:"Pink-Pineapple-Cream-Cake-1-Kg-Eggless",
//         name:"Pink Pineapple Cream Cake 1 Kg Eggless",
//         price:1375,
//         src:"./images/pineapple/pink-pineapple-cream-cake-half-kg-eggless_1.webp",
//         Flavour:"Pineapple",
//         flavourId:"pineapple",
//         Version:"Eggless",
//         TypeofCake:"Cream Cake",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 Inches in Diameter"
//       },
//       {
//         id:"Delicious-Pineapple-Cake-Half-Kg-Eggless",
//         name:"Delicious Pineapple Cake Half Kg Eggless",
//         price:625,
//         src:"./images/pineapple/delicious-pineapple-cake-half-kg-eggless_1.webp",
//         Flavour:"Pineapple",
//         flavourId:"pineapple",
//         Version:"Eggless",
//         TypeofCake:"Cream",
//         Weight:"Half Kg",
//         Shape:"Round",
//         Serves:"4-6 People",
//         Size:"6 inches in Diameter"
//       },
//       {
//         id:"Pineapple-With-Butterscotch-Cake-Eggless-2-Kg",
//         name:"Pineapple With Butterscotch Cake Eggless 2 Kg",
//         price:2675,
//         src:"./images/pineapple/pineapple-paradise-cake_1.webp",
//         Flavour:"Pineapple With Butterscotch",
//         flavourId:"pineapple",
//         Version:"Eggless",
//         TypeofCake:"Cream",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Serves:"20-24 People",
//         Size:"12 inches in Diameter",
//         CountryofOrigin:"India"
//       },//Vanila cakes
//       {
//         id:"Fresh-Vanilla-Cake-1-Kg",
//         name:"Fresh Vanilla Cake 1 Kg",
//         price:1099,
//         src:"./images/Vanila_cakes/fresh-vanilla-cake-1kg_1.webp",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       {
//         id:"Vanilla-Bliss-in-Pink-1-Kg",
//         name:"Vanilla Bliss in Pink 1 Kg",
//         price:1175,
//         src:"./images/Vanila_cakes/vanilla-bliss-in-pink-1-kg_1.webp",
//         Weight:"1 Kg",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         Cakeversion:"Contains egg",
//         Typeofcake:"Cream cake",
//         Shape:"Half cake",
//         Serves:"10:12 people"
//       },
//       {
//         id:"Luscious-Vanilla-Cake-Half-Kg",
//         name:"Luscious Vanilla Cake Half Kg",
//         price:625,
//         src:"./images/Vanila_cakes/luscious-vanilla-cake-half-kg_1.webp",
//         Weight:"Half Kg",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         Cakeversion:"Contains egg",
//         Typeofcake:"Cream cake",
//         Shape:"Half cake",
//         Serves:"4:6 people"
//       },
//       {
//         id:"Rose-Fondant-Cake-Vanilla-5-kg",
//         name:"Rose Fondant Cake Vanilla 5 kg",
//         price:9425,
//         src:"./images/Vanila_cakes/rose-fondant-cake-vanilla-4kg_1.webp",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         Weight:"5kg",
//         TypeofCake:"Fondant",
//         Shape:"Round",
//         CountryofOrigin:"India"
//       },
//       {
//         id:"Flamboyant-Barbie-Cake-Vanilla-3-kg",
//         name:"Flamboyant Barbie Cake Vanilla 3 kg",
//         price:4025,
//         src:"./images/Vanila_cakes/flamboyant-barbie-cake-vanilla-2kg_1.webp",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         Typeofcake:"Cream",
//         Weight:"3 Kg",
//         Shape:"Doll Shaped",
//         Serves:"30-36 People",
//         Size:"12 inches in Diameter"
//       },
//       {
//         id:"vanilla-cake-with-gulab-jamun-2kg",
//         name:"Vanilla cake with gulab jamun 2kg",
//         price:5225,
//         src:"./images/Vanila_cakes/vanilla-cake-with-gulab-jamun-2kg_1.webp",
//         Flavour:"Vanilla",
//         flavourId:"vanila",
//         TypeofCake:"Fondant",
//         Weight:"3 Kg",
//         Shape:"Round",
//         Serves:"30-36 People",
//         Size:"12 inches in Diameter"
//       },//Fresh Fruits cakes
//       {
//         id:"Fresh-Fruit-Vanilla-Cake-1-Kg",
//         name:"Fresh Fruit Vanilla Cake 1 Kg",
//         price:1575,
//         src:"./images/Fresh_Fruits_cakes/fresh-fruit-vanilla-cake-1-kg_1.webp",
//         Flavour:"Fresh Fruit Vanilla",
//         flavourId:"fresh-fruit",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       { 
//         id:"Fruit-Fantasy-Cake",
//         name:"Fruit Fantasy Cake",
//         price:2275,
//         src:"./images/Fresh_Fruits_cakes/fruit-fantasy-cake_1.webp",
//         Typeofcake:"Cream cake",
//         Flavour:"Mix fruit",
//         flavourId:"fresh-fruit",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Serves:"20-24 people",
//         Size:"12 inches (approx)",
//         Cakesversion:"Eggless"
//       },
//       {
//         id:"Fruit-Chocolate-Cake-1-kg",
//         name:"Fruit Chocolate Cake 1 kg",
//         price:1575,
//         src:"./images/Fresh_Fruits_cakes/chocolate-fruit-gateau-2kg_1.webp",
//         Flavour:"Chocolate",
//         flavourId:"fresh-fruit",
//         TypeofCake :"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       {
//         id:"Fresh-Vanilla-Cake-1-Kg",
//         name:"Fresh Vanilla Cake 1 Kg",
//         price:1099,
//         src:"./images/Fresh_Fruits_cakes/fresh-pineapple-dream-cake-half-kg-eggless_2.webp",
//         Flavour:"Vanilla",
//         flavourId:"fresh-fruit",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },
//       {
//         id:"Fruit-Carnival-Cake-For-Diwali-3-Kg",
//         name:"Fruit Carnival Cake For Diwali 3 Kg",
//         price:2425,
//         src:"./images/Fresh_Fruits_cakes/fruit-carnival-cake-for-diwali-2kg_1.webp",
//         Flavour:"Mix fruit",
//         flavourId:"fresh-fruit",
//         Weight:"3Kg",
//         Cakeversion:"Contains egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"30-36 people",
//         Size:"15 inches (approx)"
//       },
//       {
//         id:"Creamy-Vanilla-Fruit-Cake-1-Kg",
//         name:"Creamy Vanilla Fruit Cake 1 Kg",
//         price:1575,
//         src:"./images/Fresh_Fruits_cakes/creamy-vanilla-fruit-cake-1kg_1.webp",
//         Flavour:"Vanilla",
//         flavourId:"fresh-fruit",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Round",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },//Red Valvet cakes
//       {
//         id:"Red-Velvet-Celebration-Cake",
//         name:"Red Velvet Celebration Cake",
//         price:2325,
//         src:"./images/Red_Valvet_cakes/red-velvet-celebration-cake_2.webp",
//         Typeofcake:"Cream cake",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Flavour:"Red velvet",
//         flavourId:"red-valvet",
//         Serves:"20-24 people",
//         Cakesversion: "Contains egg",
//         Size:"12 inches (approx)"
//       },
//       {
//         id:"Royal-Red-Velvet-Cake",
//         name:"Royal Red Velvet Cake",
//         price:725,
//         src:"./images/Red_Valvet_cakes/royal-red-velvet-cake_1.webp",
//         Flavour:"Red velvet",
//         flavourId:"red-valvet",
//         Weight:"500 gms",
//         TypeofCake:"Cream Cake",
//         Shape:"Round",
//         CakesVersion:"Contains Egg",
//         Serves:"5-6 people"
//       },
//       {
//         id:"Red-Velvet-Gems-Cake-Half-Kg",
//         name:"Red Velvet Gems Cake Half Kg",
//         price:875,
//         src:"./images/Red_Valvet_cakes/red-velvet-gems-cake-half-kg_1.webp",
//         Flavour:"Red Velvet",
//         flavourId:"red-valvet",
//         TypeofCake:"Cream",
//         Weight:"Half Kg",
//         Shape:"Round",
//         Serves:"4-6 People",
//         Size:"6 inches in Diameter"
//       },
//       {
//         id:"Red-Velvet-Heart-Cake-1.5-kg",
//         name:"Red Velvet Heart Cake 1.5 kg",
//         price:2275,
//         src:"./images/Red_Valvet_cakes/red-velvet-heart-cake-3kg_1.webp",
//         Flavour:"Red Velvet",
//         flavourId:"red-valvet",
//         TypeofCake:"Cream",
//         Weight:"1.5 Kg",
//         Shape:"Heart Shaped",
//         Serves:"15-18 People",
//         Size:"12 inches in Diameter"
//       },
//       {
//         id:"Scrumptious-Red-Velvet-Cake-2-Kg",
//         name:"Scrumptious Red Velvet Cake 2 Kg",
//         price:3275,
//         src:"./images/Red_Valvet_cakes/scrumptious-red-velvet-cake-half-kg_1.webp",
//         Flavour:"Red Velvet",
//         flavourId:"red-valvet",
//         TypeofCake:"Cream",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Serves:"20-24 People",
//         Size:"12 inches in Diameter"
//       },
//       {
//         id:"Red-Velvet-Heart-Cream-Cake-1-Kg",
//         name:"Red Velvet Heart Cream Cake 1 Kg",
//         price:1474,
//         src:"./images/Red_Valvet_cakes/red-velvet-serenity_1.webp",
//         Flavour:"Red Velvet",
//         flavourId:"red-valvet",
//         TypeofCake:"Cream",
//         Weight:"1 Kg",
//         Shape:"Heart",
//         Serves:"10-12 People",
//         Size:"9 inches in Diameter"
//       },//Truffle cakes
//       {
//         id:"Truffle-Dream-Cake",
//         name:"Truffle Dream Cake",
//         price:725,
//         src:"./images/Truffle_cakes/truffle-dream-cake_1.webp",
//         Typeofcake:"Cream cake",
//         Weight:"Half kg",
//         Shape:"Round",
//         Flavour:"Truffle",
//         flavourId:"truffle",
//         Serves:"4-6 people",
//         Cakesversion:"Contains egg",
//         Size:"6 inches (approx)"
//       },//1
//       {
//         id:"Velvet-Truffle-Cake",
//         name:"Velvet Truffle Cake",
//         price:725,
//         src:"./images/Truffle_cakes/velvet-truffle-cake_1.webp",
//         Flavour:"Truffle",
//         flavourId:"truffle",
//         Weight:"500 gms",
//         TypeofCake:"Cream Cake",
//         Shape:"Round",
//         CakesVersion:"Contains Egg",
//         Serves:"5-6 people"
//       },//2
//       {
//         id:"Glistening-Truffle-Cake-2-KG",
//         name:"Glistening Truffle Cake 2 KG",
//         price:2675,
//         src:"./images/Truffle_cakes/glistening-truffle-cake-2kg_1.webp",
//         Flavour:"Truffle",
//         flavourId:"truffle",
//         Weight:"2 Kg",
//         Shape:"Round",
//         Serves:"20-24 People",
//         Size:"12 inches in Diameter"
//       },//3
//       {
//         id:"Chocolaty-Truffle-Cake-1.5-Kg",
//         name:"Chocolaty Truffle Cake 1.5 Kg",
//         price:1575,
//         src:"./images/Truffle_cakes/superhero-truffle-treat_1.webp",
//         Flavour:"Chocolate",
//         flavourId:"truffle",
//         TypeofCake:"Cream",
//         Weight:"1.5 Kg",
//         Shape:"Round",
//         Serves:"15-18 People",
//         Size:"12 inches in Diameter"
//       },//4
//       {
//         id:"Whimsical-Truffle-Temptation",
//         name:"Whimsical Truffle Temptation",
//         price:5225,
//         src:"./images/Truffle_cakes/truffle-delight-for-dad_1.webp",
//         Typeofcake:"Fondant",
//         flavourId:"truffle",
//         Flavour:"Truffle",
//         Weight:"3 Kg",
//         Serves:"30-36 people",
//         Cakeversion:"Contains egg"
//       },//5
//       {
//         id:"Creamy-Truffle-Cake-1-Kg",
//         name:"Creamy Truffle Cake 1 Kg",
//         price:1375,
//         src:"./images/Truffle_cakes/truffle-dream-cake_1.webp",
//         Weight:"1 Kg",
//         Flavour:"Truffle",
//         flavourId:"truffle",
//         CakesVersion:"Contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"10:12 people",
//         Size:"9 inches (approx)"
//       },//6
//       {//black forest
//         id:"Black-Forest-Cake-Half-kg-Eggless",
//         name:"Black Forest Cake Half kg Eggless",
//         price:599,
//         src:"./images/Black_Forest/black-forest-cake-half-kg-eggless_2.webp",
//         Weight:"1/2 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"Eggless",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"4:6 people",
//         Size:"6 inches (approx)"
//       },
//       {
//         id:"Ambrosial-Black-Forest-Cake-1kg",
//         name:"Ambrosial Black Forest Cake 1kg",
//         price:1299,
//         src:"./images/Black_Forest/ambrosial-black-forest-cake-2kg_1.webp",
//         Weight:"1 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"10:12 people",
//         Size:"9 inches (approx)"
//       },
//       {
//         id:"Black-Forest-Bliss",
//         name:"Black Forest Bliss",
//         price:799,
//         src:"./images/Black_Forest/black-forest-bliss-cake_1.webp",
//         Weight:"1/2 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"4:6 people",
//         Size:"6 inches (approx)"
//       },
//       {
//         id:"Rose-Fondant-Cake-Black-Forest-4kg",
//         name:"Rose Fondant Cake Black Forest 4kg",
//         price:7299,
//         src:"./images/Black_Forest/rose-fondant-cake-black-forest-4kg_1.webp",
//         Weight:"4 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"contains Egg",
//         Typeofcake:"fondant cake",
//         Shape:"Round",
//         Serves:"40:60 people",
//         Size:"35 inches (approx)"
//       },
//       {
//         id:"Round-Black-Forest-Photo-Cake-Half-Kg",
//         name:"Round Black Forest Photo Cake Half Kg",
//         price:1099,
//         src:"./images/Black_Forest/round-black-forest-photo-cake-1kg_1.webp",
//         Weight:"1 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"10:12 people",
//         Size:"9 inches (approx)"
//       },
//       {
//         id:"royal-black-forest-cake-half-kg",
//         name:"Royal Black ForestCake Half Kg",
//         price:699,
//         src:"./images/Black_Forest/royal-black-forest-cake_1.webp",
//         Weight:"1/2 Kg",
//         Flavour:"Black Forest",
//         flavourId:"black-forest",
//         CakesVersion:"contains Egg",
//         Typeofcake:"Cream cake",
//         Shape:"Round",
//         Serves:"4:6 people",
//         Size:"6 inches (approx)"
//       },
// ]