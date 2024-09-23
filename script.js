// Scroll Up Button
const scrollUpBtn = document.getElementById('scrollUpBtn');

// Show/Hide scroll up button
window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollUpBtn.style.display = "block";
    } else {
        scrollUpBtn.style.display = "none";
    }
};

// Scroll to top when the button is clicked
scrollUpBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
};

// Navbar Toggle for Mobile
const navbar = document.getElementById('navbar');
const navbarMenu = navbar.querySelector('ul');

navbar.addEventListener('click', function(event) {
    // Check if the hamburger icon is clicked
    if (event.target === navbar) {
        navbarMenu.classList.toggle('active');
    }
});


