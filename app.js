 let foodData =[
  {
     "image": {
          "thumbnail": "./assets/images/image-waffle-thumbnail.jpg",
          "mobile": "./assets/images/image-waffle-mobile.jpg",
          "tablet": "./assets/images/image-waffle-tablet.jpg",
          "desktop": "./assets/images/image-waffle-desktop.jpg"
     },
     "name": "Waffle with Berries",
     "category": "Waffle",
     "price": 6.50
  },
  {
      "image": {
          "thumbnail": "./assets/images/image-creme-brulee-thumbnail.jpg",
          "mobile": "./assets/images/image-creme-brulee-mobile.jpg",
          "tablet": "./assets/images/image-creme-brulee-tablet.jpg",
          "desktop": "./assets/images/image-creme-brulee-desktop.jpg"
      },
      "name": "Vanilla Bean Crème Brûlée",
      "category": "Crème Brûlée",
      "price": 7.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-macaron-thumbnail.jpg",
          "mobile": "./assets/images/image-macaron-mobile.jpg",
          "tablet": "./assets/images/image-macaron-tablet.jpg",
          "desktop": "./assets/images/image-macaron-desktop.jpg"
      },
      "name": "Macaron Mix of Five",
      "category": "Macaron",
      "price": 8.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-tiramisu-thumbnail.jpg",
          "mobile": "./assets/images/image-tiramisu-mobile.jpg",
          "tablet": "./assets/images/image-tiramisu-tablet.jpg",
          "desktop": "./assets/images/image-tiramisu-desktop.jpg"
      },
      "name": "Classic Tiramisu",
      "category": "Tiramisu",
      "price": 5.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-baklava-thumbnail.jpg",
          "mobile": "./assets/images/image-baklava-mobile.jpg",
          "tablet": "./assets/images/image-baklava-tablet.jpg",
          "desktop": "./assets/images/image-baklava-desktop.jpg"
      },
      "name": "Pistachio Baklava",
      "category": "Baklava",
      "price": 4.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-meringue-thumbnail.jpg",
          "mobile": "./assets/images/image-meringue-mobile.jpg",
          "tablet": "./assets/images/image-meringue-tablet.jpg",
          "desktop": "./assets/images/image-meringue-desktop.jpg"
      },
      "name": "Lemon Meringue Pie",
      "category": "Pie",
      "price": 5.00
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-cake-thumbnail.jpg",
          "mobile": "./assets/images/image-cake-mobile.jpg",
          "tablet": "./assets/images/image-cake-tablet.jpg",
          "desktop": "./assets/images/image-cake-desktop.jpg"
      },
      "name": "Red Velvet Cake",
      "category": "Cake",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-brownie-thumbnail.jpg",
          "mobile": "./assets/images/image-brownie-mobile.jpg",
          "tablet": "./assets/images/image-brownie-tablet.jpg",
          "desktop": "./assets/images/image-brownie-desktop.jpg"
      },
      "name": "Salted Caramel Brownie",
      "category": "Brownie",
      "price": 4.50
   },
   {
      "image": {
          "thumbnail": "./assets/images/image-panna-cotta-thumbnail.jpg",
          "mobile": "./assets/images/image-panna-cotta-mobile.jpg",
          "tablet": "./assets/images/image-panna-cotta-tablet.jpg",
          "desktop": "./assets/images/image-panna-cotta-desktop.jpg"
      },
      "name": "Vanilla Panna Cotta",
      "category": "Panna Cotta",
      "price": 6.50
   }

]
const parentBox= document.getElementById("rightBox")

 foodData.forEach((food, index)=>{
const childBox = `<main class="child-class">
<img class="product-img" src=${food.image.desktop} alt="">
<div>
    <button class="cartBut" id="I"> <aside class="signBox"><img class="signs" id="minus" src="./assets/images/icon-decrement-quantity.svg" alt=""> </aside><span class="spanA" id="qty"> 1 </span> <aside class="signBox"><img class="signs" id="add" src="./assets/images/icon-increment-quantity.svg" alt=""> </aside></button>
    <button class="cartBtn" id="btnOne"> <img class="cartWheel" src="./assets/images/icon-add-to-cart.svg" alt="">  Add to Cart</button>
</div>
<aside>
    <p class="product-name">${food.name}</p>
    <p class="product-desc">${food.category}</p>
    <p class="product-price">${food.price}</p>
</aside>
</main>`

const innertext = document.createElement("div")
innertext.innerHTML = childBox
const childElement = innertext.querySelector('.child-class');
parentBox.appendChild(childElement);

})
const leftBox1 = document.querySelector("#leftBoxOne")
 const AddtoCart = document.getElementById("btnOne")

  AddtoCart.addEventListener("click", ()=>{
    AddtoCart.style.visibility = "hidden"
    // cartQty.textContext ==1;
    leftBox1.style.display="none"
  })


const addButton = document.getElementById("add")
const minusButton = document.getElementById("minus")
const quantity = document.getElementById("qty")
const cartBut = document.querySelector(".cartBut")
// const cartQty = document.querySelector("#span")
// console.log(cartQty.textContent);


addButton.addEventListener("click", ()=>{
    quantity.textContent ++;
    document.querySelector("#span").textContext ++;
})

minusButton.addEventListener("click", ()=>{
    // cartQty.textContext ==1;
    quantity.textContent --


    if (quantity.textContent<=1) {
        AddtoCart.style.visibility = "visible"
        cartBut.style.display="none"

    }
    

})



 
