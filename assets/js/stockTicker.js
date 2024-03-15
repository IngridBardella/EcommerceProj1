document.addEventListener("DOMContentLoaded", function () {
    // API endpoint URL
    var apiUrl = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=YOUR_API_KEY';

    // Reference to the button
    var checkStockButton = document.getElementById('checkStockButton');

    // Add a click event listener to the button
    checkStockButton.addEventListener('click', function () {
        // Make the API request
        fetch(apiUrl)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                // Extract intraday data from the response
                var timeSeries = data['Time Series (5min)'];

                // Get the most recent timestamp
                var timestamps = Object.keys(timeSeries);
                var mostRecentTimestamp = timestamps[0]; // The first timestamp is the most recent one

                // Get the data for the most recent timestamp
                var mostRecentData = timeSeries[mostRecentTimestamp];

                // Create a table for the data
                var table = document.createElement('table');
                table.innerHTML = `
                    <thead>
                        <tr>
                            <th>Timestamp</th>
                            <th>Open</th>
                            <th>High</th>
                            <th>Low</th>
                            <th>Close</th>
                            <th>Volume</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${mostRecentTimestamp}</td>
                            <td>${mostRecentData['1. open']}</td>
                            <td>${mostRecentData['2. high']}</td>
                            <td>${mostRecentData['3. low']}</td>
                            <td>${mostRecentData['4. close']}</td>
                            <td>${mostRecentData['5. volume']}</td>
                        </tr>
                    </tbody>
                `;

                // Display the table in a modal dialog
                showModal(table);
            })
            .catch(function (error) {
                console.log('Error:', error);
            });
    });
});

// Function to display the modal dialog
function showModal(content) {
    var modal = document.createElement('div');
    modal.classList.add('modal');

    var modalContent = document.createElement('div');
    modalContent.classList.add('modal-content');

    // Create a close button
    var closeButton = document.createElement('span');
    closeButton.classList.add('close');
    closeButton.innerHTML = '&times;';
    closeButton.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    modalContent.appendChild(closeButton);
    modalContent.appendChild(content);
    modal.appendChild(modalContent);

    document.body.appendChild(modal);

    // Display the modal
    modal.style.display = 'block';
}