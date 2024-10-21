// schermo giorno notte

let backgroundColorBtn = document.querySelector('#changeColorBtn'); 

backgroundColorBtn.addEventListener('click', function() {
    if (document.body.style.backgroundColor === 'white') {  
        document.body.style.backgroundColor = 'black'; 
        document.querySelector('#imageBtn').src = 'Assets/icon/sole.png'
        document.querySelector('h1').style.color = '#FFFF00';
        document.querySelector('#piùBtn').style.backgroundColor = '#00FF00';
        document.querySelector('#menoBtn').style.backgroundColor = '#00FF00';
        document.querySelector('#resetBtn').style.backgroundColor = '#00FF00';
        document.querySelector('#totale').style.color = '#FFFF00';
        
    } else {
        document.body.style.backgroundColor = 'white';  
        document.querySelector('#imageBtn').src = 'Assets/icon/luna.png'
        document.querySelector('h1').style.color = 'black';
        document.querySelector('#piùBtn').style.backgroundColor = '#F1C40F';
        document.querySelector('#menoBtn').style.backgroundColor = '#F1C40F';
        document.querySelector('#resetBtn').style.backgroundColor = '#F1C40F';
        document.querySelector('#totale').style.color = 'black';
        
    }
});

// Creazione dinamica dei pulsanti e del display del contatore
const counterContainer = document.querySelector('#counterContainer');

// Creiamo il pulsante +
const piùBtn = document.createElement('button');
piùBtn.textContent = '+';
piùBtn.classList.add('più-btn');

// Creiamo il display del counter
const display = document.createElement('p');
display.classList.add('totale');

// Creiamo il pulsante -
const menoBtn = document.createElement('button');
menoBtn.textContent = '-';
menoBtn.classList.add('meno-btn');

// Aggiungiamo gli elementi creati al container
counterContainer.appendChild(menoBtn);
counterContainer.appendChild(display);
counterContainer.appendChild(piúBtn);

// Gestione del counter
const immagini = [
    'Assets/img/meme2.jpg',
    'Assets/img/meme3.jpg',
    'Assets/img/meme4.jpg',
    'Assets/img/meme5.jpg',
    'Assets/img/meme6.jpg',
    'Assets/img/meme1.jpg',
];

let total = localStorage.getItem('total') ? parseInt(localStorage.getItem('total')) : 0;
let currentIndex = 0;
let memeImg = document.querySelector('#memeImg');

// Visualizziamo il valore iniziale
display.textContent = total;

// Eventi per incrementare e decrementare il counter
piùBtn.addEventListener('click', function() {
    total++;
    display.textContent = total;
    localStorage.setItem('total', total);

    // Cambiamo l'immagine del meme
    memeImg.src = immagini[currentIndex];
    currentIndex = (currentIndex + 1) % immagini.length;
});

menoBtn.addEventListener('click', function() {
    total--;
    display.textContent = total;
    localStorage.setItem('total', total);

    // Cambiamo l'immagine del meme
    memeImg.src = immagini[currentIndex];
    currentIndex = (currentIndex + 1) % immagini.length;
});

// Reset del counter
let resetBtn = document.querySelector('#resetBtn');
resetBtn.addEventListener('click', function() {
    total = 0;
    display.textContent = total;
    localStorage.setItem('total', total);
    memeImg.src = 'Assets/img/meme1.jpg';
    currentIndex = 0;
});