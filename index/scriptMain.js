document.addEventListener("DOMContentLoaded", function () {
    abrirMenu() //abrir canvas automatico

    var botaoAbrir = document.getElementById("abrir"); //pegar elemento do botão de abertura do canvas
    var botaoFechar = document.getElementById("fechar"); //pegar elemento do botão de fechar do canvas

    botaoAbrir.addEventListener("click", function(){ //adiciona um evento que ao clicar o botão: ABRE o canvas
        menu.style.marginLeft = '-2px';
    })
    botaoFechar.addEventListener("click", function(){ //adiciona um evento que ao clicar o botão: FECHA o canvas
        menu.style.marginLeft = '-510px';
    })

    verificarStatus()

});

$(document).ready(function () { //Inicio o processo para rolagem do carrossel

    $('#meuCarousel').on('slid.bs.carousel', function (e) {//trago a id do html e defino uma função de troca de indicadores
        // Remove a classe "active" de todos os indicadores
        $('.container').removeClass('active');

        // Obtém o índice do slide ativo e adiciona a classe "active" ao indicador correspondente
        var slideIndex = $('#meuCarousel .carousel-item.active').index();
        $('.container[data-slide-to="' + slideIndex + '"]').addClass('active');
    })    

});

// Seleciona o elemento container
var cont = $(".container[data-slide-to='2']")[0]
var triangulo = document.getElementById('triangulo')
var oculto1 = $(".container[data-slide-to='3']")
var oculto2 = $(".container[data-slide-to='4']")
var escondidos = document.getElementById("ocultos")


// Função para verificar e atualizar o conteúdo do 'triangulo'
function verificarStatus() {
  if (cont.classList.contains('active') || oculto1.hasClass('active') || oculto2.hasClass('active')) {
    triangulo.innerHTML = '<i class="bi bi-caret-down-fill"></i>';
    escondidos.style.transform = "translateY(0)"
    escondidos.style.display = "block"
  }else{
    triangulo.innerHTML = '<i class="bi bi-caret-up-fill"></i>';
    escondidos.style.transform = "translateY(-100%)"
    escondidos.style.display = "none"
  }
}


// Configura o MutationObserver para observar mudanças na classe 'active'
var observer = new MutationObserver(function(mutations) {
  mutations.forEach(function(mutation) {
    verificarStatus();
  });
});

// Configura as opções do MutationObserver
var config = { attributes: true };

// Inicia a observação do elemento 'container'
observer.observe(cont, config);


var menu = document.getElementById("menu") //pego o elemento "menu" no HTML

function abrirMenu(){ //transformo em uma função para que o OffCanvas apareça automaticamente toda vez que a pagina for aberta
    menu.style.marginLeft = '-2px'
}

