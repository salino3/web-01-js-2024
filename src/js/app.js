const clickMeButton = document.getElementById("clickMe");
if (clickMeButton) {
  clickMeButton.addEventListener("click", function () {
    alert("Button clicked!");
  });
}

function loadHeader() {
  fetch("/src/components/header.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;
      let isHomePage = document.getElementsByClassName("home-page").length > 0;
      let isAboutPage =
        document.getElementsByClassName("about-page").length > 0;
      let isContactPage =
        document.getElementsByClassName("contact-page").length > 0;

      document.querySelectorAll("a").forEach(() => {
        if (!isHomePage) {
          document.getElementById("home-link").textContent = "Home";
          document.getElementById("home-link").href = "/index.html";
        } else {
          document.getElementById("li-home").remove();
        }

        if (!isAboutPage) {
          document.getElementById("about-link").textContent = "About";
          document.getElementById("about-link").href = "/src/html/about.html";
        } else {
          document.getElementById("li-about").remove();
        }

        if (!isContactPage) {
          document.getElementById("contact-link").textContent = "Contact";
          document.getElementById("contact-link").href =
            "/src/html/contact.html";
        } else {
          document.getElementById("li-contact").remove();
        }
      });
    })
    .catch((error) => console.error("Error cargando el encabezado:", error));
}

loadHeader();
