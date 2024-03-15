function stockLeft() {
    const quantity = parseInt(document.getElementById("quantity").value);

    const stock = Math.max(0, Math.min(7, 7 - quantity));

    document.getElementById("stock").textContent = stock;


}

stockLeft();

document.getElementById('removeButton').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default form submission
    
    // Reset the quantity input to 1
    document.getElementById('quantity').value = '1';

    // Reset the stock to 7
    document.getElementById('stock').textContent = '7';

});