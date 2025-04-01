function getYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}
document.addEventListener("DOMContentLoaded", function () {
  const toggler = document.querySelector(".navbar-toggler");
  const menu = document.querySelector("#navbarSupportedContent");

  toggler.addEventListener("click", function () {
      menu.classList.toggle("show");
  });
});

getYear();

document.addEventListener("DOMContentLoaded", function () {
    if (!localStorage.getItem("cookiesAccepted") && !localStorage.getItem("cookiesDeclined")) {
      document.getElementById("cookie-banner").style.display = "flex";
    }
  
    document.getElementById("accept-cookies").addEventListener("click", function () {
      localStorage.setItem("cookiesAccepted", "true");
      document.getElementById("cookie-banner").style.display = "none";
    });
  
    document.getElementById("decline-cookies").addEventListener("click", function () {
      localStorage.setItem("cookiesDeclined", "true");
      document.getElementById("cookie-banner").style.display = "none";
    });
  });