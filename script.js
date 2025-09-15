document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    const addToCartButtons = document.querySelectorAll('.add-to-cart');

    let total = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            const menuItem = event.target.closest('.menu-item');
            const price = parseFloat(menuItem.getAttribute('data-price'));
            const quantityInput = menuItem.querySelector('input[type="number"]');
            const quantity = parseInt(quantityInput.value);
            const itemName = menuItem.querySelector('h3').innerText;

            const itemTotal = price * quantity;
            total += itemTotal;

            // Display item in the cart
            const cartItemDiv = document.createElement('div');
            cartItemDiv.classList.add('cart-item');
            cartItemDiv.innerHTML = `
                <span class="item-name">${itemName} (x${quantity})</span>
                <span class="item-price">₹${itemTotal.toFixed(2)}</span>
            `;
            cartItemsContainer.appendChild(cartItemDiv);

            // Update the total price
            totalPriceElement.innerText = `₹${total.toFixed(2)}`;
        });
    });
});