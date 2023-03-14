const height = document.querySelector('#height')*(100).value;
const weight = document.querySelector('#weight').value;
const clear = document.querySelector('#clear-btn');
const calculate = document.querySelector('#calc-btn');
const result = document.querySelector('#result');

function imc () {
    
    if (weight !== '' && height !== ''){
    
        const valorIMC = (weight / (height * height)).toFixed(1);

        let classificacao = '';

        if (valorIMC <18.5){
            classificacao = 'abaixo do peso';
        } else if (valorIMC <25) {
            classificacao = 'com peso ideal! Parabéns!';
        } else if (valorIMC<30){
            classificacao = 'levemente acima do peso';
        } else if ( valorIMC < 35) {
            classificacao = 'com obesidade grau I.';
        } else if (valorIMC < 40) {
            classificacao = 'com obesidade grau II';
        } else {
            classificacao = 'com obesidade grau III. Cuidado!';
        }

        result.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
    } else {
        result.textContent = 'Por favor, preencha todos os campos.';
    }
}

calculate.addEventListener('click', imc);





// // const calculate = document.querySelector('#calc-btn');
// const clear = document.querySelector('#clear-btn');
// const result = document.querySelector('#result');
// const height = (document.querySelector('#height').value)/100;
// const weight = document.querySelector('#weight').value;

// // dividir o peso pela altura ao quadrado

// function clearInputs (){
//     clear.addEventListener('click', ()=>{
//         height = '';
//         weight = '';
//     } )
// };

// function calculateImc () {
//     // const height = document.querySelector('#height').value;
//     // const weight = document.querySelector('#weight').value;

//     const  imc = weight / (height * height);
//     const text = '';

//     if (imc < 18.5){
//         result.innerHTML = `Seu IMC é ${imc} e você está abaixo do peso ideal`
//     } else if (imc < 24.9){
//         result.innerHTML = `Seu IMC é ${imc} e você está com o peso ideal`
//     } else if (imc<29.9){
//         result.innerHTML = `Seu IMC é ${imc} e você está com sobrepeso`
//     } else if (imc < 39.9){
//         result.innerHTML = `Seu IMC é ${imc} e você está abaixo do peso ideal`
//     } else if ( imc > 39.9){
//         result.innerHTML = `Seu IMC é ${imc} e você está com obesidade mórbida`
//     }
    
// };

// // fist attempt
//     clearInputs();
