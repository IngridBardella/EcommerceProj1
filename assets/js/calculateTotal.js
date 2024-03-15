// Fixed item price and tax rates
const gstRate = 0.05;
const qstRate = 0.0975;
const itemPrice = 25;

// Function to calculate totals based on user-selected quantity
function calculateTotal() {
  const quantity = parseInt(document.getElementById("quantity").value);

  // Calculate subtotal, GST, and QST based on quantity
  const subtotal = itemPrice * quantity;
  const gstAmount = subtotal * gstRate;
  const qstAmount = subtotal * qstRate;
  const totalAmount = subtotal + gstAmount + qstAmount;

  // Update the content of the <span> elements with calculated values
  document.getElementById("subTotal").textContent = `$${subtotal.toFixed(2)}`;
  document.getElementById("gst").textContent = `$${gstAmount.toFixed(2)}`;
  document.getElementById("qst").textContent = `$${qstAmount.toFixed(2)}`;
  document.getElementById("total").textContent = `$${totalAmount.toFixed(2)}`;
}

// Initial calculation when the page loads
calculateTotal(); 
document.getElementById('removeButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Reset the quantity input to 1
    document.getElementById('quantity').value = '1';
    
    // Reset the subtotal, GST, QST, and total to 0
    document.getElementById('subTotal').textContent = '$0.00';
    document.getElementById('gst').textContent = '$0.00';
    document.getElementById('qst').textContent = '$0.00';
    document.getElementById('total').textContent = '$0.00';
  });