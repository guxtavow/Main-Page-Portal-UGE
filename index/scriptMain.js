$(".container[data-slide-to='5'], .container[data-slide-to='6']").hide();

$(document).ready(function () { //Inicio o processo para rolagem do carrossel

    $('#meuCarousel').on('slid.bs.carousel', function (e) {//trago a id do html e defino uma função de troca de indicadores
        // Remove a classe "active" de todos os indicadores
        $('.container').removeClass('active');

        // Obtém o índice do slide ativo e adiciona a classe "active" ao indicador correspondente
        var slideIndex = $('#meuCarousel .carousel-item.active').index();
        var slideAtivo = $('.container[data-slide-to="' + slideIndex + '"]').addClass('active');


        const dataSlide = $(".container[data-slide-to='0']")
        const dataSlide1 = $(".container[data-slide-to='4']")
        const dataSlide2 = $(".container[data-slide-to='5']")
        const dataSlide3 = $(".container[data-slide-to='6']")
        const dataSlide4 = $(".container[data-slide-to='8']")


        if(dataSlide4.hasClass('active')){
            dataSlide.removeClass('slide-in')
            dataSlide.addClass('slide-out');
        }
        else{
            dataSlide.removeClass('slide-out');
            dataSlide.addClass('slide-in');
        }
        
        
        if(dataSlide1.hasClass("active") || dataSlide2.hasClass("active") || dataSlide3.hasClass("active")) {
            $(".container[data-slide-to='5'], .container[data-slide-to='6']").show()
            if(dataSlide3.hasClass("active")){
                dataSlide2.hide()
                dataSlide3.show()
            }
        }              
        else{
            $(".container[data-slide-to='5'], .container[data-slide-to='6']").hide()
        }
        
    });
    
  })
