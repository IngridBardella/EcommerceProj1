// Get the button element
const button = document.querySelector('.btn.btn-primary');

// Add a click event listener to the button
button.addEventListener('click', function () {
  // Get all the product elements with class "item"
  const productElements = document.querySelectorAll('.item');

  // Create an empty array to store the product data
  const productData = [];

  // Loop through each product element using a for loop
  for (let i = 0; i < productElements.length; i++) {
    const productElement = productElements[i];

    // Extract data from the product element
    const id = productElement.id;
    const name = productElement.querySelector('h4').textContent;
    const price = parseFloat(productElement.querySelector('h6').textContent.replace('$', ''));

    // Create an object to represent the product
    const product = {
      id: id,
      name: name,
      price: price,
    };

    // Add the product object to the productData array
    productData.push(product);
  }

  // Create a formatted string for displaying the data
  let formattedData = 'Product Data:\n\n';
  productData.forEach((product) => {
    formattedData += `ID: ${product.id}\nName: ${product.name}\nPrice: $${product.price.toFixed(2)}\n\n`;
  });

  // Display the formatted data in an alert box
  alert(formattedData);
});