

// Check for saved theme preference or default to 'light'
let currentTheme = localStorage.getItem('theme') || 'light';

// Function to set the theme
function setTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('darkmode');
    } else {
        document.body.classList.remove('darkmode');
    }
    localStorage.setItem('theme', theme);
    currentTheme = theme;
}

// Set initial theme
setTheme(currentTheme);

// Add event listener to theme switch
document.getElementById('theme-switch').addEventListener('click', function() {
    setTheme(currentTheme === 'light' ? 'dark' : 'light');
});
