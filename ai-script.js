document.addEventListener('DOMContentLoaded', () => {
    const aiImage = document.getElementById('ai-image');

    // Анимация изображения при движении мыши
    document.addEventListener('mousemove', (event) => {
        const x = event.clientX / window.innerWidth * 100;
        const y = event.clientY / window.innerHeight * 100;
        aiImage.style.transform = `translate(-${x}%, -${y}%)`;
    });

    // Реакция на клавиши
    document.addEventListener('keydown', (event) => {
        if (event.code === 'KeyS') {
            alert('ИИ становится умнее с каждой секундой!');
        }
    });
});
