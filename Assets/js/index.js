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

// funzionamento bottoni

const immagini = [
    'Assets/img/meme2.jpg',
    'Assets/img/meme3.jpg',
    'Assets/img/meme4.jpg',
    'Assets/img/meme5.jpg',
    'Assets/img/meme6.jpg',
    'Assets/img/meme1.jpg',
];

let piùBtn = document.querySelector('#piùBtn');
let menoBtn = document.querySelector('#menoBtn');
let risultato = document.querySelector('#totale');
let resetBtn = document.querySelector('#resetBtn');
let memeImg = document.querySelector('#memeImg');
let currentIndex = 0; 


let total;

if (localStorage.getItem('total')) {
    total = parseInt(localStorage.getItem('total'));  // Se esiste, converte la stringa in numero
} else {
    total = 0;  
}


risultato.textContent = total;


piùBtn.addEventListener('click', function() {
    total++;
    risultato.textContent = total;
    
    localStorage.setItem('total', total);
    
    memeImg.src = immagini[currentIndex];
    currentIndex = (currentIndex + 1) % immagini.length; 
});


menoBtn.addEventListener('click', function() {
    total--;
    risultato.textContent = total;

    localStorage.setItem('total', total);
    
    memeImg.src = immagini[currentIndex];
    currentIndex = (currentIndex + 1) % immagini.length;
});

resetBtn.addEventListener('click', function() {
    total = 0;
    risultato.textContent = total;

    localStorage.setItem('total', total);
  
    memeImg.src = 'Assets/img/meme1.jpg'; 
    currentIndex = 0; 
});
