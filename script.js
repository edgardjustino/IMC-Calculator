// const calculate = document.querySelector('#calc-btn');
const clear = document.querySelector('#clear-btn');
const result = document.querySelector('#result');
const height = (document.querySelector('#height').value)/100;
const weight = document.querySelector('#weight').value;

// dividir o peso pela altura ao quadrado

function clearInputs (){
    clear.addEventListener('click', ()=>{
        height = '';
        weight = '';
    } )
};

function calculateImc () {
    // const height = document.querySelector('#height').value;
    // const weight = document.querySelector('#weight').value;

    const  imc = weight / (height * height);
    const text = '';

    if (imc < 18.5){
        result.innerHTML = `Seu IMC é ${imc} e você está abaixo do peso ideal`
    } else if (imc < 24.9){
        result.innerHTML = `Seu IMC é ${imc} e você está com o peso ideal`
    } else if (imc<29.9){
        result.innerHTML = `Seu IMC é ${imc} e você está com sobrepeso`
    } else if (imc < 39.9){
        result.innerHTML = `Seu IMC é ${imc} e você está abaixo do peso ideal`
    } else if ( imc > 39.9){
        result.innerHTML = `Seu IMC é ${imc} e você está com obesidade mórbida`
    }
    
};

// fist attempt
    clearInputs();
