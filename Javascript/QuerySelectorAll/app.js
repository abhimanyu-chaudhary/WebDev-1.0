

let foodItems = document.querySelectorAll('.card');
foodItems.forEach((item)=>{
    item.addEventListener('click', ()=> {
          console.log(item.dataset.food, item.dataset.price);
          openPopup(item.dataset.food);
          orderValue(item.dataset.price);
        })
})

function openPopup(order) {
    document.getElementById('popup-display').style.display = 'flex';
    document.getElementById('order').innerText = order + " is added in your cart";
  }

  function orderValue(price){
    if(price>100){
    //  document.getElementById('price').innerText = "Your order is of value " + price + "Delivery Free For You";
     console.log('FREE DELIVERY');
    }
    else{
    //  document.getElementById('price').innerText = "Your order is of value " + price + "Make it of 100 for FREE DELIVERY";
     console.log('PAID DELIVERY');
    }
 }



  function closePopup() {
    document.getElementById('popup-display').style.display = 'none';
  }

