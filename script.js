function imc() {
    const height = document.querySelector('#height');
    const weight = document.querySelector('#weight');
    const result = document.querySelector('#result');
  
    weight.style.border = 'none';
    height.style.border = 'none';
  
    if (!height.value && !weight.value) {
      let classificacao = '';
  
      weight.style.border = '1px solid red';
      height.style.border = '1px solid red';
      result.textContent = 'Por favor, preencha todos os campos.';
  
    } else if (!height.value) {
      height.style.border = '1px solid red';
      result.textContent = 'Por favor, preencha o campo de altura.';
  
    } else if (!weight.value) {
      weight.style.border = '1px solid red';
      result.textContent = 'Por favor, preencha o campo de peso.';
      
    } else {
  
      let valorIMC = (weight.value /((height.value / 100) * (height.value / 100))).toFixed(1);
  
      if (valorIMC < 18.5) {
        classificacao = 'abaixo do peso.';
      } else if (valorIMC < 25) {
        classificacao = 'com peso ideal.';
      } else if (valorIMC < 30) {
        classificacao = 'levemente acima do peso.';
      } else if (valorIMC < 35) {
        classificacao = 'com obesidade grau I.';
      } else if (valorIMC < 40) {
        classificacao = 'com obesidade grau II.';
      } else {
        classificacao = 'com obesidade grau III. Cuidado!';
      }
  
      result.textContent = `Seu IMC é ${valorIMC} e você está ${classificacao}`;
    }
  
    result = '';
  }
  
  calculate.addEventListener('click', imc);
  
  function reload() {
    window.location.reload();
  }
  
  //converter decimal para inteiro. 
  
  // function clearInputs (){
  //     const clear = document.querySelector('#clear-btn');
  //    }
  
  //    clear.addEventListener('click', ()=>{
  //     weight = '';
  //     height = '';
  // });
  