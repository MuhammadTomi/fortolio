AOS.init({duration:1000,once:true});

document.getElementById("contactForm").addEventListener("submit",function(e){
  e.preventDefault();
  alert("Pesan berhasil dikirim!");
});
