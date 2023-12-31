const dropdownLinks = document.querySelectorAll(
  ".dropdown-menu a.dropdown-toggle"
);
dropdownLinks.forEach(function (n) {
  n.addEventListener("click", function (n) {
    if (!this.nextElementSibling.classList.contains("show")) {
      this.closest(".dropdown-menu")
        .querySelectorAll(".show")
        .forEach(function (n) {
          n.classList.remove("show");
        });
    }
    this.nextElementSibling.classList.toggle("show");
    const o = this.closest("li.nav-item.dropdown.show");
    o && o.addEventListener("hidden.bs.dropdown", function (n) {
        document
          .querySelectorAll(".dropdown-submenu .show")
          .forEach(function (n) {
            n.classList.remove("show");
          });
      }),
      n.stopPropagation();
  });
});
