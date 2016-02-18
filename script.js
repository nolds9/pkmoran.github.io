// NHO: really like the functional approach you took in this implementation. Can you think of any pros/cons to refactor using an Object Oriented approach
document.addEventListener("DOMContentLoaded", function () {
  // NHO: I think an important question to ask is what is the current scope of these variables
  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");

  var aboutLink = document.getElementById("aboutLink");
  var projectsLink = document.getElementById("projectsLink");
  var contactLink = document.getElementById("contactLink");

  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";

 // NHO: Could see these functions as methods for an object
  function showAbout() {
    aboutLink.addEventListener("click", function () {
      about.style.display = ""; // NHO: is there any difference between this and display = "none"
      projects.style.display = "none"; // NHO: if not I'd probably choose one and stick to it for consistency's sake
      contact.style.display = "none";

      aboutLink.style.textDecoration = "underline";
      projectsLink.style.textDecoration = "";
      contactLink.style.textDecoration = "";
    });
  }

  function showProjects() {
    projectsLink.addEventListener("click", function () {
      projects.style.display = "";
      about.style.display = "none";
      contact.style.display = "none";

      projectsLink.style.textDecoration = "underline";
      aboutLink.style.textDecoration = "";
      contactLink.style.textDecoration = "";
    });
  }

  function showContact() {
    contactLink.addEventListener("click", function () {
      contact.style.display = "";
      about.style.display = "none";
      projects.style.display = "none";

      contactLink.style.textDecoration = "underline";
      aboutLink.style.textDecoration = "";
      projectsLink.style.textDecoration = "";
    });
  }

  showAbout();
  showProjects();
  showContact();
});
