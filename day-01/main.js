let button = document.querySelector('#counter');
button.addEventListener('click', ()=> {
    let count = parseInt(button.textContent);
    count++;
    button.textContent = count;
});

let mode = document.querySelector('#mode');

mode.addEventListener('click',()=>{
    let background = document.body.style.background;
    background = "black";
});