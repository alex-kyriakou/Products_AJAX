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
  const productList = list
    .map((product) => {
      const { id } = product;
      const { name: title, price } = product.fields;
      const { url: img } = product.fields.image[0];

      const formatPrice = price / 100;

      // id, name, price, img
      return ` <a class="single-product" href="product.html">
        <img src="${img}" class="single-product-img img" alt="${title}" />
        <div class="product-details">
            <h5 class="name">${title}</h5>
            <span class="price"> $${formatPrice}</span>
        </div>
    </a> `;
    })
    .join("");
  productsDom.innerHTML = `  <div class="products-container">
          ${productList}
          
    </div>
    
    `;
};

// root function
const start = async () => {
  const data = await fetchProducts();
  displayProducts(data);
};

start();
