document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("contact-form").addEventListener("submit", function (event) {
        let name = document.getElementById("name").value.trim();
        let email = document.getElementById("email").value.trim();
        let subject = document.getElementById("subject").value.trim();
        let message = document.getElementById("message").value.trim();

        if (!name || !email || !subject || !message) {
            alert("All fields are required!");
            return;
        }

        alert("Message Sent Successfully!");
    });

    function addProject(title, description, link) {
        const projectContainer = document.getElementById("additional-projects");
        const newProject = document.createElement("div");
        newProject.classList.add("project-card");
        newProject.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <a href="${link}" target="_blank">View on GitHub</a>
        `;
        projectContainer.appendChild(newProject);
    }

    // Example: Add more projects dynamically in the future

});