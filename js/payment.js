 let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let discount = parseInt(localStorage.getItem("discount")) || 0;
    const deliveryFee = 15;

    function renderCheckout() {
      const checkoutItems = document.getElementById("checkout-items");
      checkoutItems.innerHTML = "";
      let subtotal = 0;

      cart.forEach((item, index) => {
        subtotal += item.price * item.quantity;
        checkoutItems.innerHTML += `
          <div class="checkout-item">
            <img src="${item.img}" alt="${item.name}">
            <div class="item-info">
              <h3>${item.name}</h3>
              <p>Size: ${item.size}</p>
              <p>Color: ${item.color}</p>
              <div class="quantity-controls">
                <button class="qty-btn" onclick="decreaseQty(${index})">-</button>
                <span class="qty-value">${item.quantity}</span>
                <button class="qty-btn" onclick="increaseQty(${index})">+</button>
              </div>
            </div>
            <div class="item-price">$${(item.price * item.quantity).toFixed(2)}</div>
            <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
          </div>
        `;
      });

      let discountValue = subtotal * (discount / 100);
      let total = subtotal - discountValue + deliveryFee;

      document.getElementById("subtotal").textContent = "$" + subtotal.toFixed(2);
      document.getElementById("discount").textContent = "-$" + discountValue.toFixed(2);
      document.getElementById("discount-rate").textContent = discount + "%";
      document.getElementById("total").textContent = "$" + total.toFixed(2);
    }

    function increaseQty(index) {
      cart[index].quantity++;
      saveCart();
    }

    function decreaseQty(index) {
      if (cart[index].quantity > 1) {
        cart[index].quantity--;
      } else {
        if (confirm("Remove this item from cart?")) {
          cart.splice(index, 1);
        }
      }
      saveCart();
    }

    function removeItem(index) {
      if (confirm("Remove this item from cart?")) {
        cart.splice(index, 1);
        saveCart();
      }
    }

    function saveCart() {
      localStorage.setItem("cart", JSON.stringify(cart));
      renderCheckout();
    }

    function placeOrder() {
      alert("✅ Order placed successfully!");
      localStorage.removeItem("cart");
      localStorage.removeItem("discount");
      window.location.href = "index.html";
    }

    renderCheckout();