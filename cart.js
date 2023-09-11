const cartContent = document.getElementById('cart-content');
const closeCartButton = document.getElementById('close-cart');

// قم بتعيين محتوى السلة هنا، يمكنك استخدام localStorage لاسترجاع المنتجات من السلة

// قم بإنشاء زر لعرض عدد المنتجات في السلة
const cartCountButton = document.createElement('button');
cartCountButton.textContent = 'عدد المنتجات في السلة';
cartCountButton.addEventListener('click', showCartContent);
document.body.appendChild(cartCountButton);

function showCartContent() {
    // قم بعرض صفحة السلة (cart.html) كمربع منبثق
    // يمكنك استخدام CSS لتنسيق مظهر الصفحة المنبثقة
    window.open('cart.html', 'سلة المشتريات', 'width=400,height=400');
}

// إضافة حدث لإغلاق صفحة السلة المنبثقة عند النقر على الزر
closeCartButton.addEventListener('click', () => {
    window.close();
});
