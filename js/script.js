// Get the HTML element where the greeting message will be displayed
const greetingElement = document.getElementById("greeting");

// Get the current hour from the system time
const currentHour = new Date().getHours();

// Variable to store the greeting message
let greetingMessage;

// Check the time and set the appropriate greeting
if (currentHour < 12) {
    greetingMessage = "Good morning!";
} else if (currentHour < 18) {
    greetingMessage = "Good afternoon!";
} else {
    greetingMessage = "Good evening!";
}

// Display the greeting message on the webpage
greetingElement.textContent = greetingMessage;


// Get all project buttons
const projectButtons = document.querySelectorAll(".project-button");
// Add click event listeners to each project button
projectButtons.forEach(button => {
    button.addEventListener("click", () => {
        // Get the project details element related to the clicked button
        const projectDetails = button.nextElementSibling;
        // Toggle the visibility of the project details
        if (projectDetails.style.display === "block") {
            projectDetails.style.display = "none";
        } else {
            projectDetails.style.display = "block";
        }
    });
});