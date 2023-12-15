
let users = [];

let UserContainer = document.getElementById('render');
let centers = ["Kolkata","Patna","Delhi","Mathura","Bhuwaneshwar","Bangalore","Mangalore","Chennai","Dehradun"];
function print(){
    UserContainer.innerHTML= "";
    
    for(let i=0; i<users.length; i++){
        let div = document.createElement('div');
        let name = document.createElement('div');
        let email = document.createElement('div');
        let center = document.createElement('div');

        div.classList.add('displayuser');
        name.innerText = users[i].name;
        email.innerText = users[i].email;
        center.innerText = users[i].center;

        UserContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(email);
        div.appendChild(center);
    }
}

function RandomExamCenter(centers){
    let numberofCenters = centers.length;
    let randomCenter = Math.floor(Math.random()*numberofCenters);
    return centers[randomCenter];
}

function addUser(){
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let center = RandomExamCenter(centers);
    
    let ifUserExist = users.filter((user)=>{
        return user.email == email.value;
    })

    let user = {
        name: name.value,
        email: email.value,
        center: center,
    }

    if(ifUserExist.length == 0){
        users.push(user);
        print();
    }
    else{
        alert('Email Already Exist');
        console.log('Email Already Exist');
    }
   
    console.log(users);
}
