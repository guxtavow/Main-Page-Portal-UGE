$(document).ready(function () {
    $('#meuCarousel').on('slid.bs.carousel', function (e) {
        // Remove a classe "active" de todos os indicadores
        $('.carousel-indicators li').removeClass('active');

        // Obtém o índice do slide ativo e adiciona a classe "active" ao indicador correspondente
        var slideIndex = $('#meuCarousel .carousel-item.active').index();
        $('.carousel-indicators li[data-slide-to="' + slideIndex + '"]').addClass('active');
    });

  })
