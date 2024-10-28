const accordionHeaders = document.querySelectorAll('.accordion-header');

accordionHeaders.forEach(header => {
    header.addEventListener('click', function() {
        const content = this.parentElement.nextElementSibling;

        // Fecha todos os outros conteúdos e reseta os botões
        document.querySelectorAll('.accordion-content').forEach(item => {
            if (item !== content) {  // Evita fechar o conteúdo atual
                item.style.display = 'none';
                item.previousElementSibling.querySelector('.accordion-header').textContent = '+';
                item.previousElementSibling.querySelector('.accordion-header').style.backgroundColor = '#B12BF0';
            }
        });

        // Alterna entre abrir e fechar o conteúdo atual
        if (content.style.display === 'block') {
            content.style.display = 'none';
            this.textContent = '+';
            this.style.backgroundColor = '#B12BF0';
        } else {
            content.style.display = 'block';
            this.textContent = '-';
            this.style.backgroundColor = 'var(--dark-purple)';
        }
    });
});
