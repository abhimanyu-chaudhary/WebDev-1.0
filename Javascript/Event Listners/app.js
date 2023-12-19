function mouseIn(){
    console.log('Mouse is inside the card');
}
function mouseOut(){
    console.log('Mouse is outside the card')
}

function test(){
    let name = document.getElementById('name');
    document.getElementById('data').innerText = name.value;
}