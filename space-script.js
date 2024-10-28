document.addEventListener('DOMContentLoaded', () => {
    const starfield = document.getElementById('starfield');
    const spaceship = document.getElementById('spaceship');
    const launchButton = document.getElementById('launchButton');

    // Анимация звезд на фоне
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX / window.innerWidth * 50;
        const y = event.clientY / window.innerHeight * 50;
        starfield.style.backgroundPosition = `${x}px ${y}px`;
    });

    // Запуск корабля при нажатии на кнопку
    launchButton.addEventListener('click', () => {
        spaceship.style.animation = 'launch 5s forwards';
    });

    // Корабль взлетает по нажатию на стрелки вверх
    document.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowUp') {
            spaceship.style.animation = 'launch 5s forwards';
        }
    });
});
