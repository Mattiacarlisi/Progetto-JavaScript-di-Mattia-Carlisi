document.addEventListener('DOMContentLoaded', () => {
    // Gestione del tema giorno/notte
    let backgroundColorBtn = document.querySelector('#changeColorBtn'); 

    backgroundColorBtn.addEventListener('click', function() {
        if (document.body.style.backgroundColor === 'white') {  
            document.body.style.backgroundColor = 'black'; 
            document.querySelector('#imageBtn').src = 'Assets/icon/sole.png';
            document.querySelector('h1').style.color = '#FFFF00';
            document.querySelector('.piu-btn').style.backgroundColor = '#00FF00';
            document.querySelector('.meno-btn').style.backgroundColor = '#00FF00';
            document.querySelector('#resetBtn').style.backgroundColor = '#00FF00';
            document.querySelector('#totale').style.color = 'yellow';     
        } else {
            document.body.style.backgroundColor = 'white';  
            document.querySelector('#imageBtn').src = 'Assets/icon/luna.png';
            document.querySelector('h1').style.color = 'black';
            document.querySelector('.piu-btn').style.backgroundColor = '#F1C40F';
            document.querySelector('.meno-btn').style.backgroundColor = '#F1C40F';
            document.querySelector('#resetBtn').style.backgroundColor = '#F1C40F';
            document.querySelector('#totale').style.color = 'black'; 
        }
    });

    // Funzionamento counter
    let counterContainer = document.querySelector('#counterContainer');

    const piuBtn = document.createElement('button');
    piuBtn.textContent = '+';
    piuBtn.classList.add('piu-btn');
    piuBtn.dataset.action = 'increment';

    const menoBtn = document.createElement('button');
    menoBtn.textContent = '-';
    menoBtn.classList.add('meno-btn');
    menoBtn.dataset.action = 'decrement';

    const display = document.createElement('p');
    display.id = 'totale';
    display.classList.add('totale');

    let savedValue = localStorage.getItem('counterValue') || '0';
    display.textContent = savedValue;

    counterContainer.appendChild(menoBtn);
    counterContainer.appendChild(display);
    counterContainer.appendChild(piuBtn);

    const resetBtn = document.querySelector('#resetBtn');

    const updateDisplay = (increment) => {
        let currentValue = parseInt(display.textContent);
        currentValue += increment;
        display.textContent = currentValue;

        localStorage.setItem('counterValue', currentValue);
    };

    const resetDisplay = () => {
        display.textContent = '0';
        localStorage.setItem('counterValue', '0');
    };

    counterContainer.addEventListener('click', (e) => {
        const action = e.target.dataset.action;
        if (action === 'increment') {
            updateDisplay(1);
        } else if (action === 'decrement') {
            updateDisplay(-1);
        }
    });

    resetBtn.addEventListener('click', resetDisplay);
});
