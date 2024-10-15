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
