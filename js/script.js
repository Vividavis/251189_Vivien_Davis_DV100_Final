console.log("AAA");
const open = document.getElementById('open');
const popUp = document.getElementById('popUpContainer');
const close = document.getElementById('close');

open.addEventListener('click', () => {
    popUp.classList.add('show');
    console.log("SDLkfljfds");
});

close.addEventListener('click', () => {
    popUp.classList.remove('show');
});





const cart = {};
        function addToCart(productName, productPrice) {
            if (cart[productName]) {
                cart[productName].quantity += 1;
                cart[productName].totalPrice += productPrice;
            } else {
                cart[productName] = {
                    quantity: 1,
                    totalPrice: productPrice
                };
            }
            updateCartDisplay();
        }
        function updateCartDisplay() {
            const cartList = document.getElementById('cart');
            cartList.innerHTML = '';
            for (let product in cart) {
                const listItem = document.createElement('li');
                listItem.innerText = `${product} - Quantity: ${cart[product].quantity} - Total Price: Rs${cart[product].totalPrice.toFixed(2)}`;
                cartList.appendChild(listItem);
            }
        }


