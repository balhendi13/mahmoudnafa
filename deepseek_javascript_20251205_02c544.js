// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        if(targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if(targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Simple password protection for audiobook page (optional)
function protectAudiobookPage() {
    // This is a basic protection - for real security, use server-side protection
    const password = 'mahmoud2024'; // Change this
    const enteredPassword = localStorage.getItem('audiobook_access');
    
    if(!enteredPassword || enteredPassword !== password) {
        const userPassword = prompt('Enter password to access audiobook:');
        if(userPassword === password) {
            localStorage.setItem('audiobook_access', password);
        } else {
            window.location.href = '/';
        }
    }
}

// Call this on audiobook.html page
// if(window.location.pathname.includes('audiobook.html')) {
//     protectAudiobookPage();
// }