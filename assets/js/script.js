document.addEventListener("DOMContentLoaded", function () {
  const dropdown = document.getElementById("dropdown");
  const dropdownToggle = document.getElementById("drop-toggle");

  // Add a click event listener to each link in menu1
  const links = dropdown.querySelectorAll("a");
  links.forEach((link) => {
    link.addEventListener("click", () => {
      // Close the dropdown by unchecking the toggle checkbox
      dropdownToggle.checked = false;
    });
  });
});
