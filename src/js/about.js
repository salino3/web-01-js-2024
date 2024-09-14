async function loadTitle(h1Text, h2Text) {
  return new Promise((resolve, reject) => {
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

        resolve();
      })
      .catch((error) => {
        console.error("Error downloading title:", error);
        reject(error);
      });
  });
}

function addH3(h3Text) {
  const mainPage = document.getElementById("main_page");

  if (mainPage) {
    // Create a new h3 element
    const h3Element = document.createElement("h3");
    h3Element.id = "h3About";
    h3Element.textContent = h3Text;

    // Append the new h3 element to main_page
    mainPage.appendChild(h3Element);
  } else {
    console.error('Element with id "main_page" not found.');
  }
}

loadTitle("Page About!", "H2 of About").then(() => {
  addH3(`${person1?.namePerson} works as ${person1.profession}`);
});
