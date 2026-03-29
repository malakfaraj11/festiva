function saveUser(name, email, role) {
    const user = { name, email, role };
    localStorage.setItem('festiva_user', JSON.stringify(user));
}

function getUser() {
    const user = localStorage.getItem('festiva_user');
    return user ? JSON.parse(user) : null;
}

function logout() {
    localStorage.removeItem('festiva_user');
    window.location.href = 'index.html';
}

function updateNavbar() {
    const user = getUser();
    const navbar = document.querySelector('.navbar');
    if (!navbar) return;

    let navContent = '';
    
    if (user) {
        let ownerLinks = '';
        if (user.role === 'owner') {
            ownerLinks = `<a href="owner-dashboard.html">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>
                Mes Salles
            </a>`;
        }

        navContent = `
            <a href="index.html" class="logo">Festiva<span>.</span></a>
            <div class="nav-links">
                <a href="index.html">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
                    Explorer
                </a>
                ${ownerLinks}
                <a href="messages.html" class="nav-icon" title="Messages">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg>
                    Messages
                </a>
                <div class="nav-separator"></div>
                <div class="user-profile-nav">
                    <span class="welcome-text">Bonjour, <span class="user-name-gradient">${user.name}</span></span>
                    <a href="#" onclick="logout()" class="btn-logout">
                        <span>Déconnexion</span>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path><polyline points="16 17 21 12 16 7"></polyline><line x1="21" y1="12" x2="9" y2="12"></line></svg>
                    </a>
                </div>
            </div>
        `;
    } else {
        navContent = `
            <a href="index.html" class="logo">Festiva<span>.</span></a>
            <div class="nav-links">
                <a href="index.html">Explorer</a>
                <a href="login.html">Connexion</a>
                <a href="register.html" class="btn-primary">S'inscrire</a>
            </div>
        `;
    }
    
    navbar.innerHTML = navContent;
}

document.addEventListener('DOMContentLoaded', updateNavbar);
