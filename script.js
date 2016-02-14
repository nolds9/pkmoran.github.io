document.addEventListener("DOMContentLoaded", function () {

  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");

  var aboutLink = document.getElementById("aboutLink");
  var projectsLink = document.getElementById("projectsLink");
  var contactLink = document.getElementById("contactLink");

  about.style.display = "none";
  projects.style.display = "none";
  contact.style.display = "none";

  function showAbout() {
    aboutLink.addEventListener("click", function () {
      about.style.display = "";
      projects.style.display = "none";
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
