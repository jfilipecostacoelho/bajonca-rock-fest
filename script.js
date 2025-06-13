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

