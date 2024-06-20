document.addEventListener('DOMContentLoaded', () => {
    console.log("JavaScript Loaded");

    // Load content based on the current page
    const page = document.body.getAttribute('data-page');
    switch (page) {
        case 'home':
            loadHomePage();
            break;
        case 'browse':
            loadBrowsePage();
            break;
        case 'artist':
            loadArtistPage();
            break;
        case 'playlist':
            loadPlaylistPage();
            break;
        case 'settings':
            loadSettingsPage();
            break;
        default:
            console.error('Unknown page: ' + page);
    }

    // Event listeners for forms and buttons
    document.querySelector('#settingsForm')?.addEventListener('submit', saveSettings);

    // Load settings from local storage
    loadSettingsFromLocalStorage();
});

function loadHomePage() {
    const content = document.querySelector('.content');
    content.innerHTML += '<p>Home Page Content Loaded Dynamically.</p>';
}

function loadBrowsePage() {
    const content = document.querySelector('.content');
    content.innerHTML += '<p>Browse Page Content Loaded Dynamically.</p>';
}

function loadArtistPage() {
    const content = document.querySelector('.content');
    content.innerHTML += '<p>Artist Page Content Loaded Dynamically.</p>';
}

function loadPlaylistPage() {
    const content = document.querySelector('.content');
    content.innerHTML += '<p>Playlist Page Content Loaded Dynamically.</p>';
}

function loadSettingsPage() {
    const content = document.querySelector('.content');
    content.innerHTML += '<p>Settings Page Content Loaded Dynamically.</p>';
}

function saveSettings(event) {
    event.preventDefault();
    const theme = document.querySelector('#theme').value;

    // Save settings to local storage
    localStorage.setItem('theme', theme);

    // Apply theme
    applyTheme(theme);

    // Display a message to the user
    alert('Settings saved successfully!');
}

function loadSettingsFromLocalStorage() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.querySelector('#theme').value = theme;
        applyTheme(theme);
    }
}

function applyTheme(theme) {
    if (theme === 'light') {
        document.body.style.backgroundColor = '#ffffff';
        document.body.style.color = '#000000';
        document.querySelector('.navbar').style.backgroundColor = '#f1f1f1';
        document.querySelector('.sidebar').style.backgroundColor = '#f1f1f1';
        document.querySelectorAll('.sidebar a').forEach(a => {
            a.style.color = '#000000';
        });
        document.querySelector('.navbar h1').style.color = '#000000';
    } else {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
        document.querySelector('.navbar').style.backgroundColor = '#1f1f1f';
        document.querySelector('.sidebar').style.backgroundColor = '#1f1f1f';
        document.querySelectorAll('.sidebar a').forEach(a => {
            a.style.color = '#ffffff';
        });
        document.querySelector('.navbar h1').style.color = '#ffffff';
    }
}
