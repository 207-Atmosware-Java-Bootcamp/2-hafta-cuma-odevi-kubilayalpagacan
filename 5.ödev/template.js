//ÖDEV
//Kullanıcı tarafından girilen iki şifrenin aynı olması durumunda login yapma, farklı ise hatalı demesi

(function ValidationPassword() {
  while (true) {
    var password = Number(prompt("Şifrenizi giriniz: "));
    var password2 = Number(prompt("Şifrenizi tekrar giriniz: "));
    if(password== " " || password2==" "){
      alert("Şifrelerde boş değer girilemez.")
    }
    if (password==password2 && (password!= " " || password2!= " ")) {
      break;
    }
    alert("Şifreler eşleşemedi. İki şifreyi de tekrar giriniz.")
  }
  alert("Oturum Açılıyor...");
  document.write("Oturum Açıldı.")
})()
