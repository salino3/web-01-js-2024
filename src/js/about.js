function loadTitle(h1Text, h2Text) {
  fetch("../components/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      const h1Element = document.getElementById("h1_title");
      const h2Element = document.getElementById("h2_title");

      h1Element.textContent = h1Text;
      h2Element.textContent = h2Text;

      h1Element.style.color = "blue";

      h1Element.classList.add("h1About");
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadTitle("Page About!", "H2 of About");
