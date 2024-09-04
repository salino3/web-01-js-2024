const clickMeButton = document.getElementById("clickMe");
if (clickMeButton) {
  clickMeButton.addEventListener("click", function () {
    alert("Button clicked!");
  });
}

function loadHeader() {
  fetch("/src/components/header/header.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("header-container").innerHTML = data;

      document.querySelectorAll("a").forEach((anchor) => {
        document.getElementById("home-link").textContent = "Home";
        document.getElementById("home-link").href = "/index.html";

        document.getElementById("about-link").textContent = "About";
        document.getElementById("about-link").href = "/src/html/about.html";

        document.getElementById("contact-link").textContent = "Contact";
        document.getElementById("contact-link").href = "/src/html/contact.html";
      });
    })
    .catch((error) => console.error("Error cargando el encabezado:", error));
}

loadHeader();
