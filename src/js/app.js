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

      const homeLink = document.getElementById("home-link");
      const aboutLink = document.getElementById("about-link");
      const contactLink = document.getElementById("contact-link");

      if (homeLink) {
        if (!isHomePage) {
          homeLink.textContent = "Home";
          homeLink.href = "/index.html";
        } else {
          const liHome = document.getElementById("li-home");
          if (liHome) liHome.remove();
        }
      }

      if (aboutLink) {
        if (!isAboutPage) {
          aboutLink.textContent = "About";
          aboutLink.href = "/src/html/about.html";
        } else {
          const liAbout = document.getElementById("li-about");
          if (liAbout) liAbout.remove();
        }
      }

      if (contactLink) {
        if (!isContactPage) {
          contactLink.textContent = "Contact";
          contactLink.href = "/src/html/contact.html";
        } else {
          const liContact = document.getElementById("li-contact");
          if (liContact) liContact.remove();
        }
      }
    })
    .catch((error) => console.error("Error downloading header:", error));
}

function loadTitle(h1Text, h2Text) {
  fetch("/src/components/title.component.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("main_page").innerHTML = data;

      document.getElementById("h1_title").textContent = h1Text;
      document.getElementById("h2_title").textContent = h2Text;

      document.getElementById("h1_title").style.color = "purple";
    })
    .catch((error) => console.error("Error downloading title:", error));
}

loadHeader();

loadTitle("Home Page!", "H2 of Home page");
