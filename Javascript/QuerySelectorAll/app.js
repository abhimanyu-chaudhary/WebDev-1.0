
let foodItems = document.querySelectorAll('.card');
let menu = [];
foodItems.forEach((item)=>{
    item.addEventListener('click', ()=> {
          console.log(item.dataset.food, item.dataset.price);
          let order = (item.dataset.food);
          let price = (item.dataset.price);
          openPopup(order);
          orderValue(price);
          menu.push({foodname:order, foodprice:price});
        })   
})

function openPopup(order) {
    document.getElementById('popup-display').style.display = 'flex';
    document.getElementById('order').innerText = order + " is added in your cart";
    document.getElementById('order').style.fontWeight = 700;
  }

  
  
//   function orderValue(price){
//     if(price>100){
//      document.getElementById('price').innerText = "Your order is of value Rs." + price + ".  Enjoy Your FREE DELIVERY";
//      Number(basketvalue.push(price));
//      cartvalue();
//     }
//     else{
//      document.getElementById('price').innerText = "Your order is of value Rs." + price + ".  Make it of 100+ for FREE DELIVERY";
//      basketvalue.push(price);
//      cartvalue();
//     }
//  }

  let basketvalue = [];

  function orderValue(price){
  let numbervalue = Number(price);
  basketvalue.push(numbervalue);
  cartvalue();

  if(totalpurchaseValue>100){
   document.getElementById('price').innerText = "Your order is of value Rs." + totalpurchaseValue + ".  Enjoy Your FREE DELIVERY";
  }
  else{
   document.getElementById('price').innerText = "Your order is of value Rs." + totalpurchaseValue + ".  Make it of 100+ for FREE DELIVERY";
  }
}

  function closePopup(){
    document.getElementById('popup-display').style.display = 'none';
  }
  
  
  // Why this operation is not happening through for loop?
  // function cartvalue(){
  //   for(let i=0; i<basketvalue.length; i++){
  //     totalpurchaseValue = totalpurchaseValue + basketvalue[i]; 
  //   }  
  // }    
  let totalpurchaseValue = 0;
  function cartvalue(){
      totalpurchaseValue = basketvalue.reduce(function (add, totalpurchaseValue){
          return add + totalpurchaseValue;
      })
  } 

  //Why this way is not working to store values in object;
  // function foodMenu(){
  //   let fooddata = {
  //     foodname: order.value,
  //     foodprice: price.value,
  //   }
  // }
  // menu.push(fooddata);
  
  
  console.log(menu);

  function place(){
      document.getElementById('slider').style.display = '';
  }
  
