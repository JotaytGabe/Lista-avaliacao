function showTips(subject) {
  const tipsDiv = document.getElementById(`tips-${subject}`);
  if (tipsDiv.style.display === "none" || tipsDiv.style.display === "") {
    tipsDiv.style.display = "block";
    tipsDiv.innerHTML = getTips(subject);
  } else {
    tipsDiv.style.display = "none";
  }
}

function getTips(subject) {
  const tips = {
    algebra: `
            <ul>
                <li>Pratique a resolução de equações.</li>
                <li>Estude as propriedades das operações.</li>
                <li>Utilize jogos e aplicativos para aprender de forma divertida.</li>
                <li>Resolva problemas do dia a dia que envolvam álgebra.</li>
            </ul>
        `,
    geometria: `
            <ul>
                <li>Desenhe figuras geométricas para entender melhor.</li>
                <li>Estude as propriedades dos ângulos e triângulos.</li>
                <li>Use softwares de geometria dinâmica para explorar conceitos.</li>
                <li>Resolva problemas práticos envolvendo áreas e perímetros.</li>
            </ul>
        `,
    calculo: `
            <ul>
                <li>Compreenda os conceitos de limite e continuidade.</li>
                <li>Pratique a diferenciação e a integração.</li>
                <li>Estude aplicações do cálculo em problemas reais.</li>
                <li>Utilize vídeos e tutoriais online para reforçar o aprendizado.</li>
            </ul>
        `,
    trigonometria: `
            <ul>
                <li>Estude as razões trigonométricas (seno, cosseno, tangente).</li>
                <li>Pratique a resolução de triângulos retângulos.</li>
                <li>Utilize a unidade circular para entender ângulos.</li>
                <li>Resolva problemas práticos que envolvam ângulos e distâncias.</li>
            </ul>
        `,
    estatistica: `
            <ul>
                <li>Aprenda a coletar e organizar dados.</li>
                <li>Estude medidas de tendência central (média, mediana, moda).</li>
                <li>Compreenda a variabilidade dos dados (desvio padrão, variância).</li>
                <li>Utilize gráficos para visualizar dados.</li>
            </ul>
        `,
    probabilidade: `
            <ul>
                <li>Entenda os conceitos básicos de probabilidade.</li>
                <li>Estude eventos independentes e dependentes.</li>
                <li>Pratique problemas de probabilidade com dados e cartas.</li>
                <li>Utilize a regra da soma e a regra do produto.</li>
            </ul>
        `,
    "matematica-financeira": `
            <ul>
                <li>Compreenda os conceitos de juros simples e compostos.</li>
                <li>Estude a diferença entre capitalização e desconto.</li>
                <li>Aprenda a calcular prestações e amortizações.</li>
                <li>Utilize planilhas para simular cenários financeiros.</li>
            </ul>
        `
  };
  return tips[subject] || "Dicas não disponíveis.";
}

function submitForm(event) {
  event.preventDefault(); // Impede o envio padrão do formulário
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;

  // Aqui você pode adicionar lógica para enviar os dados para um servidor, se necessário

  // Exibir uma resposta ao usuário
  const responseDiv = document.getElementById("formResponse");
  responseDiv.innerHTML = `<p>Obrigado, ${name}! Sua mensagem foi enviada com sucesso.</p>`;
  responseDiv.style.color = "green";

  // Limpar o formulário
  document.getElementById("contactForm").reset();
}
