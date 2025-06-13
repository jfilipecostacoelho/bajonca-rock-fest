// MENU

const btn = document.getElementById('menu-btn');
const menu = document.getElementById('mobile-menu');

btn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
    menu.classList.add('hidden');
    });
});

// NAVIGATION
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', async (e) => {
        e.preventDefault();
        const res = await fetch(link.getAttribute('href'));
        const html = await res.text();
        document.getElementById('content').innerHTML = html;
    });
});