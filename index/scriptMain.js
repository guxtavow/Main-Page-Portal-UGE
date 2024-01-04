document.addEventListener("DOMContentLoaded", function () {
    abrirMenu() //abrir canvas automatico
    var botaoAbrir = document.getElementById("abrir"); //pegar elemento do botão de abertura do canvas
    var botaoFechar = document.getElementById("fechar"); //pegar elemento do botão de fechar do canvas


    botaoAbrir.addEventListener("click", function(){ //adiciona um evento que ao clicar o botão: ABRE o canvas
        menu.style.marginLeft = '-2px';
    })
    botaoFechar.addEventListener("click", function(){ //adiciona um evento que ao clicar o botão: FECHA o canvas
        menu.style.marginLeft = '-310px';
      })
});


var menu = document.getElementById("menu") //pego o elemento "menu" no HTML

function abrirMenu(){ //transformo em uma função para que o OffCanvas apareça automaticamente toda vez que a pagina for aberta
    menu.style.marginLeft = '-2px'
}

