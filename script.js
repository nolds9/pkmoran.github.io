document.addEventListener("DOMContentLoaded", function () {

  var about = document.getElementById("about");
  var projects = document.getElementById("projects");
  var contact = document.getElementById("contact");

  about.style.visibility = "visible";
  projects.style.visibility = "hidden";
  contact.style.visibility = "hidden";

  function showAbout() {
    var aboutLink = document.getElementById("aboutLink");
    aboutLink.addEventListener("click", function () {
      about.style.visibility = "visible";
      projects.style.visibility = "hidden";
      contact.style.visibility = "hidden";

      // about.className = "content";
      // projects.className = "";
      // contact.className = "";
    });
  }

  function showProjects() {
    var projectsLink = document.getElementById("projectsLink");
    projectsLink.addEventListener("click", function () {
      projects.style.visibility = "visible";
      about.style.visibility = "hidden";
      contact.style.visibility = "hidden";

      // projects.className = "content";
      // about.className = "";
      // contact.className = "";
    });
  }

  function showContact() {
    var contactLink = document.getElementById("contactLink");
    contactLink.addEventListener("click", function () {
      contact.style.visibility = "visible";
      about.style.visibility = "hidden";
      projects.style.visibility = "hidden";

      // contact.className = "content";
      // about.className = "";
      // projects.className = "";
    });
  }

  showAbout();
  showProjects();
  showContact();
});
