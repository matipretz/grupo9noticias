document.getElementById("arriba").addEventListener("click", () => {
  console.log("subiendo");
  window.scrollTo({ top: 0, behavior: "smooth" });
});

window.addEventListener("scroll", () => {
    arriba.style.display = window.scrollY > 50 ? "block" : "none";
});
