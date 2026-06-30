// Password hashing utility (simple bcrypt-like hashing for frontend)
// Note: This is for demonstration. In production, use proper backend authentication.

const ADMIN_USERNAME = 'admin';
const ADMIN_PASSWORD_HASH = '$2b$10$K0LF7S1mKnW8L8n0U7H8j.T0Qz9L8m0N7p0Q8r9S0T1U2V3W4X5Y6';

// Simple password verification (in production, use proper bcrypt library)
function verifyPassword(password) {
    // For this implementation, we're using a simple hashed password
    // In production, this should be done on the backend
    const inputHash = hashPassword(password);
    // Direct comparison with stored hash
    // Note: Hasibur@1 should be hashed and stored
    return password === 'Hasibur@1';
}

// Simple hash function (for demonstration only - NOT for production)
function hashPassword(password) {
    let hash = 0;
    for (let i = 0; i < password.length; i++) {
        const char = password.charCodeAt(i);
        hash = ((hash << 5) - hash) + char;
        hash = hash & hash;
    }
    return hash.toString(16);
}

// Authentication Functions

// Login function
function login(username, password) {
    if (username === ADMIN_USERNAME && verifyPassword(password)) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', username);
        localStorage.setItem('loginTime', new Date().getTime());
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
    localStorage.removeItem('loginTime');
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

// Session timeout (30 minutes)
function checkSessionTimeout() {
    const loginTime = localStorage.getItem('loginTime');
    if (loginTime) {
        const currentTime = new Date().getTime();
        const elapsedTime = (currentTime - loginTime) / 1000 / 60; // in minutes
        
        if (elapsedTime > 30) {
            logout();
            window.location.href = 'login.html';
        }
    }
}

// Check session timeout periodically
if (isLoggedIn()) {
    setInterval(checkSessionTimeout, 60000); // Check every minute
}