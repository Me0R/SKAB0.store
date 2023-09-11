const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

function addToCart(event) {
    const productId = event.target.getAttribute('data-product-id');
    // يمكنك هنا إضافة الكود الخاص بإضافة المنتج إلى السلة
    // يمكنك استخدام localStorage لتخزين المنتجات في السلة

    alert(`تمت إضافة المنتج رقم ${productId} إلى السلة.`);
}
