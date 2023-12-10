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

function toggleContent(listItem) {
  let collapseIcon = listItem.querySelector(".item-header > .collapseIcon");

  // Select all content elements
  let allItems = document.querySelectorAll(".list-item");

  allItems.forEach((item) => {
    if (item !== listItem) {
      item.classList.remove("active");
    }
  });

  listItem.classList.toggle("active");

  if (listItem.classList.contains("active")) {
    let blockProperty = window.innerWidth <= 600 ? "start" : "center";

    setTimeout(() => {
      listItem.scrollIntoView({
        behavior: "smooth",
        block: blockProperty,
      });
    }, 500);
  }
}
