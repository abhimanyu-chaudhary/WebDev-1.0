let count = 0;

function mouseIn(){
     count = count + 1;
     console.log(count);  
     if(count>3 && count<=5){
        document.getElementById('hotel-price').innerText = 'Rs.1500';
     }
     else if(count>5){
        document.getElementById('hotel-price').innerText = 'Not Available';
     } 
     else{
        document.getElementById('hotel-price').innerText = 'Rs.1000';
     }
}

