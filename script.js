document.addEventListener("DOMContentLoaded", function () {

  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");

  projects.style.display = "none";
  contact.style.display = "none";

  function showAbout() {
    var aboutLink = document.getElementById("aboutLink");
    aboutLink.addEventListener("click", function () {
      about.style.display = "";
      projects.style.display = "none";
      contact.style.display = "none";
    });
  }

  function showProjects() {
    var projectsLink = document.getElementById("projectsLink");
    projectsLink.addEventListener("click", function () {
      projects.style.display = "";
      about.style.display = "none";
      contact.style.display = "none";
    });
  }

  function showContact() {
    var contactLink = document.getElementById("contactLink");
    contactLink.addEventListener("click", function () {
      contact.style.display = "";
      about.style.display = "none";
      projects.style.display = "none";
    });
  }

  showAbout();
  showProjects();
  showContact();
});
