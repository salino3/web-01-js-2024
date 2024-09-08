function loadTitle(h1Text, h2Text) {
  fetch("../components/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      document.getElementById("h1_title").textContent = h1Text;
      document.getElementById("h2_title").textContent = h2Text;
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadTitle("Page Contact!", "H2 of Contact");
