function createDemo(){
    let heading = document.createElement('h1');
    heading.innerText = 'Element is created';
    heading.classList.add('title')
    let demo = document.getElementById('demo');
    demo.appendChild(heading);
}
