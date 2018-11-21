var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
 // write your code here
 let itemPrice = Math.floor(Math.random() * 101);
 let products = {"itemName" : itemName, "itemPrice" : itemPrice};
 cart.push(products);
 return (`${itemName} has been added to your cart.`);
}
function viewCart() {
  // write your code here
  console.log("cart is ", cart);
  if (!cart.length) {
    return "Your shopping cart is empty.";
  } else {
    
    let items = "";
    let lastString = `In your cart, you have`;
    for (let i = 0; i < cart.length; i++) {
      let currentItem = cart[i].itemName;
      let currentPrice = cart[i].itemPrice;
      if (i === cart.length -1) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}.`;
      } else if (i === cart.length -2) {
        lastString = `${lastString} ${currentItem} at $${currentPrice}, and`;
      } else {
        lastString = `${lastString} ${currentItem} at $${currentPrice},`;
      }
} 
items = lastString;
return items;
}
}

function total() {
  // write your code here
  let currentTotalValue = 0;
  for (let i = 0; i < cart.length; i++) {
    let currentItem = cart[i].itemName;
    let currentPrice = cart[i].itemPrice;
    currentTotalValue += currentPrice;
  }
 return currentTotalValue; 
}

function removeFromCart(item) {
  // write your code here
   let itemInCart = false;
   for (let i = 0, l = cart.length; i < l; i++) {
    if (cart.hasOwnProperty(item)) {
      itemInCart = true;
      if (cart.indexOf(item) === 0) {
        cart.splice(0, 1);
      } else if (cart.indexOf(item) === 1) {
        cart.splice(1, 1);
      } else if (cart.indexOf(item) === 2) {
        cart.splice(2, 1);
      }
     }
  }
   if (!itemInCart) {
    return ("That item is not in your cart.");
  }
   return cart;
} 

function placeOrder(cardNumber) {
  // write your code here
  if (!cardNumber) {
    return `Sorry, we don't have a credit card on file for you.`;
    
  } else {
    return `Your total cost is \$${total()}, which will be charged to the card ${cardNumber}.`;
  }
  return cart;
  }
