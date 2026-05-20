// الانتظار حتى تحميل الصفحة بالكامل
document.addEventListener("DOMContentLoaded", () => {
    
    // 1. تأثير التمرير السلس عند الضغط على روابط القائمة
    const links = document.querySelectorAll("header nav ul li a");
    
    links.forEach(link => {
        link.addEventListener("click", (e) => {
            e.preventDefault(); // إيقاف الانتقال المفاجئ الافتراضي
            
            const targetId = link.getAttribute("href");
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: "smooth", // جعل الحركة ناعمة وسلسة
                    block: "start"
                });
            }
        });
    });

    // 2. ميزة ترحيبية تفاعلية في الكونسول (لتثبت لمن يفحص الموقع أنك مبرمج)
    console.log("%cمرحباً بك في معرض أعمال محمد الطيب! 🚀", "color: #3498db; font-size: 20px; font-weight: bold;");
    console.log("تم بناء هذا الموقع باستخدام: HTML, CSS, JavaScript");
});
