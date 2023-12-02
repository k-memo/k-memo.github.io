document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const dropdownToggle = document.getElementById("drop-toggle");

  const links = dropdown.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      dropdownToggle.checked = false;
    });
  });
});

function toggleContent(element) {
  let collapseIcon = element.querySelector("svg");

  // Select all content elements
  let allContents = document.querySelectorAll(".item-content");

  allContents.forEach((item) => {
    if (item !== element.nextElementSibling) {
      item.classList.remove("active");
    }
  });

  // Collapse active content and move the view
  let content = element.nextElementSibling;

  collapseIcon.classList.toggle("collapsed");
  content.classList.toggle("active");

  if (content.classList.contains("active")) {
    setTimeout(() => {
      content.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  }
}
