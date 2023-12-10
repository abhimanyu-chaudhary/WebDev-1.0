// function createDemo(){
//     let heading = document.createElement('h1');
//     heading.innerText = 'Element is created';
//     heading.classList.add('title')
//     let demo = document.getElementById('demo');
//     demo.appendChild(heading);
// }


// for( let i=0; i<5; i++ ){
//     console.log(i)
// }

// function is used to operate any kinds of function| add, sub, multiply etc

// function add(a,b){
//     console.log(a+b);
// }

// add(2,3);

// function feedback(){
//     console.log('Feeback function is called');
// }

// feedback()
// feedback()


// function grabber(){
//     let grabTitle = document.getElementById('title');
//     let output = grabTitle.value;
//     console.log(output);
// }

// grabber()

// function output(){
//     let nameInput = document.getElementById('name');
//     console.log(nameInput.value);
//     let headerInput = document.getElementById('header');
//     headerInput.innerText = "Thanks " + nameInput.value;
// }


// function createDemo(){
//     let heading = document.createElement('h1');
//     heading.innerText = "Create Element is Working";

//     let print = document.getElementById('print');
//     print.appendChild(heading)

//     heading.classList.add('title');
// }


let users = [];

let UserContainer = document.getElementById('printuser');
function render(){
    UserContainer.innerHTML = "";
    for(let i=0; i<users.length; i++){
        let div = document.createElement('div');
        let name = document.createElement('div');
        let age = document.createElement('div');

        div.classList.add('displayuser');
        name.innerText = users[i].name;
        age.innerText = users[i].age;

        UserContainer.appendChild(div);
        div.appendChild(name);
        div.appendChild(age);

    }
    

    



    let printUsername = document.getElementById('printusername');
    printUsername.appendChild(username);

    let printUserage = document.getElementById('printuserage')
    printUserage.appendChild(userage);


}

function process(){
    let nameInput = document.getElementById('name');
    let ageInput = document.getElementById('age');

    let user = {
        name: nameInput.value,
        age: Number(ageInput.value),
    }

    if(user.age>=18 && user.age<=24){
        users.push(user);
        render()
    }
    else{
        alert('You are not eligible');
    }

    
       
}




