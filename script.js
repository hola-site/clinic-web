// ===== Booking Form to WhatsApp =====

const bookingForm = document.getElementById("bookingForm");

bookingForm.addEventListener("submit", function(e){
  e.preventDefault();

  const fullName = document.getElementById("fullName").value;
  const phone = document.getElementById("phone").value;
  const date = document.getElementById("date").value;
  const time = document.getElementById("time").value;
  const service = document.getElementById("service").value;
  const notes = document.getElementById("notes").value;

  const message =
`مرحباً، أود حجز موعد في العيادة.

الاسم الكامل: ${fullName}
رقم الهاتف: ${phone}
الخدمة المطلوبة: ${service}
تاريخ الموعد: ${date}
وقت الموعد: ${time}
ملاحظات إضافية: ${notes || "لا توجد"}`;

  const whatsappNumber = "9647500202754";
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappURL, "_blank");
});