$(document).ready(function () {

  setTimeout(function () {
    $('.loader').slideUp();
  }, 1500);

$('.bt-avancar').click(function(event) {
  $('#passo1').slideUp('fast');
  $('#passo2').slideDown('fast');
});

$('.bt-voltar').click(function(event) {
  $('#passo2').slideUp('fast');
  $('#passo1').slideDown('fast');
});

$('#meu_carrinho .bt-avancar').click(function(event) {
  $('#c1').slideUp('fast');
  $('#c2').slideDown('fast');
});

$('#meu_carrinho .bt-voltar').click(function(event) {
  $('#c2').slideUp('fast');
  $('#c1').slideDown('fast');
});

$('.alterar').click(function(event) {
  $('.alterar-video').show('fast');
});

  $("#calendario").simpleCalendar({
                months: ["janeiro", "fevereiro", "março", "abril", "maio", "junho", "julho", "agosto", "setempro", "outubro", "novembro", "dezembro"],
                days: ["domingo", "segunda", "terça", "quarta", "quinta", "sexta", "sábado"],
                events: [
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 12, 0)).toISOString(),

                        endDate: new Date(new Date().setHours(new Date().getHours() - new Date().getHours() - 11)).getTime(),

                        summary: "Aula com Professor Paulo, Inglês <br> <a class='btn default' href='#' data-toggle='modal' data-target='#detalhes_aula'>Ver mais detalhes</a>",
                    },
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() + 24)).toDateString(),
                        endDate: new Date(new Date().setHours(new Date().getHours() + 25)).toISOString(),

                        summary: "Aula com Professor Paulo, Inglês",
                    },
                    {
                        startDate: new Date(new Date().setHours(new Date().getHours() - 48)).toISOString(),

                        endDate: new Date(new Date().setHours(new Date().getHours() - 24)).getTime(),

                        summary: "Aula com Professor José, Português",
                    },
                ],
            });

  $(".anch").click(function (event) {
        var hash = this.hash;
        $(".insider").fadeOut(10);
        $(hash).fadeIn();
         $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800);

    });


$(window).resize(function () {
    $("section").css("width", $(window).width());
    $(".navbar").css("width", $(window).width());
    $("body").css("width", $(window).width());
    $(".menu-lateral").css("height", $(window).height());
});


  $('.closeActual').click(function(event) {
    $('.modal').modal('hide');
  });

  $('.bt-filtro').click(function(event) {
     $(".filtros").animate({ height: "toggle" }, 100);
  });

  $('#olho1').click(function (event) {
    $(this).fadeOut();
    $('#olho1-fechado').fadeIn();
    $("#loginSenha").prop("type", "password");

  });

  $('#olho1-fechado').click(function (event) {
    $(this).fadeOut();
    $('#olho1').fadeIn();
    $("#loginSenha").prop("type", "text");


  });

  $('#ajudaAssunto').change(function(){
      if($(this).val() == '2'){
        $('.aulas-confirmadas').slideDown();
      } else {
            $('.aulas-confirmadas').slideUp();
        }
    });


  $('.first-button').on('click', function () {

    $('.animated-icon1').toggleClass('open');
  });
  $('.second-button').on('click', function () {

    $('.animated-icon2').toggleClass('open');
  });
  $('.third-button').on('click', function () {

    $('.animated-icon3').toggleClass('open');
  });

  // Add scrollspy to <body>
  $('body').scrollspy({
    target: ".navbar",
    offset: 50
  });

  $('.botao-participe').click(function (event) {
    $('html,body').animate({
      scrollTop: $("#participe").offset().top
    });
  })
  // Add smooth scrolling on all links inside the navbar
  $("#menu a").on('click', function (event) {
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

  /*ACCORDION*/

  $('.acordion').click(function () {

    //REMOVE THE ON CLASS FROM ALL BUTTONS
    $('.acordion').removeClass('on');

    //NO MATTER WHAT WE CLOSE ALL OPEN SLIDES
    $('.conteudo').slideUp('normal');

    //IF THE NEXT SLIDE WASN'T OPEN THEN OPEN IT
    if ($(this).next().is(':hidden') == true) {

      //ADD THE ON CLASS TO THE BUTTON
      $(this).addClass('on');

      //OPEN THE SLIDE
      $(this).next().slideDown('normal');
    }

  });
});