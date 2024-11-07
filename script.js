// Exibe um alerta de boas-vindas quando a página carrega
// window.onload = function() {
//     alert("Bem-vindo ao site Cozinha na Mão! Aqui você encontra as melhores receitas do mercado!");
// };


// Carregar mais notícias ao clicar no botão
document.getElementById("loadMoreBtn").addEventListener("click", function() {
    const newArticle = document.createElement("article");
    newArticle.classList.add("news");
    newArticle.innerHTML = `
        <h2>Nova Receita: Lasanha à Bolonhesa</h2>
        <p class="date">04 de Novembro de 2024</p>
        <p>Aprenda a fazer uma deliciosa lasanha à bolonhesa, com um molho caseiro e camadas de queijo que derretem na boca...</p>
        <a href="#">Leia mais</a>
    `;
    document.querySelector(".content").appendChild(newArticle);
    this.style.display = "none"; // Esconde o botão depois de carregar mais notícias
});

// Variáveis
const ingredienteInput = document.getElementById('ingredienteInput');
const addIngredienteBtn = document.getElementById('addIngredienteBtn');
const ingredientesLista = document.getElementById('ingredientesLista');

// Função para adicionar ingrediente
addIngredienteBtn.addEventListener('click', function () {
    const ingrediente = ingredienteInput.value.trim();
    if (ingrediente) {
        // Cria o item da lista
        const listItem = document.createElement('li');
        listItem.classList.add('ingrediente-item');
        listItem.innerHTML = `
            ${ingrediente} 
            <button class="remove-btn" style="background: none; border: none; color: red; cursor: pointer;">
                <i class="fas fa-trash-alt"></i>
            </button>
        `;

        // Adiciona o item à lista
        ingredientesLista.appendChild(listItem);

        // Limpa o campo de entrada
        ingredienteInput.value = '';

        // Adiciona evento para remover item
        const removeBtn = listItem.querySelector('.remove-btn');
        removeBtn.addEventListener('click', function () {
            listItem.remove(); // Remove o item da lista
        });
    }
});