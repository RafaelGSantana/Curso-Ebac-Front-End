$('.owl-carousel').owlCarousel({
   loop:true,
   margin:10,
   nav:true,
   dots: true,
   center: true,
   responsive:{
       0:{
           items:1
       },
       600:{
           items:2
       },
       1000:{
           items:3
       },
       1440:{
         items:4
       }
   }
})

// instancia jquery e evita conflitos
// jQuery( function($){
// $(document).ready(function(){

//     $('.owl-carousel').owlCarousel();

//     let titulos = $('h4') // tag
   
//     let itens = $('.featured-item') // class
    
//     let destaques = $('#featured') // id

//     console.log(titulos.first());
    

    // Configuração de produtos

   //  $('.featured-item a').addClass('btn btn-dark stretch-link');

   //  $('.featured-item:first h4').append('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').start('<span class="badge bg-secondary">Novo</span>') // Adc o html no início do elemento
    // $('.featured-item:first h4').html('<span class="badge bg-secondary">Novo</span>')
    // $('.featured-item:first h4').addClass('active') // Adc classe ao elemento
    // $('.featured-item:first h4').removeClass('active') // Remove classe do elemento
    // $('.featured-item:first h4').toggleClass('active') // adiciona ou remove a class active, baseado em algum evento
    // $('.featured-item:first h4').hide() // Esconde o elemento (display: none)
    // $('.featured-item:first h4').show() // Exibe o elemento
    // $('.featured-item:first h4').fadeIn(2000) // Efeito de transição, em milissegundos, na entrada do elemento
    // $('.featured-item:first h4').fadeOut() // Efeito de transição, em milissegundos, na saída do elemento
    //  $('.featured-item:first h4').css('color', '#f00')
     
   //   $('.featured-item h4').dblclick( function(){

   //      $(this).css({
   //          'color': '#f00',
   //          'background': '#ff0',
   //          'font-weight': '100',
   //      });

   //   });

     /*
      * Manipulação de eventos
      */
   //   $('.featured-item a').on('blur', function(event){

   //      event.preventDefault();

   //      alert('Produto esgotado');

   //   })
