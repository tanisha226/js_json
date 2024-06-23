# Person Lookup Application

## Overview

The Person Lookup Application is a web-based tool designed to allow users to search for details about individuals from a predefined dataset. This application was developed to demonstrate the effective use of JavaScript, HTML, and CSS, specifically leveraging Bootstrap for styling and providing a dynamic user experience with interactive features.

## Features

- **Search Functionality**: Users can search for individuals by name using a simple, intuitive interface.
- **Dynamic Data Retrieval**: The application retrieves person data dynamically from an embedded JSON array, without the need for server-side processing.
- **Responsive Design**: Built with Bootstrap, the interface is fully responsive and adapts to different screen sizes, ensuring usability across various devices.
- **Enhanced User Interaction**: Search results are displayed using Bootstrap alerts, which highlight the results effectively and attractively.

## Technical Details

### Data Structure

The application uses a JSON array to store data about individuals, including their name, age, occupation, and email address.

## JavaScript Functions
- displayPerson(name): Searches for and displays the person's details if found. If not found, displays a notification alert.

## Event Listeners
- DOMContentLoaded: Ensures that the JavaScript runs after the full HTML document has been loaded.
- Form Submission: Captures the form submission event to retrieve the input value and process the search without reloading the page.

## Usage
To use the application, simply enter the name of the individual you wish to find into the search bar and click the "Search" button. The details, if found, will be displayed below the search bar.

## Learning Outcomes
- JavaScript Asynchronous Operations: Gained a deeper understanding of asynchronous JavaScript operations, particularly using async/await for handling JSON data.
- DOM Manipulation: Enhanced skills in manipulating the DOM to dynamically update the content based on user interactions.
- Bootstrap Integration: Learned how to integrate and customize Bootstrap components to improve UI design and responsiveness.
- Event Handling: Developed a better grasp of adding and managing event listeners in JavaScript for handling user input and form submissions.

## Conclusion
This project served as an excellent practice ground for combining various web development technologies and techniques to create a functional and user-friendly web application. It highlighted the importance of understanding both front-end frameworks and core JavaScript functionalities.

