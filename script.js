document.addEventListener('DOMContentLoaded', () => {
    const actionButton = document.getElementById('actionButton');
    const blockR = document.getElementById('blockR');
    const blockG = document.getElementById('blockG');
    const blockB = document.getElementById('blockB');
    const mainTitle = document.getElementById('mainTitle');

    // Показываем дополнительную информацию по нажатию на кнопку "Узнать больше"
    actionButton.addEventListener('click', () => {
        alert("В будущем возможности не имеют границ!");
    });

    // Реакция на нажатие клавиш
    document.addEventListener('keydown', (event) => {
        // Сначала скрываем все блоки
        blockR.classList.remove('show');
        blockG.classList.remove('show');
        blockB.classList.remove('show');
        blockR.classList.add('hide');
        blockG.classList.add('hide');
        blockB.classList.add('hide');

        switch (event.code) {
            case 'KeyR':
                blockR.classList.remove('hide');
                blockR.classList.add('show');
                mainTitle.textContent = "Искусственный интеллект меняет мир";
                break;
            case 'KeyG':
                blockG.classList.remove('hide');
                blockG.classList.add('show');
                mainTitle.textContent = "Экологичное будущее на пороге";
                break;
            case 'KeyB':
                blockB.classList.remove('hide');
                blockB.classList.add('show');
                mainTitle.textContent = "Космические исследования – наше будущее";
                break;
            case 'KeyW':
                // Возврат к стандартному заголовку
                mainTitle.textContent = "Технологии будущего";
                break;
            default:
                break;
        }
    });
});
