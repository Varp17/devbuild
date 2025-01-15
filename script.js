// Welcome message in the console
console.log("Welcome to DevBuilds Solutions!");

document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to DevBuilds!");

    // Example of adding interactivity: Smooth scrolling for navigation links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
            }
        });
    });
});
