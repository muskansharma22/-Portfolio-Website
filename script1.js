// Search Feature
const searchInput = document.getElementById("searchInput");
const cafes = document.querySelectorAll(".cafe-card");

searchInput.addEventListener("keyup", function() {
  let filter = searchInput.value.toLowerCase();

  cafes.forEach(cafe => {
    let cafeName = cafe.querySelector("h2").textContent.toLowerCase();
    if (cafeName.includes(filter)) {
      cafe.style.display = "block";
    } else {
      cafe.style.display = "none";
    }
  });
});
