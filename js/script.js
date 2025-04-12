let devicelayout = document.querySelector(".device-layout");
  products.forEach((product)=>{
  let div = document.createElement("div");
  div.className = "device-card"
  div.innerHTML = `<img src="${product.img}" alt="loding">
      <h3>${product.name}</h3>
      <p>${product.desc}</p>
      <span class="price">${product.price}</span>
      <button>Buy</button>`;
      devicelayout.appendChild(div)
})


