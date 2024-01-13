
let product = document.getElementById('menu')

function drop(){
    if(product.style.display == 'none'){
        product.style.display = 'block';
    }
    else{
        product.style.display = 'none';
    }    
}

let showcase = document.getElementById('modal');
let body = document.querySelector('body');

function press(){
    if(showcase.style.display == 'none'){
        // body.style.filter = 'blur(2px)';
        // showcase.style.filter = 'blur(-2px)';

        showcase.style.display = 'block';
    }
    else{
        showcase.style.display = 'none';
    }
}
