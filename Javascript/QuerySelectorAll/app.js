

let foodItems = document.querySelectorAll('.card');
foodItems.forEach((item)=>{
    item.addEventListener('click', (e)=> {
            console.log(item.dataset.food, item.dataset.price);
            openPopup();
            })
})

function openPopup() {
    document.getElementById('popup-display').style.display = 'flex';
  }

  function closePopup() {
    document.getElementById('popup-display').style.display = 'none';
  }