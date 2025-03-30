document.addEventListener('DOMContentLoaded', function() {
    const nomes = document.querySelectorAll('.nome');

    nomes.forEach(nome => {
        nome.addEventListener('click', function() {
            const avaliacao = this.nextElementSibling; // Seleciona o próximo elemento (a avaliação)

            // Verifica se a avaliação está visível
            if (avaliacao.style.display === 'block') {
                avaliacao.classList.remove('show'); // Remove a classe para ocultar
                setTimeout(() => {
                    avaliacao.style.display = 'none'; // Oculta a avaliação após a animação
                }, 300); // Tempo deve ser igual ao tempo de transição
            } else {
                avaliacao.style.display = 'block'; // Mostra a avaliação
                setTimeout(() => {
                    avaliacao.classList.add('show'); // Adiciona a classe para mostrar com animação
                }, 10);
            }
        });
    });
});
