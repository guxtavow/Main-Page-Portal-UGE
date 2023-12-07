document.addEventListener("DOMContentLoaded", function() { //faz com que as funções apareçam assim que a pagina for carregada
    var elementToFade = document.getElementById("logoSebrae");

    // Função para fazer o fade in
    function fadeIn() { 
        elementToFade.classList.add("fade-in"); //adiciono uma classe chamada fade in na tag hmtl
        elementToFade.style.opacity = 1;//mudo a opacidade
    }

    // Ativa o fade in assim que a página for carregada
    fadeIn();


    function startAnimation() { //animação do logo Sebrae diminuindo
        elementToFade.removeEventListener("transitionend", startAnimation); // Remove o listener para evitar múltiplas chamadas

        // Adiciona a classe para a animação
        elementToFade.classList.add("animate");
    }

    // Adiciona um ouvinte para o evento de transição
    elementToFade.addEventListener("transitionend", startAnimation);

    // Ativa o fade in assim que a página for carregada
    fadeInAndAnimate();
});

document.addEventListener("DOMContentLoaded", function() { //chamo mais uma vez as funções assim que o cache for carregado
    // Definir um tempo de espera de 7000 milissegundos (7 segundos)
    setTimeout(abrirOffcanvas, 7000);
    setTimeout(sumirObjeto,11000)
    setTimeout(sumirObjeto2,12000)
    setTimeout(sumirOffCanvas,14000)
  });
  
  function abrirOffcanvas() { //função para abrir o offcanvas
    document.getElementById("offcanvas").classList.add("offcanvas-aberto"); //pego o elemendo e adiciono uma nova classe
  }
  function sumirObjeto(){
    var objeto1 = document.getElementById("imagem")
    objeto1.style.opacity = 0;
  }
  function sumirObjeto2(){
    var objeto2 = document.getElementById("conteudo")
    objeto2.style.opacity = 0;
  }
  function sumirOffCanvas() {
    document.getElementById("offcanvas").classList.add("offcanvas-fechado")
  }


  setTimeout(function(){
    window.location.href = "/main";
  },16000)  
  