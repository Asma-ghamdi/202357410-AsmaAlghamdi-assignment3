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
// Get the theme button
const themeButton = document.getElementById("theme-toggle");

// Check if a saved theme exists
const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
}

// Toggle theme when button is clicked
themeButton.addEventListener("click", () => {

    document.body.classList.toggle("dark-mode");

    // Save preference
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "light");
    }

});

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

// Contact form feedback
const contactForm = document.getElementById("contact-form");
const formMessage = document.getElementById("form-message");
// Handle form submission
contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    // Get form values and trim whitespace
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
    // Validate form fields
    if (name === "" || email === "" || message === "") {
        formMessage.textContent = "Please fill in all fields.";
        formMessage.className = "error";
    } else {
        formMessage.textContent = "Message sent successfully!";
        formMessage.className = "success";
        contactForm.reset();
    }
});

// ---- Project Filter Logic ----
const filterButtons = document.querySelectorAll('.filter-btn');
const projects = document.querySelectorAll('.project');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {

        // Remove 'active' from all buttons, add to clicked one
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const selected = button.getAttribute('data-filter');

        // Show or hide projects based on category
        projects.forEach(project => {
            if (selected === 'all' || project.getAttribute('data-category') === selected) {
                project.style.display = 'block';
            } else {
                project.style.display = 'none';
            }
        });
    });
});