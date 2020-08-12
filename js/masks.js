$(function($){
    $(".so-numeros").keyup(function () {
		this.value = this.value.replace(/[^0-9\.]/g,'');
    });

    // $(".so-letra").keyup(function () {
    //     this.value = this.value.replace(/[^a-zA-Z_0-9-]/g, '')
    // });


     $('.so-letra').on('keypress keyup blur paste', function (e) {
        var regex = /[^A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ]/g;
        if (regex.test(this.value)) {
             this.value = this.value.replace(regex, '');
         }
     });

//     $('.so-letra').bind('keyup blur',function(){ 
//     var node = $(this);
//     node.val(node.val().replace(/[^a-z]/g,'') ); }
// );

    $(".formato-cpf").mask("000.000.000-00");
    $(".formato-cnpj").mask("00.000.000/0000-00");
    $(".formato-data").mask("00/00/0000");
    $(".formato-cep").mask("00000-000");
    $('.formato-valor').mask('00.000,00', {reverse: true});
    $(".formato-numero").mask('0#');
    $('.formato-rg').mask('ZZZZZZZZZZZZZZZZZZZZ', { translation: { 'Z': { pattern: /[0-9A-Za-z\ \-\.]/, optional: true } } });

    //MÁSCARAS
	var SPMaskBehavior = function (val) {
	    return val.replace(/\D/g, '').length <= 10 ? '(00) 0000-00009' : '(00) 00000-0009';
	},
    spOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(SPMaskBehavior.apply({}, arguments), options);
        }
    };
	$('.formato-telefone').mask(SPMaskBehavior, spOptions);
	$('.formato-celular').mask('(00) 00000-0000');

	$('.formato-cod-barras').mask('0 000000 000000');

    //autoNumeric
	//$(".formato-valor").autoNumeric('init', { aSep: '.', aDec: ',', aSign: 'R$ ', vMax: '999.99' });
    //maskMoney
    //$("#txtValorTotal").maskMoney({ prefix: 'R$ ', allowNegative: false, thousands: '.', decimal: ',', affixesStay: false });

	$('.formato-email').bind('copy cut paste', function (e) {
        e.preventDefault();
    });

	$(".formato-pincode").mask("AAAAAAAAA");
	//$("#txtCodigoDeBarras").mask("0000000000000");

	$('.formato-senha').bind('copy cut paste', function (e) {
	    e.preventDefault();
	});

	var PINMaskBehavior = function (val) {
	    return val.replace(/\D/g, '').length <= 9 ? 'AAAAAAAAA9' : '0 000000 000009';
	},
    PINOptions = {
        onKeyPress: function (val, e, field, options) {
            field.mask(PINMaskBehavior.apply({}, arguments), options);
        }
    };
	$('.formato-pincode-variavel').mask(PINMaskBehavior, PINOptions);
});