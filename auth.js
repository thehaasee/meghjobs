// Authentication Functions

// Login function
function login(username, password) {
    if (username === 'admin' && password === 'admin123') {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        return true;
    }
    return false;
}

// Check if user is logged in
function isLoggedIn() {
    return localStorage.getItem('isLoggedIn') === 'true';
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
}

// Check authentication on page load for protected pages
function checkAuth() {
    const currentPage = window.location.pathname;
    
    // Check if on admin page and not logged in
    if (currentPage.includes('admin.html')) {
        if (!isLoggedIn()) {
            window.location.href = 'login.html';
        }
    }
}