var accordionBtns = document.getElementsByClassName("accordion-btn");

for (let i = 0; i < accordionBtns.length; i++) {
  accordionBtns[i].addEventListener("click", function() {
    this.classList.toggle("active");

    let panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}