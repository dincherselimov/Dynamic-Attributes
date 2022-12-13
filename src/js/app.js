import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  let product  = document.querySelector('.product');
  let productPrice  = document.querySelectorAll('p')[1].innerHTML;

  let span  = document.createElement('span');
  span.class = "data-price";
  span.className = "data-price";

  span.innerHTML = productPrice;
  product.setAttribute('data-price', productPrice);

  product.appendChild(span);

});
