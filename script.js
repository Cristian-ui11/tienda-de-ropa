// Inicializamos el carrito y el precio total
let cart = [];
let totalPrice = 0;

// Esperamos a que el DOM esté completamente cargado para añadir los event listeners
document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.add-to-cart');
    const clearCartButton = document.getElementById('clear-cart');  // Nuevo botón para vaciar el carrito
    
    // Agregamos event listener a cada botón de producto
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const name = button.getAttribute('data-name');
            const price = parseFloat(button.getAttribute('data-price'));
            
            addToCart(name, price);
        });
    });

    // Event listener para vaciar el carrito
    clearCartButton.addEventListener('click', clearCart);
});

// Función para añadir productos al carrito
function addToCart(item, price) {
    cart.push({ item: item, price: price });
    totalPrice += price;
    updateCart();
}

// Función para actualizar la interfaz del carrito
function updateCart() {
    const cartItems = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');

    // Limpiar el contenido actual del carrito
    cartItems.innerHTML = '';

    // Recorrer el carrito y mostrar cada producto
    cart.forEach(product => {
        const li = document.createElement('li');
        li.textContent = `${product.item} - $${product.price.toFixed(2)}`;
        cartItems.appendChild(li);
    });

    // Actualizar el precio total
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Función para vaciar el carrito
function clearCart() {
    cart = [];
    totalPrice = 0;
    updateCart();  // Actualizamos la vista del carrito
}

document.getElementById("buyButton").addEventListener("click", function() {
    document.getElementById("paymentForm").style.display = "block";
});

document.getElementById("cardForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Compra realizada con éxito.");
    document.getElementById("paymentForm").style.display = "none";
});

