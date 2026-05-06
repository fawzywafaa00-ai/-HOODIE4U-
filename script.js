
//الجزء الخاص بفورم التسجيل
// تحديد العناصر من الـ DOM
const modal = document.getElementById('loginModal');
const loginBtn = document.getElementById('loginBtn');

// وظيفة لفتح الفورم عند الضغط على زر LOGIN في الهيدر
loginBtn.addEventListener('click', (e) => {
    e.preventDefault(); // منع المتصفح من الانتقال لرابط جديد
    modal.style.display = 'block'; // إظهار المودال
});

// وظيفة لإغلاق الفورم
function closeModal() {
    modal.style.display = 'none'; // إخفاء المودال
}

// إغلاق النافذة عند الضغط في أي مكان خارج المربع الأبيض (الخلفية)
window.onclick = function(event) {
    if (event.target == modal) {
        closeModal();
    }
}



//الجزء الخاص بالرسالة اللي بتأكد اضافة المنتج الي السلة بنجاح
// دالة إضافة المنتج للسلة وإظهار التنبيه
function addToCart(productName, price) {
    // 1. هنا نضع منطق إضافة المنتج (مثلاً طباعة في الكونسول للتأكد)
    console.log("تم إضافة: " + productName + " بسعر: " + price);

    // 2. استدعاء التنبيه (Toast)
    showToast();
}

// دالة إظهار التنبيه (Toast)
function showToast() {
    const toast = document.getElementById("toast");
    
    // إضافة كلاس الـ show لتشغيل الـ CSS Animation
    toast.classList.add("show");
    
    // إخفاء التنبيه بعد 3 ثواني
    setTimeout(() => {
        toast.classList.remove("show");
    }, 3000);
}



//الجزء الخاص بتحديث العداد الموجود في السلة عند اضافة اي منتج
let cartCounter = 0; // تعريف العداد خارج الدالة

function addToCart(productName, price) {
    // 1. زيادة العداد
    cartCounter++;

    // 2. الوصول للعنصر
    const countElement = document.getElementById('cart-count');
    
    if (countElement) {
        // 3. التعديل هنا: نضع الرقم الجديد بين أقواس
        countElement.innerText = "(" + cartCounter + ")";
    }

    // إظهار التنبيه (Toast)
    showToast();
    
    console.log(`Added ${productName} to cart. Total: ${cartCounter}`);
}