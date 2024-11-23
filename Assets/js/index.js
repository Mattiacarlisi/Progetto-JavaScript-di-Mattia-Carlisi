document.addEventListener('DOMContentLoaded', () => {
    // Funzione per creare elementi dinamicamente
    const createElement = (tag, options = {}) => {
        const { className = '', innerHTML = '', attributes = {} } = options;
        const element = document.createElement(tag);
        if (className) element.className = className;
        if (innerHTML) element.innerHTML = innerHTML;
        Object.entries(attributes).forEach(([key, value]) => element.setAttribute(key, value));
        return element;
    };

    // Lista delle immagini
    const imageList = [
        'Assets/img/meme1.jpg',
        'Assets/img/meme2.jpg',
        'Assets/img/meme3.jpg',
        'Assets/img/meme4.jpg',
        'Assets/img/meme5.jpg',
        'Assets/img/meme6.jpg',
    ];

    let currentImageIndex = 0; // Indice dell'immagine corrente

    // Funzione per aggiornare l'immagine
    const updateImage = () => {
        document.querySelector('#memeImg').src = imageList[currentImageIndex];
    };

    // Funzione per aggiornare il display del contatore
    const updateDisplay = (increment) => {
        let currentValue = parseInt(display.textContent, 10);

        // Aggiorna il valore del contatore
        currentValue = increment === null ? 0 : currentValue + increment;
        display.textContent = currentValue;

        // Aggiorna l'indice dell'immagine ciclicamente
        if (increment !== null) {
            currentImageIndex = (currentImageIndex + (increment > 0 ? 1 : -1) + imageList.length) % imageList.length;
        }

        // Aggiorna l'immagine
        updateImage();

        // Salva nel localStorage
        localStorage.setItem('counterValue', currentValue);
        localStorage.setItem('imageIndex', currentImageIndex);
    };

    // Cambio colore dello sfondo e stile
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

    // Inizializzazione degli elementi del contatore
    const counterContainer = document.querySelector('#counterContainer');
    const savedValue = localStorage.getItem('counterValue') || '0';
    currentImageIndex = parseInt(localStorage.getItem('imageIndex'), 10) || 0;

    const menoBtn = createElement('button', {
        className: 'meno-btn',
        innerHTML: '-',
        attributes: { 'data-action': 'decrement' },
    });

    const display = createElement('p', {
        className: 'totale',
        innerHTML: savedValue,
        attributes: { id: 'totale' },
    });

    const piuBtn = createElement('button', {
        className: 'piu-btn',
        innerHTML: '+',
        attributes: { 'data-action': 'increment' },
    });

    const resetBtn = document.querySelector('#resetBtn'); // Reset già presente nel DOM

    counterContainer.append(menoBtn, display, piuBtn);

    // Listener unico per tutti i pulsanti
    document.body.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (action === 'increment') updateDisplay(1);
        else if (action === 'decrement') updateDisplay(-1);
        else if (e.target === resetBtn) updateDisplay(null);
        else if (e.target.id === 'changeColorBtn' || e.target.id === 'imageBtn') toggleTheme();
    });

    // Aggiorna immagine iniziale in base al valore salvato
    updateImage();
});
