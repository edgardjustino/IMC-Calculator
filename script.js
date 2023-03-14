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