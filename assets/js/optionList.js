const regions = [
    { name: 'Montreal', value: 'Montreal' },
    { name: 'Brossard', value: 'Brossard' },
    { name: 'Laval', value: 'Laval' },
    { name: 'Dorval', value: 'Dorval' },
    // Add more regions as needed
];

// Get the select element by its ID
const regionSelect = document.getElementById('region');

// Array to store selected regions
const selectedRegions = [];

// Get the list element by its ID
const selectedRegionsList = document.getElementById('selectedRegions');

// Event listener to handle selection/deselection
regionSelect.addEventListener('change', (event) => {
    const selectedOption = event.target;
    const selectedValue = selectedOption.value;

    if (selectedValue) {
        if (selectedRegions.indexOf(selectedValue) === -1) {
            // Add to the selected regions array
            selectedRegions.push(selectedValue);
        } else {
            // Remove from the selected regions array
            const indexToRemove = selectedRegions.indexOf(selectedValue);
            selectedRegions.splice(indexToRemove, 1);
        }

        // Update the selected regions list
        updateSelectedRegionsList();
    }
});

// Function to update the selected regions list
function updateSelectedRegionsList() {
    selectedRegionsList.innerHTML = '';

    selectedRegions.forEach((region) => {
        const listItem = document.createElement('li');
        listItem.textContent = region;
        selectedRegionsList.appendChild(listItem);
    });

    // Convert the selectedRegions array to a string
    const selectedRegionsString = JSON.stringify(selectedRegions);
    console.log(selectedRegionsString); // You can use this string as needed
}

// Populate the select element with options
regions.forEach((region) => {
    const option = document.createElement('option');
    option.value = region.value;
    option.textContent = region.name;
    regionSelect.appendChild(option);
});