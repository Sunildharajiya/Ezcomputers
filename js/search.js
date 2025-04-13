
let searchbar = document.querySelector("#search");
let productCards = document.querySelectorAll(".device-card");

searchbar.addEventListener("input", (e) => {
  let value = e.target.value.toLowerCase();

  productCards.forEach((card) => {
    let productName = card.querySelector("h3").textContent.toLowerCase();

    if (productName.includes(value)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
});


