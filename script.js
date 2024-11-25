document.getElementById('form').addEventListener('submit', function (event) {
    event.preventDefault();
  

    //objeto com respostas corretas de cada pergunta
    const respostasCorretas = {
      pergunta1: "Pirarucu",
      pergunta2: "Cichla",
      pergunta3: "amanhecer",
      pergunta4: "dourada",
    };
  
    // pontuacao
    let score = 0;
  
    //
    Object.keys(respostasCorretas).forEach(question => {
      const selected = document.querySelector(`input[name="${question}"]:checked`);
      if (selected && selected.value === respostasCorretas[question]) {
        score++;
      }
    });
  
    //
    const resultSection = document.getElementById('result');
    const resultScore = document.getElementById('score');
    const resultFeedbackMensagem = document.getElementById('feedback');
  
    //
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
  