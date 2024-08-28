document.getElementById(`h111`).innerHTML ="Hello World...........";
// --------------------------------------------------------------------------------------------------------


window.addEventListener('unload', function() {
    console.log('تم مغادرة الصفحة!');
});


window.addEventListener('resize', function() {
    console.log('تم تغيير حجم النافذة!');
});



window.addEventListener('scroll', function() {
    console.log('تم تمرير الصفحة!');
});



element.addEventListener('change', function() {
    console.log('تم تغيير القيمة!');
});



form.addEventListener('submit', function(event) {
    event.preventDefault(); // منع إرسال النموذج الافتراضي
    console.log('تم إرسال النموذج!');
});


element.addEventListener('blur', function() {
    console.log('فقد العنصر التركيز!');
});


