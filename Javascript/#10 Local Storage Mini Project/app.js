// localStorage.setItem('theme','dark');

// localStorage.setItem('ticketprice','4999');

let price = localStorage.getItem('ticketprice');
document.getElementById('price').innerText = price;

function increasePrice(){
    setTimeout(()=>{
        localStorage.setItem('ticketprice','5499');
        let price = localStorage.getItem('ticketprice');
        document.getElementById('price').innerText = price;
    },4000)
}

let themeBTN = document.getElementById('theme');
let body = document.querySelector('body');
let container = document.querySelector('.container');
// let ticketPrice = document.getElementById('price');

updateTheme();
function updateTheme(){
    let theme = localStorage.getItem('theme');
    if(theme == 'light'){
        document.getElementById('theme').innerHTML = '<i class="bi bi-sun"></i>';
        themeBTN.style.color = 'black';
        body.style.backgroundColor = 'white';
        container.style.color = 'black';
        container.style.borderColor = 'grey';
        // ticketPrice.style.color = 'black';
    }
    else{
        document.getElementById('theme').innerHTML = '<i class="bi bi-moon-stars">';
        themeBTN.style.color = 'white';
        body.style.backgroundColor = 'grey';
        container.style.color = 'white';
        container.style.borderColor = '#f7eeed';
        // ticketPrice.style.color = 'white';
    }
}


function changeTheme(){
    let theme = localStorage.getItem('theme');
    if(theme == 'light'){
        localStorage.setItem('theme','dark');
        updateTheme();
    }
    else{
        localStorage.setItem('theme','light');
        updateTheme();
    }
}

