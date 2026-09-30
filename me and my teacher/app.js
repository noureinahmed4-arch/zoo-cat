let modeBtn=document.querySelector("#myBtnMode")

modeBtn.onclick=function () {  

    document.body.classList.toggle("dark-theme");






  // فكرة ذكية إضافية لتغيير نص الزرار مع الثيم:
  if (document.body.classList.contains("dark-theme")) {
    modeBtn.textContent = "تفعيل الوضع المضيء ☀️";
  } else {
    modeBtn.textContent = "تفعيل الوضع المظلم 🌙";
  }

}






























