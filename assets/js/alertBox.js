document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('contact');

    // Variable to store the selected region
    let selectedRegion = '';

    // Get the select element for region by its ID
    const regionSelect = document.getElementById('region');

    // Event listener to handle region selection
    regionSelect.addEventListener('change', (event) => {
        const selectedOption = event.target;
        const selectedValue = selectedOption.value;

        if (selectedValue) {
            // Update the selected region variable with the most recent selection
            selectedRegion = selectedValue;
        }
    });

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent form submission

        // Get input values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const subject = document.getElementById('subject').value;
        const message = document.getElementById('message').value;

        // Create a message with the input values, including the selected region
        const userInputMessage = `
        <div style="font-size: 12px;">
            <h2>Your Messages have been sent!</h2>
            <p>Name: ${name}</p>
            <p>Email: ${email}</p>
            <p>Subject: ${subject}</p>
            <p>Message: ${message}</p>
            <p>Selected Region: ${selectedRegion}</p>
        </div>
        `;

         // Open a new pop-up window and display the message
         const popupWindow = window.open('', '_blank', 'width=400,height=400');
         popupWindow.document.write(`<pre>${userInputMessage}</pre>`);
    });
});