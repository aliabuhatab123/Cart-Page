/* Create an array named products which you will use to add all of your product object literals that you create in the next step. */
const products = [];
/* Create 3 or more product objects using object literal notation 
   Each product should include five properties
   - name: name of product (string)
   - price: price of product (number)
   - quantity: quantity in cart should start at zero (number)
   - productId: unique id for the product (number)
   - image: picture of product (url string)
*/
// create first product
const product1 = {
  name: "cherry",
  price: 22.4,
  quantity: 0,
  productId: 101,
  image: "images/cherry.jpg"
};

// create second product
const product2 = {
  name: "orange",
  price: 12.8,
  quantity: 0,
  productId: 102,
  image: "images/orange.jpg"
};

// create third product
const product3 = {
  name: "strawberry",
  price: 16.9,
  quantity: 0,
  productId: 103,
  image: "images/strawberry.jpg"
};

// add the products to the array
products.push(product1, product2, product3);

/* Images provided in /images folder. All images from Unsplash.com
   - cherry.jpg by Mae Mu
   - orange.jpg by Mae Mu
   - strawberry.jpg by Allec Gomes
*/

/* Declare an empty array named cart to hold the items in the cart */
const cart = [];
/* Create a function named addProductToCart that takes in the product productId as an argument
  - addProductToCart should get the correct product based on the productId
  - addProductToCart should then increase the product's quantity
  - if the product is not already in the cart, add it to the cart
*/
function addProductToCart(productId) {
  let exist = false;
  let productToAdd;
  products.forEach(element => {
    if(element.productId === productId) {
      exist = true;
      productToAdd = element;
    }
  });

  if (!exist) {
    console.log("product not found on products Array!");
  }
  productToAdd.quantity++;
// check if the product already exist in the cart
  const cartProduct = cart.find(item => item === productToAdd);
  
  if(!cartProduct) {
    cart.push(productToAdd);
  }
  else if(cartProduct) {
    console.log("product already added to cart")
  }
};

/* Create a function named increaseQuantity that takes in the productId as an argument
  - increaseQuantity should get the correct product based on the productId
  - increaseQuantity should then increase the product's quantity
*/
function increaseQuantity(productId) {
  const product = cart.find(product => product.productId === productId);
  
  if (!product) {
    console.log("product not found in the cart")
    return;
  }
  product.quantity++;
  console.log("Product quanitiy increased!");
};



/* Create a function named decreaseQuantity that takes in the productId as an argument
  - decreaseQuantity should get the correct product based on the productId
  - decreaseQuantity should decrease the quantity of the product
  - if the function decreases the quantity to 0, the product is removed from the cart
*/

function decreaseQuantity(productId) {
  const product = cart.find(product => product.productId === productId);
  
  if (!product) {
    console.log("product not found in the cart")
    return;
  }
  if (product.quantity === 1) {
    // remove from cart if we have only one item of quantity
    const productIndex = cart.findIndex(product => product.productId === productId);
    cart[productIndex].quantity = 0;
    cart.splice(productIndex, 1)

    console.log("Product removed from the cart!");
  }
  if (product.quantity > 1) {
    product.quantity = product.quantity - 1;
    console.log("Product quantity decreased!");
  }
};

/* Create a function named removeProductFromCart that takes in the productId as an argument
  - removeProductFromCart should get the correct product based on the productId
  - removeProductFromCart should update the product quantity to 0
  - removeProductFromCart should remove the product from the cart
*/

function removeProductFromCart (productId) {
  const productIndex = cart.findIndex(product => product.productId == productId);
  if (productIndex === -1) {
    console.log("product not found in the cart");
    return;
  }
  cart[productIndex].quantity = 0;
  cart.splice(productIndex, 1)
  console.log("Product removed from the cart!");
}
/* Create a function named cartTotal that has no parameters
  - cartTotal should iterate through the cart to get the total of all products
  - cartTotal should return the sum of the products in the cart
*/
function cartTotal(){
  let sumPrice = 0;
  for (let productIndex = 0; productIndex < cart.length; productIndex++) {
    sumPrice +=cart[productIndex].price * cart[productIndex].quantity;
  }
  console.log("the sum of prices is created")
  return sumPrice;
}

/* Create a function called emptyCart that empties the products from the cart */

function emptyCart () {
  // simply set the cart length zero to make it empty:)
  cart.length = 0;
  console.log("the cart is empty now")
}

/* Create a function named pay that takes in an amount as an argument
  - pay will return a negative number if there is a remaining balance
  - pay will return a positive number if money should be returned to customer
*/
function pay(amount) {
  const amountToPay = cartTotal();
  if (amount > amountToPay) {
    return amount - amountToPay;
  }
  else if (amount < amountToPay) {
    return -(amount - amountToPay);
  }
};
/* Place stand out suggestions here (stand out suggestions can be found at the bottom of the project rubric.)*/


/* The following is for running unit tests. 
   To fully complete this project, it is expected that all tests pass.
   Run the following command in terminal to run tests
   npm run test
*/

module.exports = {
  products,
  cart,
  addProductToCart,
  increaseQuantity,
  decreaseQuantity,
  removeProductFromCart,
  cartTotal,
  pay, 
  emptyCart,
  /* Uncomment the following line if completing the currency converter bonus */
  // currency
}