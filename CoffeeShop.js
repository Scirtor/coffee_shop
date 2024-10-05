let cart = [];
// ������� ��� ���������� ������ � �������
function addToCart(productName, price) {
    cart.push({ productName, price });
    updateCart();
}
// ������� ��� �������� ������ �� ������� �� �������
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}
// ������� ��� ���������� �������
function updateCart() {
    const cartList = document.getElementById('cart-items');
    const totalPriceElement = document.getElementById('total-price');
    let totalPrice = 0;
    cartList.innerHTML = ''; // ������� ������
    // ���������� ������ � ��������� �� � ������
    cart.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.productName} - $${item.price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(li);
        totalPrice += item.price;
    });
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`; // ��������� ���������
}
// ���������� ��� ������ "Add to Cart"
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.dataset.product;
        const price = parseFloat(e.target.dataset.price);
        addToCart(product, price);
    });
});