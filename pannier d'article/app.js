const cart = document.getElementById("cart");
const cartItems = cart.querySelectorAll(".cart-item");
const decrementButtons = cart.querySelectorAll(".decrement-btn");
const incrementButtons = cart.querySelectorAll(".increment-btn");
const removeButtons = cart.querySelectorAll(".item-remove-btn");
const likeButtons = cart.querySelectorAll(".item-like-btn");
const totalPrice = document.getElementById("cart-total-price");


function updateTotalPrice() {
  let price = 0;
  for (let i = 0; i < cartItems.length; i++) {
    const itemPrice = parseFloat(cartItems[i].querySelector(".item-price").innerText.replace("$", ""));
    const itemQuantity = parseFloat(cartItems[i].querySelector(".item-quantity-input").value);
    price += itemPrice * itemQuantity;
  }
  totalPrice.innerText = `Total: $${price}`;
}


for (let i = 0; i < decrementButtons.length; i++) {
  decrementButtons[i].addEventListener("click", function() {
    const quantityInput = this.parentElement.querySelector(".item-quantity-input");
    if (parseFloat(quantityInput.value) > 1) {
      quantityInput.value = parseFloat(quantityInput.value




) - 1;
}
updateTotalPrice();
});
}

for (let i = 0; i < incrementButtons.length; i++) {
incrementButtons[i].addEventListener("click", function() {
const quantityInput = this.parentElement.querySelector(".item-quantity-input");
quantityInput.value = parseFloat(quantityInput.value) + 1;
updateTotalPrice();
});
}

for (let i = 0; i < removeButtons.length; i++) {
removeButtons[i].addEventListener("click", function() {
const item = this.parentElement;
item.remove();
updateTotalPrice();
});
}

for (let i = 0; i < likeButtons.length; i++) {
likeButtons[i].addEventListener("click", function() {
this.classList.toggle("liked");
});
}

updateTotalPrice();

