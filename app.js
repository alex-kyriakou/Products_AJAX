const url = "https://course-api.com/javascript-store-products";

const productsDom = document.querySelector(".products-center");

const fetchProducts = async () => {
  productsDom.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
  } catch (error) {
    productsDom.innerHTML = `<p class="error">There was an error: ${error}</p>`;
    console.log(error);
  }
};

fetchProducts();
