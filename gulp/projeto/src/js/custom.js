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

// função dinâmica que valida se o campo está vazio
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

// Verifica se nome é válido(mínimo 2 caracteres)
function validateNameInput() {
  if ($('#nome').val().length > 0 && $('#nome').val().length < 2) {
      // Encontra o span.text-muted, altera o texto padrão e exibe msg de erro
      $('#nome')
         .parent()
         .find('.text-muted')
         .html('Digite ao menos 2 caracteres')
         .show();

      $('#nome').addClass('invalid');
      
      return false; // não permite o envio do form
   } else {
      return true
   }
}

// Verifica se e-mail é válido(deve conter a estrutura mínima de e-mail x@x.com)
function validateEmailInput() {
   const emailRegex = /^([a-zA-Z0-9_\.\-\+])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})/;

   if($('#email').val() != '' && !emailRegex.test($('#email').val())) {
      // Encontra o span.text-muted, altera o texto padrão e exibe msg de erro
      $('#email')
         .parent()
         .find('.text-muted')
         .html('Digite um e-mail válido (Ex.: xxxx@x.com)')
         .show();

      $('#email').addClass('invalid');

      return false;
   } else {
      return true;
   }
}

// Verifica se cpf é válido /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/
function validateCpfInput() {
   const cpfRegex = /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/;

   if($('#cpf').val() != '' && !cpfRegex.test($('#cpf').val())) {
      $('#cpf')
         .parent()
         .find('.text-muted')
         .html('Digite um cpf válido. Ex.: 000.000.000-00')
         .show();

      $('#cpf').addClass('invalid');

      return false;
   } else {
      return true;
   }
}

// Verifica se celular é válido 
function validatePhoneInput() {
   const phoneRegex = /^9\d{4}\-\d{4}$/;

   if($('#phone').val() != '' && !phoneRegex.test($('#phone').val())) {
      $('#phone')
         .parent()
         .find('.text-muted')
         .html('Digite um número de celular válido. Ex.: 90000-0000')
         .show();
      
      $('#phone').addClass('invalid');
      return false;
   } else {
      return true;
   }
}


/**
 * Validação dos campos no evento onSubmit 
 */
$('body').on('submit', '.modal-body .form', function(e) {
   e.preventDefault();

   const inputName = $('#nome');
   const inputEmail = $('#email');
   const inputPhone = $('#phone');
   const inputCpf = $('#cpf');

   validate(inputName);
   validate(inputEmail);
   validate(inputPhone);
   validate(inputCpf);

   validateNameInput();
   validateEmailInput();
   validateCpfInput();
   validatePhoneInput();

   // se algum dos campos estiver com a class 'invalid', não permite o submit do form,
   // retornado false, caso contrário envia o formulário ($(this).submit();)
   if(inputName.hasClass('invalid') || inputEmail.hasClass('invalid') || inputCpf.hasClass('invalid') || inputPhone.hasClass('invalid')) {
      console.log('formulário not ok')
      return false;
   } else {
      alert('formulário enviado com sucesso')
   }
   
});

/**
 * Validação dos campos no evento onBlur (Input sai de foco)
 */

// Validaçao campo nome
$('body').on('blur', '#nome', function() {
   validate($(this));
   validateNameInput();
});

// Validaçao campo email
$('body').on('blur', '#email', function() {
   validate($(this));
   validateEmailInput();
});

// Validaçao campo phone
$('body').on('blur', '#phone', function() {
   validate($(this));
   $('#phone').mask('90000-0000');
   validatePhoneInput();
});

// Validaçao campo cpf
$('body').on('blur', '#cpf', function() {
   validate($(this));
   $('#cpf').mask('000.000.000-00');
   validateCpfInput();
});



