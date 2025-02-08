const avanca = document.querySelectorAll('.btn-proximo');
const senhaCorreta = "euteamo"; // Defina a senha correta aqui

// Função para avançar entre as telas
avanca.forEach(button => {
    button.addEventListener('click', function () {
        const atual = document.querySelector('.ativo');
        const proximoPasso = document.getElementById('passo-' + this.getAttribute('data-proximo'));

        atual.style.opacity = "0"; 
        setTimeout(() => {
            atual.classList.remove('ativo');
            proximoPasso.classList.add('ativo');
            setTimeout(() => proximoPasso.style.opacity = "1", 10);
        }, 400); // Tempo da transição
    });
});

// Função para verificar a senha
function verificarSenha() {
    const senhaInserida = document.getElementById('senha').value;
    const dica = document.getElementById('dica');

    if (senhaInserida === senhaCorreta) {
        // Senha correta: vai para a tela de sucesso
        const atual = document.querySelector('.ativo');
        atual.classList.remove('ativo');
        document.getElementById('passo-3').classList.add('ativo');
    } else {
        // Senha incorreta: mostra a dica
        dica.classList.remove('dica-escondida');
    }
}

// Transição do modal (garantia de funcionamento correto)
const imagens = document.querySelectorAll('.galeria-img');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const fecharModal = document.querySelector('.fechar-modal');

imagens.forEach(img => {
    img.addEventListener('click', () => {
        modal.style.display = 'flex';
        setTimeout(() => modal.classList.add('mostrar'), 10);
        modalImg.src = img.src;
    });
});

window.addEventListener('click', (event) => {
    if (event.target === modal || event.target.classList.contains('fechar-modal')) {
        modal.classList.remove('mostrar');
        setTimeout(() => modal.style.display = 'none', 500);
    }
});

document.addEventListener("DOMContentLoaded", function () {
    const numEstrelas = 100; // Quantidade de estrelas
    const container = document.createElement("div");
    container.classList.add("estrelas");
    document.body.appendChild(container);

    for (let i = 0; i < numEstrelas; i++) {
        let estrela = document.createElement("div");
        estrela.classList.add("estrela");
        let tamanho = Math.random() * 5 + 1; // Tamanhos variados entre 1px e 3px
        estrela.style.width = `${tamanho}px`;
        estrela.style.height = `${tamanho}px`;
        estrela.style.left = `${Math.random() * 100}vw`;
        estrela.style.top = `${Math.random() * 100}vh`;
        estrela.style.animationDuration = `${Math.random() * 3 + 2}s`; // Duração entre 2s e 5s
        estrela.style.animationDelay = `${Math.random() * 5}s`; // Atraso para efeito natural

        container.appendChild(estrela);
    }
});