const personData = [
    { name: "Ram", age: 25, occupation: "Engineer", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Shyam", age: 30, occupation: "Designer", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Sita", age: 35, occupation: "Teacher", address: getRandomAddress(), college: getRandomCollege() },
    { name: "David", age: 28, occupation: "Developer", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Ramesh", age: 42, occupation: "Manager", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Suresh", age: 21, occupation: "Artist", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Supriya", age: 39, occupation: "Photographer", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Hannah", age: 34, occupation: "Chef", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Indra", age: 50, occupation: "Scientist", address: getRandomAddress(), college: getRandomCollege() },
    { name: "Jenny", age: 29, occupation: "Architect", address: getRandomAddress(), college: getRandomCollege() }
];

function getRandomAddress() {
    const addresses = [
        { country: "Nepal", city: "Kathmandu", street: "Random Street 123" },
        { country: "Nepal", city: "Pokhara", street: "Another Road 456" },
        { country: "India", city: "Mumbai", street: "Main Boulevard 789" },
        { country: "India", city: "Delhi", street: "Central Avenue 567" }
    ];
    return addresses[Math.floor(Math.random() * addresses.length)];
}

function getRandomCollege() {
    const colleges = [
        { country: "Nepal", name: "Nepal University" },
        { country: "Nepal", name: "Himalayan College" },
        { country: "India", name: "Indian Institute of Technology (IIT)" },
        { country: "India", name: "Delhi College of Engineering" }
    ];
    return colleges[Math.floor(Math.random() * colleges.length)];
}

document.addEventListener('DOMContentLoaded', function() {
    // Event listener added to the form
    document.getElementById('searchForm').addEventListener('submit', function(event) {
        event.preventDefault();  // Prevent the form from submitting in the traditional way
        const inputName = document.getElementById('nameInput').value;  // Get the name typed by the user
        displayPerson(inputName);  // Call the function to display the details of the person
    });
});

// Function to display the person's details using Bootstrap alerts
function displayPerson(name) {
    const resultDiv = document.getElementById('result');
    const person = personData.find(p => p.name.toLowerCase() === name.toLowerCase());  // Find the person by name
    if (person) {
        resultDiv.className = 'alert alert-success'; // Bootstrap class for success

        // Constructing the HTML content
        resultDiv.innerHTML = `
            <strong>Name:</strong> ${person.name} <br>
            <strong>Age:</strong> ${person.age} <br>
            <strong>Occupation:</strong> ${person.occupation} <br>
            <strong>Address:</strong> ${person.address.street}, ${person.address.city}, ${person.address.country} <br>
            <strong>College:</strong> ${person.college.name}, ${person.college.country}
        `;
    } else {
        resultDiv.className = 'alert alert-danger'; // Bootstrap class for danger
        resultDiv.innerHTML = 'No person found with that name.';
    }
    resultDiv.style.display = 'block'; // Ensure the result div is visible
}
