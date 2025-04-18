const display = document.getElementById("display");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error";
    }
}

window.addEventListener('load', () => {
    const gif = document.getElementById('cat-gif');
    const calculator = document.getElementById('calculator');

    if (gif && calculator) {
        setTimeout(() => { 
            gif.classList.add('fade-out');  
        }, 3000); 

     
        gif.addEventListener('transitionend', () => {
            gif.style.display = 'none';  
            calculator.style.display = 'block';  
            calculator.classList.add('show');
        });
    }
});