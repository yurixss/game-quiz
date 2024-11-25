//evento de submit
document.getElementById('form').addEventListener('submit', function (event) {

    //evita recarregar
    event.preventDefault();

    //objeto com respostas corretas de cada pergunta
    const respostasCorretas = {
      pergunta1: "Pirarucu",
      pergunta2: "Cichla",
      pergunta3: "amanhecer",
      pergunta4: "dourada",
    };
  
    // variavel pontuacao
    let score = 0;
  
    //verifica se a resposta é correta ou errada
    Object.keys(respostasCorretas).forEach(pergunta => {
      const selected = document.querySelector(`input[name="${pergunta}"]:checked`);
      if (selected && selected.value === respostasCorretas[pergunta]) {
        score++;
      }
    });
  
    // textos de resultado
    const resultSection = document.getElementById('result');
    const resultScore = document.getElementById('score');
    const resultFeedbackMensagem = document.getElementById('feedback');
  
    resultScore.textContent = `Você acertou ${score} de ${Object.keys(respostasCorretas).length} perguntas.`;
  
    if (score === Object.keys(respostasCorretas).length) {
        resultFeedbackMensagem.textContent = "Parabéns, voce gabaritou!";
    } else if (score >= Object.keys(respostasCorretas).length / 2) {
        resultFeedbackMensagem.textContent = "Bom trabalho! Quase lá!";
    } else {
        resultFeedbackMensagem.textContent = "Tente novamente!";
    }
  
    resultSection.style.display = 'block';
    
  });
  