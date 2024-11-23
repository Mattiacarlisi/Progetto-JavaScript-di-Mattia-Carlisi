document.addEventListener('DOMContentLoaded', () => {
    // Funzione per creare elementi dinamicamente
    const createElement = (tag, { className = '', innerHTML = '', attributes = {} } = {}) => {
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        return element;
    };


    const imageList = [
        'Assets/img/meme1.jpg',
        'Assets/img/meme2.jpg',
        'Assets/img/meme3.jpg',
        'Assets/img/meme4.jpg',
        'Assets/img/meme5.jpg',
        'Assets/img/meme6.jpg',
    ];
    let currentImageIndex = parseInt(localStorage.getItem('imageIndex')) || 0;
    let counterValue = parseInt(localStorage.getItem('counterValue')) || 0;


    const counterContainer = document.querySelector('#counterContainer');
    const display = createElement('p', { className: 'totale', innerHTML: counterValue, attributes: { id: 'totale' } });
    counterContainer.append(
        createElement('button', { className: 'meno-btn', innerHTML: '-', attributes: { 'data-action': 'decrement' } }),
        display,
        createElement('button', { className: 'piu-btn', innerHTML: '+', attributes: { 'data-action': 'increment' } })
    );

    const updateState = (increment) => {
        counterValue = increment === null ? 0 : counterValue + increment;
        currentImageIndex = (currentImageIndex + (increment || 0) + imageList.length) % imageList.length;
        display.textContent = counterValue;
        document.querySelector('#memeImg').src = imageList[currentImageIndex];
        localStorage.setItem('counterValue', counterValue);
        localStorage.setItem('imageIndex', currentImageIndex);
    };

    // Cambio tema
    const toggleTheme = () => {
        const isDay = document.body.style.backgroundColor === 'white';
        document.body.style.backgroundColor = isDay ? 'black' : 'white';
        document.querySelector('#imageBtn').src = isDay ? 'Assets/icon/sole.png' : 'Assets/icon/luna.png';
        document.querySelector('h1').style.color = isDay ? '#FFFF00' : 'black';
        document.querySelectorAll('.piu-btn, .meno-btn, #resetBtn').forEach(btn => {
            btn.style.backgroundColor = isDay ? '#00FF00' : '#F1C40F';
        });
        document.querySelector('#totale').style.color = isDay ? 'yellow' : 'black';
    };

    document.body.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (action === 'increment') updateState(1);
        else if (action === 'decrement') updateState(-1);
        else if (e.target.id === 'resetBtn') updateState(null);
        else if (e.target.id === 'changeColorBtn' || e.target.id === 'imageBtn') toggleTheme();
    });
});
