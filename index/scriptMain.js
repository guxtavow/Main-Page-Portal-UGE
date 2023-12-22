$(".container[data-slide-to='5'], .container[data-slide-to='6']").hide();

$(document).ready(function () { //Inicio o processo para rolagem do carrossel

    $('#meuCarousel').on('slid.bs.carousel', function (e) {//trago a id do html e defino uma função de troca de indicadores
        // Remove a classe "active" de todos os indicadores
        $('.container').removeClass('active');

        // Obtém o índice do slide ativo e adiciona a classe "active" ao indicador correspondente
        var slideIndex = $('#meuCarousel .carousel-item.active').index();
        $('.container[data-slide-to="' + slideIndex + '"]').addClass('active');

        //salvando os index de cada indicador do menu em uma variavel
        const dataSlide = $(".container[data-slide-to='0']")
        const dataSlide1 = $(".container[data-slide-to='4']")
        const dataSlide2 = $(".container[data-slide-to='5']")
        const dataSlide3 = $(".container[data-slide-to='6']")
        const dataSlide4 = $(".container[data-slide-to='8']")

        
        //fazendo um ifelse onde caso o slide 8 estiver com o active, resultar na remoção com animação da tela do primeiro elemento do menu
        if(dataSlide4.hasClass('active')){
            dataSlide.removeClass('slide-in')
            dataSlide.addClass('slide-out');
        }
        else{ //logo assim que n estiver mais com a classe "active", trazer de volta o item
            dataSlide.removeClass('slide-out');
            dataSlide.addClass('slide-in');
        }

        //assim que a classe "active" chega no index 5 do menu, ativa mais 2 containers no próprio 
        if(dataSlide1.hasClass("active") || dataSlide2.hasClass("active") || dataSlide3.hasClass("active")) {
            $(".container[data-slide-to='5'], .container[data-slide-to='6']").show()
            if(dataSlide3.hasClass("active")){ //assim que acabar um slide, sumir e deixar apenas o slide seguinte
                dataSlide2.hide()
                dataSlide3.show()
            }
        }              
        else{//depois sumir ambos
            $(".container[data-slide-to='5'], .container[data-slide-to='6']").hide()
        }
        



    });
    




  })
