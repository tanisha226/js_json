// Function to fetch data from a remote JSON file
async function fetchData() {
    try {
        // Fetch the data from the remote URL
        const response = await fetch('https://tanisha226.github.io/js_json/data.json');
        const data = await response.json(); // Parse the JSON from the response
        window.personData = data; // Store the data globally for use in other functions
        populateNameList(data); // Call to populate the table with names after data is fetched
    } catch (error) {
        console.error('Error fetching data: ', error); // Log any errors during fetch
    }
}

// Function to populate a table with names from the fetched data
function populateNameList(data) {
    const list = document.getElementById('nameList'); // Get the table body element where names will be listed
    list.innerHTML = ''; // Clear any existing entries
    data.forEach(person => {
        const row = list.insertRow(); // Create a new row for each person
        const cell = row.insertCell(0); // Create a new cell in the row
        cell.textContent = person.name; // Set the text content of the cell to the person's name
    });
}

// Event listener for the form to handle the search
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission behavior
    const inputName = document.getElementById('nameInput').value; // Retrieve the name input by the user
    displayPerson(inputName); // Call to display the details of the searched name
});

// Function to display detailed information for a person when searched by name
function displayPerson(name) {
    const resultDiv = document.getElementById('result'); // Get the div where the results will be displayed
    const person = window.personData.find(p => p.name.toLowerCase() === name.toLowerCase()); // Search for a person matching the input name (case-insensitive)

    // Check if a person was found and update the resultDiv accordingly
    if (person) {
        resultDiv.className = 'alert alert-success'; // Use a Bootstrap class for success to style the result
        resultDiv.innerHTML = `<strong>Name:</strong> ${person.name} <br>
                               <strong>Age:</strong> ${person.age} <br>
                               <strong>Occupation:</strong> ${person.occupation} <br>
                               <strong>Address:</strong> ${person.address} <br>
                               <strong>College:</strong> ${person.college}`; // Populate the div with person details
    } else {
        resultDiv.className = 'alert alert-danger'; // Use a Bootstrap class for errors
        resultDiv.innerHTML = 'No person found with that name.'; // Show an error message if no match was found
    }
    resultDiv.style.display = 'block'; // Ensure the result div is visible
}

// Call fetchData on page load to ensure data is ready before user interactions
document.addEventListener('DOMContentLoaded', fetchData);
