const url = "https://course-api.com/javascript-store-products";

const productsDom = document.querySelector(".products-center");

// fetch function
const fetchProducts = async () => {
  productsDom.innerHTML = '<div class="loading"></div>';
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    productsDom.innerHTML = `<p class="error">There was an error: ${error}</p>`;
  }
};

// render function
const displayProducts = (list) => {
  console.log(list);
};

// root function
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
