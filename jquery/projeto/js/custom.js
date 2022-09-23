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
       700:{
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
   - Manipulação de eventos

      $('.featured-item a').on('blur', function(event){

         event.preventDefault();

         alert('Produto esgotado');

      })
*/


/*
   - Callbacks 
   Ações executadas após o término de outra ação.

   $('.item:nth(4)')
      .hide(2000, function() {
         console.log($(this).find('h4').text() + ' esgotado.')
      })
      .show(2000, function() {
         console.log($(this).find('h4').text() + ' em estoque.')
      })
*/

/**
 * Animações

 const duracao = 1000
 $('.item:nth(4)')
       .hide(duracao, function() {
          console.log('hide')
       })
       .show(duracao, function() {
          console.log('show')
       })
       .fadeOut(duracao, function() {
          console.log('fadeOut')
       })
       .fadeIn(duracao, function() {
          console.log('fadeIn')
       })
       .toggle(duracao, function() {
          console.log('toggle1')
       })
       .toggle(duracao, function() {
          console.log('toggle2')
       })
 */

/**
 * Ouvinte de eventos  .nav-modal-open (EventListener para abertura de modal) 
 */

$('.nav-modal-open').on('click', function(e) {
   e.preventDefault();

   // this = elemento que possui a classe .nav-modal-open
   // let element é o atributo 'rel' do elemento 'this', e será utilizado como referência para abrir o modal correto,
   // seja o modal de 'contato' ou o modal 'sobre'
   let element = $(this).attr('rel');

   // Coloco dentro do modal-body, o conteúdo que foi referenciado, a partir da variável element. Pode ser o conteúdo
   // do formulário de contato como o conteúdo da seção sobre.
   // Repare que dentro do html() eu coloco o id do elemento referenciado, portanto devo concatenar # com o element,
   // que é o atributo 'rel' do elemento.
   // $('#'+element) - criação de um seletor dinâmico a partir de uma variável.
   // $('#'+element).html() - pega o conteúdo html do seletor
   // $('.modal-body').html() - Coloca um conteúdo html dentro do elemento .modal-body
   $('.modal-body').html($('#'+element).html());

   // Altera o conteúdo do título do modal (h5.modal-title), de acordo com o nome que está escrito no
   // corpo do elemento referenciado
   $('h5.modal-title').html($(this).text());

   // Ação de abertura do modal para que ele funcione ao clicar em sobre nós ou contato
   let myModal = new bootstrap.Modal($('#exampleModal'));

   myModal.show();
});

// função que valida se o campo está vazio
function validate(element) {
   if(element.val() == '' ) {
      console.log('O '+ element.attr('name') + ' é obrigatório.');

      // busca o elemento pai do .text-muted ( parent().find(.text-muted) ) e exibe
      element.parent().find('.text-muted').show();

      // Se o input não for validado, adiciona a classe 'invalid', para aplicar o estilo definido no
      // arquivo css.
      element.addClass('invalid');

      return false;
   } else {
      element.parent().find('.text-muted').hide();
      element.removeClass('invalid');
   }
}

/**
 * Ouvinte de eventos  .form (EventListener para validação de formulário) 
 */
// Quando o usuário der o submit do form, executa a função
// Para controlar eventos e objetos dinâmicos, com jquery, devo fazer a seleção no elemento 'body',
// observo o evento. Neste caso, estou observando qualquer submit no body, que esteja dentro de ".modal-body .form".
// Mesmo que no .html, o form está fora do modal, ele é renderizado dentro do modal.

// Como o form está dentro do modal, precisamos passar no primeiro seletor o body
// e o soletor do form, passamos no segundo parâmetro do método on(). Isso porque,
// o form só vai existir depois que o .modal-body entrar na tela. 
$('body').on('submit', '.modal-body .form', function(e) {
   e.preventDefault();

   const inputName = $('#nome');
   const inputEmail = $('#email');

   validate(inputName);
   validate(inputEmail);

   // se algum dos campos estiver com a class 'invalid', não permite o submit do form,
   // retornado false, caso contrário envia o formulário ($(this).submit();)
   if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid')) {
      console.log('Verifique os campos obrigatórios.')
      return false;
   } else {
      $(this).submit();
   }
});

/**
 * Captura evento blur(sai o foco do campo) no input, para validar o campo, antes do submit.
 * Se eu quiser deixar a validação ocorrer após o submit, basta eu adcionar
 * a validação dentro do evento de submit, acima.
 */

// Validaçao campo nome
$('body').on('blur', '#nome', function() {
   validate($(this));
});

// Validaçao campo email
$('body').on('blur', '#email', function() {
   validate($(this));
});

// Validaçao campo date
$('body').on('blur', '#date', function() {
   validate($(this));
   $('#date').mask('00/00/0000');
});

// Validaçao campo time
$('body').on('blur', '#time', function() {
   validate($(this));
   $('#time').mask('00:00');
});

// Validaçao campo cep
$('body').on('blur', '#cep', function() {
   validate($(this));
   $('#cep').mask('00000-000');
});

// Validaçao campo phone
$('body').on('blur', '#phone', function() {
   validate($(this));
   $('#phone').mask('00000-0000');
});

// Validaçao campo cpf
$('body').on('blur', '#cpf', function() {
   validate($(this));
   $('#cpf').mask('000.000.000-00');
});



