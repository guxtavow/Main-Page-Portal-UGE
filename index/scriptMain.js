$(document).ready(function () { //Inicio o processo para rolagem do carrossel
    $('#meuCarousel').on('slid.bs.carousel', function (e) {//trago a id do html e defino uma função de troca de indicadores
        // Remove a classe "active" de todos os indicadores
        $('.container').removeClass('active');

        // Obtém o índice do slide ativo e adiciona a classe "active" ao indicador correspondente
        var slideIndex = $('#meuCarousel .carousel-item.active').index();
        $('.container[data-slide-to="' + slideIndex + '"]').addClass('active');
    });

  })
