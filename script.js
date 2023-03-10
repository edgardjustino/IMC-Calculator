const calculate = document.querySelector('#calc-btn');
const clear = document.querySelector('#clear-btn');
const result = document.querySelector('#result');
const height = document.querySelector('#height').value;
const weight = document.querySelector('#weight').value;

// dividir o peso pela altura ao quadrado

function clearInputs (){
height = "";
weight = "";
}

function calculateImc () {
    
    height / (weight*weight);

    calculate.addEventListener('click', calculateImc);
}

clear.addEventListener('click', (clearInputs) => {
    clear.preventDefault();
    clearInputs();
});
